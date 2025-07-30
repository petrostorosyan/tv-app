import { useState, type FC } from "react";
import "./styles.css";
import { navItems, sidebarFooterLinks } from "../../data/sidebarData";
import user from "../../assets/images/song-gi-hun.png";

const Sidebar: FC = () => {
  const [activeItemId, setActiveItemId] = useState(2);

  const handleActiveLink = (id: number) => {
    console.log("Clicked ID:", id);
    setActiveItemId(id);
  };

  return (
    <div className="sidebar-container">
      <div className="sidebar-top-section">
        <div className="user-info">
          <img className="user-image" src={user} alt="user" />
          <p className="user-name">Daniel</p>
        </div>

        <div className="sidebar-content">
          {navItems.map(({ id, iconSource, title }) => (
            <div
              key={id}
              className={`sidebar-item-content ${
                activeItemId === id ? "active" : ""
              }`}
              onClick={() => handleActiveLink(id)}
            >
              <img src={iconSource} alt={title} />
              <p className={`item-title ${
                activeItemId === id ? "active" : ""
              }`}>{title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="sidebar-footer">
        {sidebarFooterLinks.map(({ id, title }) => (
          <p className="sidebar-footer-link" key={id}>
            {title}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
