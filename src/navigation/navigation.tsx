import React from 'react';
import { Link } from 'react-router-dom';

export const NavigationBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Inspect</Link>
          </li>
          <li>
            <Link to="/cognitiveFunctions">Cognitive functions</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
