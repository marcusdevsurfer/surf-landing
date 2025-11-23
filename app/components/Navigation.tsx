import Image from "next/image";

export default function Navigation() {
    return (
        <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-lg h-40 flex flex-col justify-center
        items-center">

            <div className="flex justify-center items-center ">
                <Image
                    src={'/secret-logo.png'}
                    alt="Secret Spot Logo"
                    width={100}
                    height={100}
                />
                <Image
                    src={'/image.png'}
                    alt="Secret Spot Logo"
                    width={100}
                    height={100}
                />
            </div>

            <div className="flex gap-8 justify-center pb-4 text-sm font-medium uppercase tracking-wider">
                <a className="text-gray-800 hover:text-gray-600 font-semibold transition" href="#riders">Riders</a>
                <a className="text-gray-800 hover:text-gray-600 font-semibold transition" href="#smokeshop">Social</a>
                <a className="text-gray-800 hover:text-gray-600 font-semibold transition" href="#ubicacion">Ubicación</a>
            </div>
        </nav>
    );
}
