import { NextRequest } from "next/server";
import { getCandidatosController } from "./controllers/getCandidatosController";

export async function GET(req: NextRequest) { //en next.js no se pasan los Response como arg
    return getCandidatosController(req);
}