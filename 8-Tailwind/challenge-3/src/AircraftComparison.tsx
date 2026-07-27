export default function AircraftComparison() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-8">
                <div className="text-center mb-14">
                    <h2 className="text-5xl font-black text-slate-900">
                        Aircraft Manufacturers
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Compare two of the world's largest commercial aircraft
                        manufacturers.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-10">
                    <article className="
                        bg-sky-50 rounded-2xl shadow-xl p-8
                        hover:-translate-y-2 hover:shadow-2xl
                        transition-all duration-300
                        "
                    >
                        <h3 className="text-3xl font-bold text-sky-700 mb-6">
                            Airbus
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <strong>Country:</strong> France
                            </li>
                            <li>
                                <strong>Founded:</strong> 1970
                            </li>
                            <li>
                                <strong>Popular Aircraft:</strong> A320neo
                            </li>
                            <li>
                                <strong>Employees:</strong> 150,000+
                            </li>
                            <li>
                                <strong>Headquarters:</strong> Toulouse, France
                            </li>
                        </ul>
                        <button className="
                            mt-8 bg-sky-600 hover:bg-sky-700 text-white
                            px-6 py-3 rounded-xl font-semibold transition
                            "
                        >
                            Explore Airbus
                        </button>
                    </article>
                    <article className="
                        bg-slate-100 rounded-2xl shadow-xl p-8
                        hover:-translate-y-2 hover:shadow-2xl
                        transition-all duration-300
                        "
                    >
                        <h3 className="text-3xl font-bold text-slate-800 mb-6">
                            Boeing
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <strong>Country:</strong> United States
                            </li>
                            <li>
                                <strong>Founded:</strong> 1916
                            </li>
                            <li>
                                <strong>Popular Aircraft:</strong> 787 Dreamliner
                            </li>
                            <li>
                                <strong>Employees:</strong> 170,000+
                            </li>
                            <li>
                                <strong>Headquarters:</strong> Arlington, Virginia
                            </li>
                        </ul>
                        <button className="
                            mt-8 bg-slate-800 hover:bg-slate-900 text-white
                            px-6 py-3 rounded-xl font-semibold transition
                            "
                        >
                            Explore Boeing
                        </button>
                    </article>
                </div>
            </div>
        </section>
    );
}