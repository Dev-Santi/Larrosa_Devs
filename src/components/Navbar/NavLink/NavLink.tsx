import Link from 'next/link';

type navLink = {
    href: string;
    content: string;
    color?: 'text-danger' | 'text-dark_text';
};

export default function NavLink({ href, content, color }: navLink) {
    if (!color) color = 'text-dark_text';
    return (
        <Link className={'font-bold ' + color} href={href}>
            {content}
        </Link>
    );
}
