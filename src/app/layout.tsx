import type { Metadata } from "next";
import "../styles/index.css"; //entry point css global
import Header from "@/components/Header/Header";


export const metadata: Metadata = {
  title: "ASDFASDFASDF",
  description: "lorem ipsum dolor sit amet",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
    return (
        <html lang="en">
            <body >
                <Header/>

                {/* El children va a ser cada <main> de las pages */}
                {children}

            </body>
        </html>
    );
}
