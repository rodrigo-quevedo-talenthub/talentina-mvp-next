import styles from "./SettingsButton.module.css"

export default function SettingsButton() {
    return (
        <button className={styles.container}>
            Configurar vista 
            
            <img src="/icons/settings.svg" className={styles.icon}/>
        </button>
    )
}