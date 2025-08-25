import DashboardTable from "@/components/DashboardTable/DashboardTable";


export default function DashboardPage() {
    return (
        <main>
            <h1 style={{
                color: "#05143B",
                fontWeight: "400",
                padding: "25px"
            }}>
                Dashboard postulantes
            </h1>

            <DashboardTable/>

        </main>
    );
}
