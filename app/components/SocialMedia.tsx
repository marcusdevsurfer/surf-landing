export default function SocialMedia() {
    return (
        <section id="redes-sociales" className="py-16 sm:py-20 md:py-24 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-black">
                        Conecta con Nosotros
                    </h2>
                    <p className="text-gray-700 text-lg sm:text-xl max-w-2xl mx-auto">
                        Síguenos en Instagram
                    </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left: Visual Card */}
                    <div className="relative">
                        <div className="bg-white border-4 border-black p-8 sm:p-10">
                            <div className="flex items-center justify-center mb-8">
                                <div className="w-32 h-32 bg-black flex items-center justify-center">
                                    <svg className="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                    </svg>
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-3 gap-6 mb-8 border-t-2 border-b-2 border-black py-6">
                                <div className="text-center">
                                    <p className="text-3xl font-black text-black mb-1">375</p>
                                    <p className="text-xs text-gray-700 uppercase tracking-wider font-bold">Posts</p>
                                </div>
                                <div className="text-center border-x-2 border-black">
                                    <p className="text-3xl font-black text-black mb-1">978</p>
                                    <p className="text-xs text-gray-700 uppercase tracking-wider font-bold">Seguidores</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-3xl font-black text-black mb-1">356</p>
                                    <p className="text-xs text-gray-700 uppercase tracking-wider font-bold">Siguiendo</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center justify-center gap-2 text-sm text-black font-bold">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                                </svg>
                                <span>Ensenada, México</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: CTA and Info */}
                    <div className="space-y-8">
                        <div>
                            <p className="text-sm font-black text-gray-700 uppercase tracking-widest mb-4">Instagram Oficial</p>
                            <h3 className="text-3xl sm:text-4xl font-black text-black mb-6 leading-tight">
                                @secret_spotsurfsmokeshop
                            </h3>
                            <p className="text-gray-700 text-lg leading-relaxed border-l-4 border-black pl-4">
                                Descubre las últimas tendencias en surf, skate y lifestyle. Contenido exclusivo, promociones y mucho más.
                            </p>
                        </div>

                        <a
                            href="https://instagram.com/secret_spotsurfsmokeshop"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 font-black text-sm uppercase tracking-widest hover:bg-gray-800 transition-colors duration-300 border-4 border-black"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                            Seguir Ahora
                        </a>

                        <div className="flex flex-wrap gap-3 pt-4">
                            <span className="px-4 py-2 bg-black text-white text-sm font-black uppercase tracking-wider">#Surf</span>
                            <span className="px-4 py-2 border-2 border-black text-black text-sm font-black uppercase tracking-wider">#Skate</span>
                            <span className="px-4 py-2 bg-black text-white text-sm font-black uppercase tracking-wider">#Lifestyle</span>
                            <span className="px-4 py-2 border-2 border-black text-black text-sm font-black uppercase tracking-wider">#Ensenada</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
