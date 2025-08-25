
//TODO: revisar este type
export type EstadoCandidato = {
  PENDIENTE: 'PENDIENTE',
  PRESELECCIONADO: 'PRESELECCIONADO',
  ENTREVISTA: 'ENTREVISTA',
  DESCARTADO: 'DESCARTADO',
  CONTRATADO: 'CONTRATADO'
};


export interface Candidato {
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

export interface PostCandidato {
    nombre: string,
    email: string,
    telefono: string,
    skills: string[],
    experiencia: number,
    educacion: string,
    urlLinkedin: string,
    experiencia1: string,
    experiencia2: string
}

    // "id": 1,
    // "nombre": "Juan Pérez",
    // "email": "juan.perez@example.com",
    // "telefono": "+54 9 351 1234567",
    // "skills": ["Java", "Spring Boot", "SQL"],
    // "experiencia": 3,
    // "educacion": "Ingeniería en Sistemas",
    // "estado": "preseleccionado",// podria ser "enviado" | "preseleccionado" | "seleccionado"
    // "urLinkedin": "https://....",
    // "experiencia1": "texto",
    // "experiencia2": "texto"