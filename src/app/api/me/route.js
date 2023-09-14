import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Phuenpa Champasri",
    studentId: "650612090",
  });
};
