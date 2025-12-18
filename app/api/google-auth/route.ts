import { NextResponse } from "next/server";
import { google } from 'googleapis';

export async function GET() {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: [
        'https://www.googleapis.com/auth/drive.readonly',
        'https://www.googleapis.com/auth/drive.file',
      ],
    });

    const authClient = await auth.getClient();
    const accessToken = await authClient.getAccessToken();

    return NextResponse.json({
      accessToken: accessToken.token,
    });
  } catch (error: any) {
    console.error('Google Auth Error:', error);
    return NextResponse.json(
      { error: 'Failed to get Google access token' },
      { status: 500 }
    );
  }
}