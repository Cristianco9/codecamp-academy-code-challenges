import { benefits } from "../data/benefits.js";
import BenefitCard from "./BenefitCard.jsx";

export default function Benefits() {
    return (
        <section className="py-5 bg-light" id="benefits">
            <div className="container">
                <h2 className="display-5 fw-bold text-center mb-3">
                    Why Choose FitLife?
                </h2>
                <p className="lead text-center text-muted mb-5">
                    Everything you need to reach your fitness goals.
                </p>
                <div className="row g-4">
                    {benefits.map(benefit => (
                        <BenefitCard
                            key={benefit.id}
                            benefit={benefit}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}