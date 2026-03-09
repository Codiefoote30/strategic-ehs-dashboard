import './App.css'

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1>Strategic EHS Dashboard</h1>
        <p>Environmental, Health & Safety Management System</p>
      </header>
      <main className="dashboard">
        <section className="metrics-grid">
          <div className="metric-card">
            <h3>Safety Incidents</h3>
            <p className="metric-value">3</p>
            <p className="metric-label">This Month</p>
          </div>
          <div className="metric-card">
            <h3>Compliance Rate</h3>
            <p className="metric-value">98%</p>
            <p className="metric-label">Overall</p>
          </div>
          <div className="metric-card">
            <h3>Employee Training</h3>
            <p className="metric-value">156</p>
            <p className="metric-label">Completed</p>
          </div>
          <div className="metric-card">
            <h3>Near Misses</h3>
            <p className="metric-value">12</p>
            <p className="metric-label">Reported</p>
          </div>
        </section>
        <section className="actions-section">
          <h2>Quick Actions</h2>
          <div className="actions-grid">
            <button className="action-btn">Report Incident</button>
            <button className="action-btn">View Compliance</button>
            <button className="action-btn">Schedule Training</button>
            <button className="action-btn">Safety Alerts</button>
          </div>
        </section>
        <section className="recent-activity">
          <h2>Recent Activity</h2>
          <ul className="activity-list">
            <li>Safety inspection completed - Building A</li>
            <li>Employee training session scheduled</li>
            <li>Near miss report submitted</li>
            <li>Compliance audit initiated</li>
          </ul>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2026 Strategic EHS Dashboard. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App