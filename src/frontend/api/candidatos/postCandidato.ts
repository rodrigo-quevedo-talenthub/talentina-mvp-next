import type { PostCandidato } from "@/types/front/index";



export async function postCandidato(candidato: PostCandidato) {

    const res = await fetch("/api/candidato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(candidato),
        credentials: "include"
    });

    return res.json();
}

