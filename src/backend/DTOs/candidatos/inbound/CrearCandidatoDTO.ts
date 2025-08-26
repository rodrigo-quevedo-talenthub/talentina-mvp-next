
export interface CrearCandidatoDTO {
    nombre: string,
    email: string,
    telefono: string | null,
    skills: string[],
    experiencia: number,
    educacion: string | null,
    experiencia1: string | null,
    experiencia2: string | null,
    urlLinkedin: string | null
}