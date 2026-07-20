export default function ProductCard({ product }) {
    return (
        <div className="col-md-4 d-flex">
            <div className="card shadow h-100 w-100">
                <img
                    src={product.image}
                    alt={product.name}
                    className="card-img-top"
                />
                <div className="card-body d-flex flex-column">
                    <h4 className="card-title">
                        {product.name}
                    </h4>
                    <p className="text-muted">
                        {product.category}
                    </p>
                    <h5 className="text-success">
                        ${product.price}
                    </h5>
                    <button
                        className="btn btn-outline-success mt-auto"
                    >
                        View Product
                    </button>
                </div>
            </div>
        </div>
    );
}