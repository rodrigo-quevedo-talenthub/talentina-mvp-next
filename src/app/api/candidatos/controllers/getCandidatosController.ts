import { NextRequest, NextResponse } from "next/server";

import getCandidatosService from "@/services/candidatos/getCandidatosService";
import { CandidatoResponseDTO } from "@/DTOs/candidatos/outbound/CandidatoResponseDTO";



export async function getCandidatosController(req: NextRequest){

    let arrCandidatos = await getCandidatosService();

    //TODO: filtrar info que se mande al front
    // let arrCandidatosResponseDTO: CandidatoResponseDTO[] = filtrarInfoArrCandidatosService()

    let arrCandidatosResponseDTO: CandidatoResponseDTO[] = arrCandidatos as CandidatoResponseDTO[];

    return NextResponse.json(arrCandidatosResponseDTO);
}