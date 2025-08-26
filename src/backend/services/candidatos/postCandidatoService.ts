import CandidatoDAO from "@/DAOs/CandidatoDAO";
import { CrearCandidatoDTO } from "@/DTOs/candidatos/inbound/CrearCandidatoDTO";
import { CandidatoEntityDTO } from "@/DTOs/candidatos/internal/CandidatoEntityDTO";
import {Candidato} from "@/types/back/entities/Candidato";



export default async function postCandidatoService(crearCandidatoDTO: CrearCandidatoDTO): Promise<Candidato>{

    let candidatoEntityDTO: CandidatoEntityDTO = crearCandidatoDTO as CandidatoEntityDTO;
    
    //setearlo como 'enviado'por default:
    //prefiero que se haga en el service (en lugar de en el prisma schema con un @default), porque se trata de logica de negocio
    candidatoEntityDTO.estado = "PENDIENTE";

    //TODO: manejo de errores de creacion (types, valores invalidos, etc)
    let nuevoCandidato = await CandidatoDAO.crearCandidato(candidatoEntityDTO);
    

    return nuevoCandidato;
}