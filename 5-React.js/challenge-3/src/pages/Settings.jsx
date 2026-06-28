function Settings() {

    return (
        <section className="page">

            <h1>Settings</h1>

            <div className="card">

                <h2>Theme</h2>

                <p>
                    Current Theme:
                    <strong> Light Mode</strong>
                </p>

            </div>

            <div className="card">

                <h2>Notifications</h2>

                <p>
                    Email Notifications:
                    <strong> Enabled</strong>
                </p>

            </div>

            <div className="card">

                <h2>Account</h2>

                <p>
                    Two-Factor Authentication:
                    <strong> Disabled</strong>
                </p>

            </div>

        </section>
    );

}

export default Settings;