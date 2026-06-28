import { useState } from "react";
import "../styles/ProductCard.css";

function ProductCard({ product }) {

    const [available, setAvailable] = useState(
        product.available
    );

    function toggleAvailability() {

        setAvailable(!available);

    }

    return (

        <article className="product-card">

            <div className="card-header">

                <h2>{product.name}</h2>

                {
                    product.featured && (
                        <span className="featured-badge">
                            ⭐ Featured
                        </span>
                    )
                }

            </div>

            <div className="card-content">

                <p>
                    <strong>Brand:</strong>
                    {" "}
                    {product.brand}
                </p>

                <p>
                    <strong>Category:</strong>
                    {" "}
                    {product.category}
                </p>

                <p>
                    <strong>Price:</strong>
                    {" "}
                    $
                    {product.price.toLocaleString(
                        undefined,
                        {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        }
                    )}
                </p>

                <p>
                    <strong>Stock:</strong>
                    {" "}
                    {product.stock} Units
                </p>

                {
                    product.stock < 10 && (
                        <p className="low-stock">
                            ⚠️ Low Stock
                        </p>
                    )
                }

                <p
                    className={
                        available
                            ? "status available"
                            : "status unavailable"
                    }
                >
                    {
                        available
                            ? "✅ Available"
                            : "❌ Unavailable"
                    }
                </p>

            </div>

            <button
                className={
                    available
                        ? "btn-disable"
                        : "btn-enable"
                }
                onClick={toggleAvailability}
            >
                {
                    available
                        ? "Disable Product"
                        : "Enable Product"
                }
            </button>

        </article>

    );

}

export default ProductCard;