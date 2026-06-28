import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <br/>
            <Link to="/dashboard">Dashboard</Link>
            <br/>
            <Link to="/tasks">Tasks</Link>
            <br/>
            <Link to="/tasks/menu">Tasks Menu</Link>
            <br/>
            <Link to="/tasks/new">Create Task</Link>
            <br/>
            <Link to="/notifications">Notifications</Link>
            <br/>
            <Link to="/activities">Activities</Link>
            <br/>
            <Link to="/profile">Profile</Link>
            <br/>
            <Link to="/team">Team</Link>
            <br/>
            <Link to="/settings">Settings</Link>
            <br/>
            <Link to="/reports">Reports</Link>
            <br/>
            <Link to="/about">About</Link>
            <br/>
            <Link to="/help">Help</Link>
        </nav>
    );
}