function Reports() {

    const totalTasks = 25;
    const completedTasks = 18;
    const pendingTasks = 7;

    const productivity =
        Math.round(
            (completedTasks / totalTasks) * 100
        );

    return (

        <section className="page">

            <h1>Project Reports</h1>

            <div className="card">

                <h2>Task Statistics</h2>

                <p>
                    <strong>Total Tasks:</strong>
                    {totalTasks}
                </p>

                <p>
                    <strong>Completed Tasks:</strong>
                    {completedTasks}
                </p>

                <p>
                    <strong>Pending Tasks:</strong>
                    {pendingTasks}
                </p>

                <p>
                    <strong>Productivity:</strong>
                    {productivity}%
                </p>

            </div>

        </section>

    );

}

export default Reports;