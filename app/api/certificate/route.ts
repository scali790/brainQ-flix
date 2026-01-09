import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    { ok: false, message: "Certificate endpoint not implemented yet." },
    { status: 501 }
  );
}
