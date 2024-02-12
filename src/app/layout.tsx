import type { Metadata } from "next";
import { ralewar } from "@/fonts";
import "./globals.css";

export const metadata: Metadata = {
    title: "Larrosa Devs",
    description: "",
};

type rootLayoutType = {
    children: React.ReactNode;
};

export default function RootLayout({ children }: rootLayoutType) {
    return (
        <html lang="es">
            <body className={"bg-background text-white " + ralewar.className}>
                {children}
            </body>
        </html>
    );
}
