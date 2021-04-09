import React from 'react';

function Sidebar({items}) {
    return (
        <div className="sidebar">
            <h3 className="sidebar__title">All brands</h3>
            <ul className="sidebar__menu">
                {items.map((item, index) => (
                    <li 
                    onClick={() => alert(item.title)}
                    className="sidebar__menu-item"
                    key={`${index}_${item.title}`}
                    >{item.title}</li>
                ))}
            </ul>
          </div>
    )
}
export default Sidebar;