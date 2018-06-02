import React from 'react';
import { Link } from 'react-router-dom';
import EXAMPLES from './examples';

const Sidebar = () => (
  <nav className="sidebar">
    <h6>Guides</h6>
    <Link to="/theming">
      <div>Theming</div>
    </Link>

    <Link to="/ssr">
      <div>Server Side Rendering</div>
    </Link>

    <h6 style={{ marginTop: 12 }}>Components</h6>
    <div>
      {Object.keys(EXAMPLES).map(key => {
        const eg = EXAMPLES[key];
        return (
          <Link to={`/${key}`} key={key}>
            <div>{eg.group}</div>
          </Link>
        );
      })}
    </div>
  </nav>
);

export default Sidebar;
