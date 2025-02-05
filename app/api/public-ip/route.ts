import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const headers = req.headers;
      const forwardedFor = headers.get("x-forwarded-for");
    
      // If behind a proxy (Cloudflare, Vercel, Nginx)
      const ip = forwardedFor ? forwardedFor.split(",")[0] : req.headers.get("cf-connecting-ip") || "Unknown";
    return NextResponse.json({ ip: ip });
  } catch (error) {
    console.error("Error fetching public IP:", error);
    return NextResponse.json({ ip: "Error fetching IP" });
  }
}
