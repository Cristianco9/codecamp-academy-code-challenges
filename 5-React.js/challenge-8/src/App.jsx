import "./styles/App.css";

import ProductCard from "./components/ProductCard";

const products = [
    {
        id: 1,
        name: "MacBook Air M3",
        category: "Laptops",
        brand: "Apple",
        price: 1299.99,
        stock: 18,
        featured: true,
        available: true
    },
    {
        id: 2,
        name: "Galaxy S25",
        category: "Smartphones",
        brand: "Samsung",
        price: 999.99,
        stock: 24,
        featured: true,
        available: true
    },
    {
        id: 3,
        name: "MX Master 3S",
        category: "Accessories",
        brand: "Logitech",
        price: 109.99,
        stock: 42,
        featured: false,
        available: true
    },
    {
        id: 4,
        name: "UltraWide Monitor",
        category: "Monitors",
        brand: "LG",
        price: 499.99,
        stock: 9,
        featured: true,
        available: true
    },
    {
        id: 5,
        name: "WH-1000XM5",
        category: "Audio",
        brand: "Sony",
        price: 349.99,
        stock: 15,
        featured: false,
        available: true
    },
    {
        id: 6,
        name: "ThinkPad X1 Carbon",
        category: "Laptops",
        brand: "Lenovo",
        price: 1499.99,
        stock: 7,
        featured: true,
        available: false
    },
    {
        id: 7,
        name: "iPhone 16",
        category: "Smartphones",
        brand: "Apple",
        price: 1199.99,
        stock: 21,
        featured: true,
        available: true
    },
    {
        id: 8,
        name: "Mechanical Keyboard",
        category: "Accessories",
        brand: "Keychron",
        price: 129.99,
        stock: 31,
        featured: false,
        available: true
    },
    {
        id: 9,
        name: "Studio Monitor",
        category: "Audio",
        brand: "PreSonus",
        price: 199.99,
        stock: 6,
        featured: false,
        available: false
    },
    {
        id: 10,
        name: "Gaming Monitor",
        category: "Monitors",
        brand: "Dell",
        price: 699.99,
        stock: 12,
        featured: true,
        available: true
    }
];

function App() {

    const totalProducts = products.length;

    const availableProducts = products.filter(
        (product) => product.available
    ).length;

    const unavailableProducts = products.filter(
        (product) => !product.available
    ).length;

    const featuredProducts = products.filter(
        (product) => product.featured
    ).length;

    const averagePrice = (
        products.reduce(
            (sum, product) => sum + product.price,
            0
        ) / totalProducts
    );

    const totalInventoryValue = products.reduce(

        (sum, product) => {

            return sum + (
                product.price * product.stock
            );

        },

        0

    );

    return (

        <main className="app">

            <header className="dashboard-header">

                <h1>
                    Product Inventory Dashboard
                </h1>

                <div className="statistics-grid">

                    <div className="stat-card">

                        <h3>Total Products</h3>

                        <p>{totalProducts}</p>

                    </div>

                    <div className="stat-card">

                        <h3>Available</h3>

                        <p>{availableProducts}</p>

                    </div>

                    <div className="stat-card">

                        <h3>Unavailable</h3>

                        <p>{unavailableProducts}</p>

                    </div>

                    <div className="stat-card">

                        <h3>Featured</h3>

                        <p>{featuredProducts}</p>

                    </div>

                    <div className="stat-card">

                        <h3>Average Price</h3>

                        <p>

                            $

                            {averagePrice.toLocaleString(
                                undefined,
                                {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                }
                            )}

                        </p>

                    </div>

                    <div className="stat-card">

                        <h3>
                            Total Inventory Value
                        </h3>

                        <p>

                            $

                            {totalInventoryValue.toLocaleString(
                                undefined,
                                {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                }
                            )}

                        </p>

                    </div>

                </div>

            </header>

            <section className="products-grid">

                {

                    products.map((product) => (

                        <ProductCard

                            key={product.id}

                            product={product}

                        />

                    ))

                }

            </section>

        </main>

    );

}

export default App;