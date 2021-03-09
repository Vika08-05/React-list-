import React from 'react';

import { Link } from 'react-router-dom';
const NotFound = () => (
  <div>
    <h1 style={{ textAlign: 'center' }}>404 - Not Found!</h1>
    <Link to="/"></Link>
  </div>
);
export default NotFound;