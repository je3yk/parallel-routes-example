import Image from "next/image";
import Link from "next/link";

import UnsplashLogoDark from './assets/Unsplash_Logo_Full.png';
import UnsplashLogoLight from './assets/Unsplash_Logo_Full_White.png';

const ratio = UnsplashLogoDark.width / UnsplashLogoDark.height;

export function Footer() {
    return (
        <div className="h-[60px] border-t-black dark:border-t-white border-t-2 p-4 w-full flex items-center justify-center">
            <Link href="https://unsplash.com" rel="noopener noreferrer" prefetch={false} className="flex text-md gap-2 group">
                <p className="group-hover:text-gray-600 group-hover:dark:text-gray-300 text-gray-500">Powered by</p>
                <Image src={UnsplashLogoDark} alt="Unsplash Logo" height={24} width={24 * ratio} className="dark:hidden"/>  
                <Image src={UnsplashLogoLight} alt="Unsplash Logo" height={24} width={24 * ratio} className="hidden dark:flex"/>
            </Link>
        </div>
    )
} 