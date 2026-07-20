import ProductCard from "./ProductCard";
import products from "../data/products";

export default function Products() {
    return (
        <section
            id="products"
            className="py-5"
        >
            <div className="container">
                <h2
                    className="text-center fw-bold mb-5"
                >
                    Featured Products
                </h2>
                <div className="row g-4">
                    {
                        products.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    );
}