import React, {useEffect, useState} from 'react'
import {Link, useLocation} from "react-router-dom";

const NavBar = () => {
    const [collapsed, setCollapsed] = useState(false)
    const location = useLocation()
    useEffect(() => {
        setCollapsed(false)
    }, [location.pathname])
    return(
        <header>
            <nav className={`navbar navbar-fixed-top navbar-${location.pathname === '/' ? 'inverse' : 'default'}`}>
                <div className="container">
                    <button type="button" className="navbar-toggle collapsed"
                            onClick={() => setCollapsed(!collapsed)}>
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                    </button>
                    <div className={`navbar-collapse collapse ${collapsed ? 'in' : ''}`} style={collapsed ? {} : {height: '1px'}}>
                        <ul className="nav navbar-nav ">
                            <li><Link to="/">01 : Home</Link></li>
                            <li><Link to="/works">02 : Works</Link></li>
                            <li><Link to="/about">03 : About me</Link></li>
                            <li><Link to="/contact">04 : Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default NavBar