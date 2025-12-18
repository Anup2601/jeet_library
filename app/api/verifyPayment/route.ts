import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

// Google Sheets Configuration
const SHEET_ID = process.env.GOOGLE_SHEET_ID || 'YOUR_SHEET_ID';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { month, rowId, studentName } = body;

    if (!month || !rowId) {
      return NextResponse.json(
        { success: false, error: 'Month and rowId are required' },
        { status: 400 }
      );
    }

    // Initialize Google Sheets API with service account
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Get today's date
    const today = new Date().toLocaleDateString('en-US');

    // Update the sheet (Payment Status and Payment Date)
    const range = `${month}!E${rowId}:F${rowId}`; // Columns E & F (Payment Status, Date)
    
    await sheets.spreadsheets.values.update({
      spreadsheetId: SHEET_ID,
      range,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [['Paid', today]],
      },
    });

    return NextResponse.json({
      success: true,
      message: `Payment verified for ${studentName}`,
    });
  } catch (error) {
    console.error('Verify payment error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to verify payment' },
      { status: 500 }
    );
  }
}
