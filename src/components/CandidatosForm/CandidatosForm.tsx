"use client";

import { useCandidatoForm } from "../../hooks/useCandidatoForm";
import styles from "./CandidatosForm.module.css"



export default function CandidatosForm() {

    const {
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
    } = useCandidatoForm();

    

    return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
        <div className={styles.formGroup}>
            <label className={styles.label}>Nombre</label>
            <input value={nombre} onChange={e => setNombre(e.target.value)} placeholder="Nombre" className={styles.input} required />
        </div>

        <div className={styles.formGroup}>
            <label className={styles.label}>Email</label>
            <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className={styles.input} required/>
        </div>

         <div className={styles.formGroup}>
            <label className={styles.label}>Teléfono</label>
            <input value={telefono} onChange={e => setTelefono(e.target.value)} placeholder="Teléfono" className={styles.input} required/>
        </div>

        <div className={styles.formGroup}>
            <label className={styles.label}>Skills (Ingresar de a una y apretar ENTER)</label>
            <input 
                value={skillActual} placeholder="Skills"
                onChange={e => setSkillActual(e.target.value)} 
                onKeyDown={(e)=> {
                    if (e.key === "Enter" && skillActual.trim() !== "") {
                        let newArrSkills = skills;
                        newArrSkills.push(skillActual);

                        setSkills(newArrSkills);
                        setSkillActual("");

                        e.preventDefault();//evita que se mande el form
                    }

                }}
                className={styles.input}
            />

            <div className={styles.skillsList}>
                {skills.map((skill, index) => (
                    <span key={index} className={styles.skillItem}>{skill}</span>
                ))}
            </div>
        </div>

     
        <div className={styles.formGroup}>
            <label className={styles.label}>Años de experiencia</label>
            <input type="number" value={experiencia} onChange={e => setExperiencia(Number(e.target.value))} placeholder="Años de experiencia" className={styles.input} required/>
        </div>

        <div className={styles.formGroup}>
            <label className={styles.label}>Educación</label>
            <input value={educacion} onChange={e => setEducacion(e.target.value)} placeholder="Educación" className={styles.input} required/>
        </div>

        <div className={styles.formGroup}>
            <label className={styles.label}>URL LinkedIn</label>
            <input value={urlLinkedin} onChange={e => setUrlLinkedin(e.target.value)} placeholder="URL LinkedIn" className={styles.input}/>
        </div>

        <div className={styles.formGroup}>
            <label className={styles.label}>Experiencia 1</label>
            <input value={experiencia1} onChange={e => setExperiencia1(e.target.value)} placeholder="Experiencia 1" className={styles.input}/>
        </div>

        <div className={styles.formGroup}>
            <label className={styles.label}>Experiencia 2</label>
            <input value={experiencia2} onChange={e => setExperiencia2(e.target.value)} placeholder="Experiencia 2" className={styles.input}/>
        </div>

        <button type="submit" className={styles.submitButton}>Enviar</button>
    </form>
    )

}