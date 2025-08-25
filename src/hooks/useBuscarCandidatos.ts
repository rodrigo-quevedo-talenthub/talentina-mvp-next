import { useEffect, useState } from "react";
import type { Candidato } from "../types/frontend/index";
import { getCandidatos } from "../lib/api/candidatos/getCandidatos";



export default function useBuscarCandidatos() {
    const [arrCandidatos, setArrCandidatos] = useState<Candidato[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getCandidatos()
            .then((res)=>{setArrCandidatos(res)})

            .catch((err) => setError(err.message))
            
            .finally(() => setLoading(false));

    }, []);

    return { arrCandidatos, loading, error };


}