function Sidebar({ openAbout }) {
  return (
    <aside className="sidebar">

      <button
        className="about-btn"
        onClick={openAbout}
      >
        ✦ A Little About Myself ✦
      </button>

      <nav className="sidebar-nav">

        <a href="#home">
          Home
        </a>

        <a href="#tarot">
          Tarot
        </a>

        {/*
        <a href="#poems">
          Poems
        </a>

        <a href="#writings">
          Writings
        </a>
        */}

        {/*coming soon sections*/}

        <span className="disabled-link">
          Poems
          <small>Coming Soon</small>
        </span>

        <span className="disabled-link">
          Writings
          <small>Coming Soon</small>
        </span>

      </nav>

      <div className="sidebar-footer">

        <div className="moon-divider">
          ☾ ✦ ☽
        </div>

        <p>
          The moon is my guide. Showing me the way throgh life!</p>

      </div>

    </aside>
  );
}

export default Sidebar;