import { ROUTES } from "@/lib/constants/routes";
import Link from "next/link";


const buttonStyle = {padding: "10px", border: "1px solid #000"}

export default function Home() {
    return (
        <main>
                <h1 style={{marginBottom: "10px"}}>Talentina MVP</h1>

                <Link href={ROUTES.POSTULARSE} style={buttonStyle}>Postularse</Link>

                <Link href={ROUTES.DASHBOARD} style={buttonStyle}>Dashboard</Link>

        </main>
    );
}
