import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

type OrderPayload = {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  numberOfCopies?: string;
  donationAmount?: string;
  deliveryAddress?: string;
};

const requiredEnv = [
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASS",
  "MAIL_TO",
  "MAIL_FROM",
];

const validateEnv = () =>
  requiredEnv.filter((key) => !process.env[key] || process.env[key] === "");

export async function POST(req: Request) {
  try {
    const missing = validateEnv();
    if (missing.length > 0) {
      return NextResponse.json(
        { ok: false, error: `Missing env vars: ${missing.join(", ")}` },
        { status: 500 }
      );
    }

    const body = (await req.json()) as OrderPayload;
    const { firstName, lastName, phoneNumber, numberOfCopies, donationAmount, deliveryAddress } =
      body;

    if (!firstName || !lastName || !numberOfCopies) {
      return NextResponse.json(
        { ok: false, error: "First name, last name, and number of copies are required." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false otherwise
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const textLines = [
      `New order for "Wizard's Wrath"`,
      `--------------------------------`,
      `Name: ${firstName} ${lastName}`,
      `Phone: ${phoneNumber || "N/A"}`,
      `Copies: ${numberOfCopies}`,
      `Donation amount: ${donationAmount ? `$${donationAmount}` : "N/A"}`,
      `Delivery address: ${deliveryAddress || "N/A"}`,
    ];

    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      subject: `New order from ${firstName} ${lastName}`,
      text: textLines.join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Order email error:", error);
    return NextResponse.json(
      { ok: false, error: "Failed to send order. Please try again." },
      { status: 500 }
    );
  }
}

