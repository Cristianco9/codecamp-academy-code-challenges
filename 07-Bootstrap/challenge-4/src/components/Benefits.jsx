export default function Benefits() {
    return (
        <section
            id="benefits"
            className="bg-light py-5"
        >
            <div className="container">
                <h2
                    className="text-center fw-bold mb-5"
                >
                    Why Choose GreenMarket?
                </h2>
                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="card h-100 shadow">
                            <div className="card-body text-center">
                                <i className=" bi bi-truck display-3 text-success"></i>
                                <h4 className="mt-3">
                                    Fast Delivery
                                </h4>
                                <p>
                                    Receive your fresh groceries quickly at your doorstep.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card h-100 shadow">
                            <div className="card-body text-center">
                                <i
                                    className="bi bi-tree display-3 text-success"></i>
                                <h4 className="mt-3">
                                    Organic Products
                                </h4>
                                <p>
                                    Carefully selected fruits and vegetables from local farmers.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card h-100 shadow">
                            <div className="card-body text-center">
                                <i
                                    className="bi bi-shield-check display-3 text-success"></i>
                                <h4 className="mt-3">
                                    Secure Shopping
                                </h4>
                                <p>
                                    Safe payments and reliable customer service every day.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}