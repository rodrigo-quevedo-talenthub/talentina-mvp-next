import { NextRequest, NextResponse } from "next/server";
import { postCandidatoController } from "./controllers/postCandidatoController";



export async function POST(req: NextRequest){
    return postCandidatoController(req);
}