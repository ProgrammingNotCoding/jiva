import { NextResponse, type NextRequest } from "next/server";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const middleware = async (req: NextRequest) => {
  const response = NextResponse.next();

  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains"
  );
  
  return response;
};

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|public).*)"],
};
