import { oxanium } from '@/fonts';

type buttonType = {
    href: string;
    content: string;
};

export function ButtonMd({ href, content }: buttonType) {
    return (
        <a
            className={
                'bg-soft_danger w-fit block font-bold text-danger px-5 py-2 rounded-md capitalize text-lg ' +
                oxanium.className
            }
            href={href}
        >
            {content}
        </a>
    );
}
