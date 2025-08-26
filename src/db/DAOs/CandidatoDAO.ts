import { CandidatoEntityDTO } from "@/DTOs/candidatos/internal/CandidatoEntityDTO";
import { Candidato } from "@/types/back/entities/Candidato";

import prisma from "@/config/prisma";


const PostulanteDAO = {
    
    async  getCandidatos(): Promise<Candidato[]> {

        try{
            return await prisma.candidato.findMany();
        }
        catch(e){
            //DB errors de conexion/network
            throw e;
        }
    },

    async crearCandidato(candidatoEntityDTO: CandidatoEntityDTO): Promise<Candidato>{
        try{
            return await prisma.candidato.create({data: candidatoEntityDTO});
        }
        catch(e){
            //DB errors de conexion/network
            throw e;
        }
    }

}

export default PostulanteDAO;