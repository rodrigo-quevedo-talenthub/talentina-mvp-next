import CandidatoDAO from "@/DAOs/CandidatoDAO";
import {Candidato} from "@/types/back/entities/Candidato";



export default async function getPostulantesService(): Promise<Candidato[]>{

    let arrCandidatos = await CandidatoDAO.getCandidatos();
    
    if (arrCandidatos.length == 0) 
        //TODO: custom error HTTP response (requerirá tambien el manejo de custom errors)
        throw new Error("No se encontraron candidatos")

    return arrCandidatos;
}