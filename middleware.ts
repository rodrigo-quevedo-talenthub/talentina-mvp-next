import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { logTime } from "@/middlewares/logTime";



export function middleware(req: NextRequest) {
    let res = NextResponse.next();

    logTime(req);

    //No necesita CORS porque front y back tienen el mismo origin (misma ip y puerto), es decir, es el mismo server.

    return res;
}


