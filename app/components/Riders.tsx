import Image from "next/image";

export default function Riders() {
    const riders = [
        {
            name: "Carlos Muñoz",
            specialty: "Longboard",
            instagram: "carlosmurf",
            photo: '/surfer-1.avif'
        },
        {
            name: "Ana Reyes",
            specialty: "Shortboard",
            instagram: "anawaves",
            photo: '/surfer-2.jpg'
        },
        {
            name: "Diego Santos",
            specialty: "SUP",
            instagram: "diegosup",
            photo: '/surfer-3.avif'
        }
    ];

    return (
        <section id="riders" className="py-16 sm:py-20 md:py-24 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-gray-900 tracking-tight uppercase">
                        Nuestros Riders
                    </h2>
                    <div className="w-24 h-1 bg-black mx-auto mb-4"></div>
                    <p className="text-gray-700 text-lg sm:text-xl max-w-2xl mx-auto">
                        El equipo que representa Secret Spot
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                    {riders.map((rider, index) => (
                        <div key={index} className="group relative bg-white border-2 border-gray-100/80 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                            {/* Imagen de fondo con overlay */}
                            <div className="relative h-80 sm:h-96 overflow-hidden">
                                <Image
                                    src={rider.photo}
                                    alt={rider.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    width={400}
                                    height={500}
                                />
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-linear-to-t from-black via-black/70 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

                                {/* Contenido sobre la imagen */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                                    <h3 className="text-2xl sm:text-3xl font-bold mb-4 uppercase tracking-wide transform group-hover:translate-y-0 transition-transform duration-300">
                                        {rider.name}
                                    </h3>
                                    <div className=" flex-col items-center justify-between">
                                        <p className="text-base sm:text-lg font-medium uppercase tracking-wider text-gray-300 mb-2">
                                            {rider.specialty}
                                        </p>
                                        <a
                                            href={`https://instagram.com/${rider.instagram.replace('@', '')}`}
                                            className="inline-flex items-center gap-2 text-white font-bold text-xs sm:text-sm tracking-widest uppercase border-b-2 border-white hover:text-gray-300 hover:border-gray-300 transition-all duration-300"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                            </svg>
                                            <span className="hidden sm:inline">{rider.instagram}</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
