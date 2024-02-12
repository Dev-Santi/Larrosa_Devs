import Image from "next/image";
import Link from "next/link";
import { oxanium } from "@/fonts";

export default function Nabvar() {
    return (
        <nav className="flex justify-between items-center py-4 px-4 max-w-[90rem] mx-auto">
            <Link className={"flex items-center " + oxanium.className} href="#">
                <Image
                    src="/logo/logo.png"
                    alt="Logo de Larrosa Devs, una letra L mayúscula de color naranja, rodeada por un circulo del mismo color"
                    width={65}
                    height={65}
                />
                <span className="font-semibold text-danger mt-1 text-xl">
                    Larrosa Devs
                </span>
            </Link>
            <ul className="hidden md:flex items-center gap-x-9">
                <li>
                    <NavLink href="#" content="Inicio" color="text-danger" />
                </li>
                <li>
                    <NavLink href="#" content="Servicios" />
                </li>
                <li>
                    <NavLink href="#" content="Nosotros" />
                </li>
                <li className="ml-2">
                    <Button href="#" content="Contáctanos" />
                </li>
            </ul>
        </nav>
    );
}

type navLink = {
    href: string;
    content: string;
    color?: "text-danger" | "text-dark_text";
};

function NavLink({ href, content, color }: navLink) {
    if (!color) color = "text-dark_text";
    return (
        <Link className={"font-bold " + color} href={href}>
            {content}
        </Link>
    );
}

type buttonType = {
    href: string;
    content: string;
};

function Button({ href, content }: buttonType) {
    return (
        <a
            className={
                "bg-soft_danger w-fit block font-bold text-danger px-5 py-2 rounded-md capitalize text-lg " +
                oxanium.className
            }
            href={href}
        >
            {content}
        </a>
    );
}
