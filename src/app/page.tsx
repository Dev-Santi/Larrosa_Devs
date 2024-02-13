import Nabvar from '@/components/Navbar/Navbar';
import Image from 'next/image';

export default function Home() {
    return (
        <>
            <Nabvar />
            <header className=''>
                <div className='absolute inset-0 z-[-1] 2xl:ml-[-5rem]:mt-[-15rem] 2xl:w-[130rem]'>
                    <Image
                        className='w-full'
                        src='/images/home_img.png'
                        alt='Fondo del inicio, un delivery entregando paquetes con simbolos de codigo.'
                        width={2200}
                        height={2200}
                    />
                </div>
            </header>
        </>
    );
}
