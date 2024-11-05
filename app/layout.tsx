import { Providers } from "@/redux-state";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "../styles/globals.css";

const lato = Lato({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Payeasy",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={lato.className}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
