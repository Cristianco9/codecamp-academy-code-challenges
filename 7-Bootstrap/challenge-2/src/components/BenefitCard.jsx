export default function BenefitCard({ benefit }) {
    return (
        <div className="col-md-4 d-flex">
            <div className="card shadow rounded w-100 border-0">
                <div className="card-body text-center d-flex flex-column p-4">
                    {benefit.badge && (
                        <span className="badge bg-warning text-dark align-self-center mb-2">
                            {benefit.badge}
                        </span>
                    )}
                    <i className={`${benefit.icon} display-3 ${benefit.color} mb-3`}></i>
                    <h3 className="fw-bold">{benefit.title}</h3>
                    <p className="flex-grow-1 text-muted">{benefit.description}</p>
                    <button className="btn btn-outline-primary mt-3">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
}