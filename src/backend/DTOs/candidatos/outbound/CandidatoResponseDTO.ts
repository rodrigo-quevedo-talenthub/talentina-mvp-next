import { EstadoCandidato } from "@prisma/client";

export interface CandidatoResponseDTO {
    id: number,
    nombre: string,
    email: string,
    telefono: string | null,
    skills: string[],
    experiencia: number,
    educacion: string | null,
    experiencia1: string | null,
    experiencia2: string | null,
    createdAt: Date,
    updatedAt: Date,
    urlLinkedin: string | null,
    estado: EstadoCandidato
}