import React from "react";
import "./homepage.styles.scss"

const HomePage = () => (
    <div className = "homepage">
        <h1>Welcome to my homepage</h1>
        <div className = "directory-menu">
            <div className = "menu-item">
                <div className= "content">
                    <div className="title">
                        <h1>HATS</h1>
                    </div>
                    <span className="subtitle">
                        SHOP NOW
                    </span>
                </div>
            </div>
    
            <div className = "menu-item">
                <div className= "content">
                    <div className="title">
                    <h1>JACKETS</h1>
                    </div>
                    <span className="subtitle">
                        SHOP NOW
                    </span>
                </div>
            </div>

            <div className = "menu-item">
                <div className= "content">
                    <div className="title">
                    <h1>SHOES</h1>
                    </div>
                    <span className="subtitle">
                        SHOP NOW
                    </span>
                </div>
            </div>

            <div className = "menu-item">
                <div className= "content">
                    <div className="title">
                    <h1>MENS</h1>
                    </div>
                    <span className="subtitle">
                        SHOP NOW
                    </span>
                </div>
            </div>

            <div className = "menu-item">
                <div className= "content">
                    <div className="title">
                      <h1>WOMENS</h1>
                    </div>
                    <span className="subtitle">
                        SHOP NOW
                    </span>
                </div>
            </div>
        </div>
    </div>
);

export default HomePage;