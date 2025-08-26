import { NextRequest, NextResponse } from "next/server";

import postCandidatoService from "@/services/candidatos/postCandidatoService";
import { CrearCandidatoDTO } from "@/DTOs/candidatos/inbound/CrearCandidatoDTO";
import { CandidatoResponseDTO } from "@/DTOs/candidatos/outbound/CandidatoResponseDTO";




export async function postCandidatoController(req: NextRequest){

    let crearCandidatoDTO: CrearCandidatoDTO = await req.json() as CrearCandidatoDTO;
    
    //TODO: verificacion de types, formato, rango de valores, etc.
    // verificarInputsCrearCandidatoService()

    let nuevoCandidato = await postCandidatoService(crearCandidatoDTO);

    //TODO: filtrar info que se mande al front
    //let candidatoResponseDTO: CandidatoResponseDTO = filtrarInfoCandidatoService(candidatoResponseDTO);


    let candidatoResponseDTO: CandidatoResponseDTO = nuevoCandidato as CandidatoResponseDTO;

    return NextResponse.json(candidatoResponseDTO);
}