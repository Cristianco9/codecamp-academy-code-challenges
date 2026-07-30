import { Routes, Route } from 'react-router-dom';
// Import the components
import Navbar from './components/Navbar';
// Import the pages
import Home from './pages/Home';
import User from './pages/User';
import Favorites from './pages/Favorites';
import AboutPage from "./pages/AboutPage";

export default function App() {
    return (
        <>
            <Navbar />

            <div className='container mt-4'>
                <Routes>
                    <Route
                        path='/'
                        element={<Home />}
                    />
                    <Route
                        path='/favorites'
                        element={<Favorites />}
                    />
                    <Route
                        path='/user/:username'
                        element={<User />}
                    />
                    <Route
                        path="/about"
                        element={<AboutPage />}
                    />
                </Routes>
            </div>
        </>
    );
}