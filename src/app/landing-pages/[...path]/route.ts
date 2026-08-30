import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const MIME_TYPES: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".woff2": "font/woff2",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".css": "text/css; charset=utf-8",
};

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const resolvedParams = await params;
  const filePathArray = resolvedParams.path || [];
  const relativePath = filePathArray.join("/");
  const fullPath = path.join(process.cwd(), "public", "landing-pages", relativePath);

  if (!fs.existsSync(fullPath) || fs.statSync(fullPath).isDirectory()) {
    return new NextResponse("File not found", { status: 404 });
  }

  const ext = path.extname(fullPath).toLowerCase();
  const contentType = MIME_TYPES[ext] || "application/octet-stream";
  const fileBuffer = fs.readFileSync(fullPath);

  return new NextResponse(fileBuffer, {
    headers: {
      "Content-Type": contentType,
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
