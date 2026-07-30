import StatisticCard from "./StatisticCard";

export default function Statistics() {
    return (
        <section className="py-20 bg-slate-100">
            <div className="max-w-7xl mx-auto px-8">
                <div className="text-center mb-14">
                    <h2 className=" text-5xl font-black text-slate-900">
                        Global Fleet Statistics
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        Explore the latest statistics from the world's leading 
                        commercial aircraft manufacturers.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <StatisticCard
                        title="Aircraft"
                        value={240}
                        color="bg-sky-600"
                    />
                    <StatisticCard
                        title="Airlines"
                        value={85}
                        color="bg-indigo-600"
                    />
                    <StatisticCard
                        title="Countries"
                        value={72}
                        color="bg-purple-600"
                    />
                    <StatisticCard
                        title="Orders"
                        value={1960}
                        color="bg-cyan-600"
                    />
                    <StatisticCard
                        title="Flight Hours"
                        value={245000}
                        color="bg-emerald-600"
                    />
                    <StatisticCard
                        title="Airports"
                        value={680}
                        color="bg-orange-500"
                    />
                    <StatisticCard
                        title="Daily Flights"
                        value={15800}
                        color="bg-pink-600"
                    />
                    <StatisticCard
                        title="Routes"
                        value={920}
                        color="bg-teal-600"
                    />
                </div>
            </div>
        </section>
    );
}