import type { Candidato } from "@/types/front/index";



export async function getCandidato(id: number): Promise<Candidato> {
    const res = await fetch(`/api/candidato/${id}`);
  
    return res.json();
}