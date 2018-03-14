import React from 'react';
import EXAMPLES from './examples';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <div className="sidebar">
    <nav>
      {Object.keys(EXAMPLES).map(key => {
        const eg = EXAMPLES[key]
        return (
          <Link to={`/${key}`} key={key}>
            <div>
              {eg.group}
            </div>
          </Link>
        );
      })}
    </nav>
  </div>
)

export default Sidebar;
