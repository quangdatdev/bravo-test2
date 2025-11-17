import { NextResponse, NextRequest } from "next/server";

export async function POST(req : NextRequest) {
  const form = await req.formData();

  const phone = form.get("phone");
  const confirm = form.get("confirm") === "true";
  const image = form.get("image") as File | null;


  console.log("Phone:", phone);
  console.log("Confirm:", confirm);
  console.log("Image:", image?.name);

  // TODO:
  // - Lưu vào database
  // - Lưu ảnh vào server, Cloudinary hoặc S3
  // - Gửi dữ liệu về email hoặc webhook

  return NextResponse.json({ message: "Đã lưu thành công!" });
}
