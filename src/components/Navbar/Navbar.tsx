import Image from 'next/image';
import Link from 'next/link';
import NavLink from './NavLink/NavLink';
import { oxanium } from '@/fonts';
import { ButtonMd } from '../Buttons/Buttons';

export default function Nabvar() {
    return (
        <div className='shadow-md'>
            <nav className='flex justify-between items-center py-4 px-4 max-w-[90rem] mx-auto'>
                <Link className={'flex items-center ' + oxanium.className} href='#'>
                    <Image
                        src='/logo/logo.png'
                        alt='Logo de Larrosa Devs, una letra L mayúscula de color naranja, rodeada por un circulo del mismo color'
                        width={65}
                        height={65}
                    />
                    <span className='font-semibold text-danger mt-1 text-xl'>
                        Larrosa Devs
                    </span>
                </Link>
                <ul className='hidden md:flex items-center gap-x-9'>
                    <li>
                        <NavLink href='#' content='Inicio' color='text-danger' />
                    </li>
                    <li>
                        <NavLink href='#' content='Servicios' />
                    </li>
                    <li>
                        <NavLink href='#' content='Nosotros' />
                    </li>
                    <li className='ml-2'>
                        <ButtonMd href='#' content='Contáctanos' />
                    </li>
                </ul>
            </nav>
        </div>
    );
}
