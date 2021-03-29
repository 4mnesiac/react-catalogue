import React from 'react';


function Header() {

    return (
        <div className="header">
            <div className="container">
                <a className="link">
                    <div className="header__logo">
                        <img src="" alt=""/>
                        <div>
                            <h1>React Catalogue</h1>
                            <p>почти то же, что на Vue</p>
                        </div>
                    </div>
                </a>

                <div className="header__cart">
                    <a href="" className="link">
                        <button>

                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header;