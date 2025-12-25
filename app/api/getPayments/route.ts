import { NextRequest, NextResponse } from 'next/server';
import type { PaymentRow } from '@/types';

// Google Sheets Configuration
const SHEET_ID = process.env.GOOGLE_SHEET_ID_PAYMENT!;
const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY!;


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

    // const sheetName = month;
      const range = `${month}!A1:M1000`;
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${encodeURIComponent(range)}?key=${API_KEY}`;

    const response = await fetch(url, { cache: 'no-store' });
    const data = await response.json();

    if (!data.values || data.values.length < 2) {
      return NextResponse.json({ success: true, payments: [] });
    }

    // Skip header row
    const payments: PaymentRow[] = data.values
      .slice(1)
      .map((row: string[], index: number) => ({
        rowId: String(index + 2),

        seatNo: row[0] || '',
        studentName: row[1] || '',

        joiningDate: row[2] || '',
        dueDate: row[3] || '',

        monthlyAmount: Number(row[4] || 0),
        mobile: row[5] || '',

        receivedPayment: Number(row[6] || 0),
        receivedDate: row[7] || '',

        balanceAmount: Number(row[8] || 0),
        remark: row[9] || '',

        email: row[10] || '',
        status: row[11] || "Pending",
        verificationDate: row[12] || "N/A"
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
