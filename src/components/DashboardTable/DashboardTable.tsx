"use client";

import useBuscarCandidatos from "../../hooks/useBuscarCandidatos";

import styles from "./DashboardTable.module.css"
import SettingsButton from "./SettingsButton/SettingsButton";


export default function DashboardTable() {

    const { arrCandidatos, loading, error } = useBuscarCandidatos();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;


    return (

        <>
       
        <SettingsButton/>

        <div className={styles.container}>

            <table className={styles.tablaContainer}>
                <thead>
                    <tr>
                        <th>NOMBRE</th>
                        <th>EMAIL</th>
                        {/* <th>TELEFONO</th> */}
                        <th>SKILLS</th>
                        <th>AÑOS EXP.</th>
                        <th>EXPERIENCIAS</th>
                        <th>EDUCACIÓN</th>
                        <th>URL LINKEDIN</th>
                        <th>ESTADO</th>
                    </tr>

                    {/* <th>Fecha registro</th>
                    <th>Fecha ultima modificación</th> */}
                </thead>

                <tbody>
                    {arrCandidatos.map((candidato)=>{
                        return (
                            <tr key={candidato.id}>
                                <td>{candidato.nombre}</td>
                                <td>{candidato.email}</td>
                                {/* <td>{candidato.telefono}</td> */}
                                <td>
                                    <ul>
                                        {candidato.skills.map((skill)=>{
                                            return (<li className={styles.skill}>{skill.toUpperCase()}</li>)
                                        })}
                                    </ul>
                                </td>
                                <td>{candidato.experiencia}</td>
                                <td>
                                    <ul className={styles.listaExperiencias}>
                                        <li>{candidato.experiencia1}</li>
                                        <li>{candidato.experiencia2}</li>
                                    </ul>
                                </td>
                                <td>{candidato.educacion}</td>
                                <td>{candidato.urlLinkedin}</td>
                                <td>{String(candidato.estado)}</td>

                                {/* <td>{candidato.createdAt.toLocaleString()}</td>
                                <td>{candidato.updatedAt.toLocaleString()}</td> */}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        </>
    )
}