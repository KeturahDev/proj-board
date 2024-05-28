import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  console.log("hit");
  const { email, password } = await req.json();
  console.log(email, password);
}
