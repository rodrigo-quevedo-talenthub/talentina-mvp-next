"use client";

import styles from "./Header.module.css"

import { ROUTES } from "../../lib/constants/routes"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header (){

    const pathname = usePathname()

    return (
        <header className={styles.header}>
            <Link href={ROUTES.HOME} className={styles.logo}>
                <img src="/logo.png" alt="TalentHub"/>
            </Link>

            <nav className={styles.nav}>
                <ul>

                    <li className={pathname === ROUTES.POSTULARSE? styles.active:""}>
                        <Link href={ROUTES.POSTULARSE}>Postularse</Link>
                    </li>

                    <li className={pathname === ROUTES.DASHBOARD? styles.active:""}>
                        <Link href={ROUTES.DASHBOARD}>Dashboard</Link>
                    </li>

                </ul>
            </nav>

        </header>
    )
}