import React from 'react';

function Sidebar(props) {
    return (
        <div className="sidebar">
            <h3 className="sidebar__title">All brands</h3>
            <ul className="sidebar__menu">
                {/* {props.items && props.items.map((title, index) => (
                    <li 
                    className="sidebar__menu-item"
                    key={`${index}_${title}`}
                    >{title}</li>
                ))} */}
            </ul>
          </div>
    )
}
export default Sidebar;