import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
                    <div className="container">
                        <a className="navbar-brand" href="Dashboard.html">
                            Project Task Tool
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                            <span className="navbar-toggler-icon" />
                        </button>
                    </div>
                </nav>
                            
            </div>
        );
    }
}

export default Navbar;