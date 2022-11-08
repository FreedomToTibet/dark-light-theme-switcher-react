import React from "react"

export default function Navbar(props) {
    return (
         <nav 
            className={props.darkMode ? "dark dfade": "fade"}
        >
            <img 
                className="nav--logo_icon"
                src="./img/react-icon-small.png"
								alt="logo"
            />
            <h3 className="nav--logo_text">ReactFunFacts</h3>
            
            <div 
                className="toggler" 
            >
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    )
}