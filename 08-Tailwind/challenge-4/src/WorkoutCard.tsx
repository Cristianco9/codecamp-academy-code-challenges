interface WorkoutCardProps {
    name:       string;
    category:   string;
    duration:   string;
    difficulty: string;
    calories:   number;
}

export default function WorkoutCard({
    name,
    category,
    duration,
    difficulty,
    calories,
}: WorkoutCardProps) {
    return (
        <article className="
            bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2
            transition-all duration-300 p-6
            "
        >
            <h3 className="text-2xl font-bold text-slate-900">
                {name}
            </h3>
            <p className="text-slate-500 mt-2">
                {category}
            </p>
            <div className="mt-6 space-y-2">
                <p><span className="font-semibold">Duration:</span> {duration}</p>
                <p><span className="font-semibold">Difficulty:</span> {difficulty}</p>
                <p><span className="font-semibold">Calories:</span> {calories} kcal</p>
            </div>
            <button className="
                w-full mt-8 bg-emerald-600 hover:bg-emerald-700 text-white 
                font-semibold py-3 rounded-xl transition
                "
            >
                Start Workout
            </button>
        </article>
    );
}