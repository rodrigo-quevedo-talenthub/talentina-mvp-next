import type { Candidato } from "../../../types/frontend/index";


export async function getCandidatos(): Promise<Candidato[]> {
  
    const res = await fetch('/api/candidatos');

    if (!res.ok) throw new Error("No se pudo traer los candidatos")
  
    return res.json();
}