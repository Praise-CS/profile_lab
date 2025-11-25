



import React from 'react';

      import { Link } from 'react-router-dom'

export default function Header() { // Keep this export
  return (
    <nav>
      <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
      </ul>
    </nav>
  )
}