import React from 'react';
// eslint-disable-next-line 

const Navbar = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg toggle-height">
            <div className="container" id="global-nav">
                <a className="navbar-brand ">Shashi Prakash</a>
                <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon custom-toggler"></span>
                </button>

                <div className="collapse navbar-collapse" >
                    <ul className="navbar-nav mr-auto">
                        {/* <li> <a className="nav-link ">Skills</a></li> */}
                        {/* <li> <a className="nav-link ">Projects</a></li> */}
                    </ul>
                    <ul className="navbar-nav">
                        <li><a className="nav-link ">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;