import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      fullName,
      email,
      company,
      position,
      message,
    } = body;

    if (!fullName || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete all required fields.",
        },
        { status: 400 }
      );
    }

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: `New Consultation Request from ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; padding: 30px;">
          <h2 style="color: #2563eb;">
            New Consultation Request
          </h2>

          <p>
            Someone has submitted a new consultation request through the
            Remote Talent Co. website.
          </p>

          <hr style="margin: 25px 0; border: none; border-top: 1px solid #e5e7eb;" />

          <p>
            <strong>Full Name:</strong><br />
            ${escapeHtml(String(fullName))}
          </p>

          <p>
            <strong>Email:</strong><br />
            ${escapeHtml(String(email))}
          </p>

          <p>
            <strong>Company:</strong><br />
            ${escapeHtml(String(company || "Not provided"))}
          </p>

          <p>
            <strong>Position Needed:</strong><br />
            ${escapeHtml(String(position || "Not provided"))}
          </p>

          <p>
            <strong>Hiring Needs:</strong>
          </p>

          <p style="white-space: pre-wrap;">
            ${escapeHtml(String(message))}
          </p>

          <hr style="margin: 25px 0; border: none; border-top: 1px solid #e5e7eb;" />

          <p style="color: #64748b; font-size: 14px;">
            This message was submitted through the Remote Talent Co.
            consultation form.
          </p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send email.",
      },
      { status: 500 }
    );
  }
}