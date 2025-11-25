import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {

    return (
        <footer style={{ textAlign: 'center', padding: '1rem', marginTop: '2rem', borderTop: '1px solid #ccc' }}>
            <p>&copy; {new Date().getFullYear()} React Portfolio. All rights reserved.</p>
            <p> 
              <span className="footer-text">Privacy Policy.   </span>
                <span className="footer-text">Terms of Service</span>
            </p>
        </footer>
    )
}

