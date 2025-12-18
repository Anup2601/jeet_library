import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate required fields
    const requiredFields = [
      'studentName', 'fatherName', 'dob', 'gender', 'nationality',
      'address', 'mobile', 'joiningDate', 'advanceAmount', 'paymentMode',
      'timeDuration', 'seatNo', 'medicalCondition', 'photoUrl', 'idProofUrl'
    ];

    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { status: "error", message: `${field} is required` },
          { status: 400 }
        );
      }
    }

    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
    if (!scriptUrl) {
      return NextResponse.json(
        { status: "error", message: "GOOGLE_SCRIPT_URL not set" },
        { status: 500 }
      );
    }

    // Prepare data for Google Sheets
    const sheetData = {
      timestamp: new Date().toISOString(),
      studentName: body.studentName,
      fatherName: body.fatherName,
      dob: body.dob,
      gender: body.gender,
      nationality: body.nationality,
      address: body.address,
      mobile: body.mobile,
      email: body.email || 'N/A',
      joiningDate: body.joiningDate,
      advanceAmount: body.advanceAmount,
      paymentMode: body.paymentMode,
      timeDuration: body.timeDuration,
      seatNo: body.seatNo,
      medicalCondition: body.medicalCondition,
      medicalDetails: body.medicalDetails || 'N/A',
      hearAboutUs: body.hearAboutUs || 'N/A',
      photoUrl: body.photoUrl,
      idProofUrl: body.idProofUrl,
    };

    const googleRes = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sheetData),
    });

    if (!googleRes.ok) {
      const errorText = await googleRes.text();
      console.error('Google Script Error:', errorText);
      return NextResponse.json(
        {
          status: "error",
          message: "Failed to save to Google Sheets",
          details: errorText,
        },
        { status: 500 }
      );
    }

    const result = await googleRes.json();

    return NextResponse.json({
      status: "success",
      message: "Registration submitted successfully",
      result,
    });

  } catch (error: any) {
    console.error('Submit Error:', error);
    return NextResponse.json(
      { status: "error", message: error.message || "Unexpected error" },
      { status: 500 }
    );
  }
}