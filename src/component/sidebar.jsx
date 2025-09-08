

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <h1>CYBERMOON</h1>
        <p style={{ color: "var(--moon-glow)", fontSize: "0.9rem" }}>EXPENSE SPLITTER</p>
      </div>
      <nav>
        <div className="nav-item">
          <a href="#" className="nav-link"><i className="fas fa-home"></i> Dashboard</a>
        </div>
        <div className="nav-item">
          <a href="#" className="nav-link"><i className="fas fa-plus-circle"></i> Add Expense</a>
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;
