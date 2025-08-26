import { useState } from "react";

import { postCandidato } from "@/api/candidatos/postCandidato";
import type { PostCandidato } from "@/types/front/index";


export function useCandidatoForm(){
    const [nombre, setNombre] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [telefono, setTelefono] = useState<string>("");
    const [skills, setSkills] = useState<string[]>([]);
    const [skillActual, setSkillActual] = useState<string>("");
    const [experiencia, setExperiencia] = useState<number>(0);
    const [educacion, setEducacion] = useState<string>("");
    const [urlLinkedin, setUrlLinkedin] = useState<string>("");
    const [experiencia1, setExperiencia1] = useState<string>("");
    const [experiencia2, setExperiencia2] = useState<string>("");

    const apiSubmit = async (candidato: PostCandidato) => {
        await postCandidato(candidato);        
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const candidato: PostCandidato = {
            nombre,
            email,
            telefono,
            skills,
            experiencia,
            educacion,
            urlLinkedin,
            experiencia1,
            experiencia2
        };

        await apiSubmit(candidato);

        // Limpiar
        setNombre("");
        setEmail("");
        setTelefono("");
        setSkills([]);
        setExperiencia(0);
        setEducacion("");
        setUrlLinkedin("");
        setExperiencia1("");
        setExperiencia2("");
    };


    return ({
        nombre, setNombre,
        email, setEmail,
        telefono, setTelefono,
        skills, setSkills,
        skillActual, setSkillActual,
        experiencia, setExperiencia,
        educacion, setEducacion,
        urlLinkedin, setUrlLinkedin,
        experiencia1, setExperiencia1,
        experiencia2, setExperiencia2,

        handleSubmit
    })

}