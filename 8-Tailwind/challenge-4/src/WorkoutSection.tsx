import WorkoutCard from "./WorkoutCard";

export default function WorkoutSection() {
    return (
        <section className="py-20 bg-slate-100">
            <div className="max-w-7xl mx-auto px-8">
                <div className="text-center mb-14">
                    <h2 className="text-5xl font-black text-slate-900">
                        Workout Programs
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                        Discover training sessions designed to improve your 
                        strength, endurance, and overall fitness.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                    <WorkoutCard
                        name="Strength Training"
                        category="Upper Body"
                        duration="45 Minutes"
                        difficulty="Intermediate"
                        calories={420}
                    />
                    <WorkoutCard
                        name="Cardio Blast"
                        category="Endurance"
                        duration="30 Minutes"
                        difficulty="Beginner"
                        calories={350}
                    />
                    <WorkoutCard
                        name="HIIT Session"
                        category="Fat Burn"
                        duration="25 Minutes"
                        difficulty="Advanced"
                        calories={510}
                    />
                    <WorkoutCard
                        name="Leg Day"
                        category="Lower Body"
                        duration="60 Minutes"
                        difficulty="Intermediate"
                        calories={610}
                    />
                </div>
            </div>
        </section>
    );
}