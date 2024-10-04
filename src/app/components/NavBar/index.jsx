"use client"
import Image from "next/image";
import Link from "next/link";

const NavBar = ({ scrollTo }) => {
    return (
        <div className="p-7 shadow-lg w-full bg-white">
            <div className="flex justify-between items-center">
                <Link href="/" className="flex items-center">
                    <Image src="/assets/XTR-Logo.png" width="50" height="50" alt="Logo" />
                    <h1 className="ml-3 text-xl font-semibold">Sturan Network</h1>
                </Link>
                <div className="flex gap-4 font-semibold">
                    <Link href="/docs/getting-started">Docs</Link>
                    <button onClick={() => scrollTo('foundation')}>Foundation</button>
                    <button onClick={() => scrollTo('useCase')}>Use Case</button>
                </div>
                <div>
                    <Link href="/" target="_blank" className="text-l font-semibold p-2 bg-color-sky text-color-white rounded-lg hover:bg-opacity-85 duration-300">Launch Apps</Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;