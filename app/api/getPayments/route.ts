import { NextRequest, NextResponse } from 'next/server';
import type { PaymentRow } from '@/types';

// Google Sheets Configuration
const SHEET_ID = process.env.GOOGLE_SHEET_ID || 'YOUR_SHEET_ID';
const API_KEY = process.env.GOOGLE_API_KEY || 'YOUR_API_KEY';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const month = searchParams.get('month');

    if (!month) {
      return NextResponse.json(
        { success: false, error: 'Month parameter is required' },
        { status: 400 }
      );
    }

    // Fetch data from Google Sheets
    const sheetName = month; // Sheet name matches month name
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${sheetName}?key=${API_KEY}`;

    const response = await fetch(url, { cache: 'no-store' });
    const data = await response.json();

    if (!data.values || data.values.length < 2) {
      return NextResponse.json({
        success: true,
        payments: [],
      });
    }

    // Parse sheet data (skip header row)
    const payments: PaymentRow[] = data.values.slice(1).map((row: string[], index: number) => ({
      rowId: index + 2, // Row ID starts from 2 (after header)
      studentName: row[0] || '',
      mobile: row[1] || '',
      email: row[2] || '',
      course: row[3] || '',
      paymentStatus: row[4] === 'Paid' ? 'Paid' : 'Pending',
      lastPaymentDate: row[5] || '',
    }));

    return NextResponse.json({
      success: true,
      payments,
    });
  } catch (error) {
    console.error('Get payments error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch payments' },
      { status: 500 }
    );
  }
}