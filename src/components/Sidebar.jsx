import classNames from 'classnames';
import React from 'react';

function Sidebar({ items }) {
    const [activeItem, setActiveItem] = React.useState(null);

    const onSelectedItem = (index) => {
        setActiveItem(index)
    }

    return (
        <div className="sidebar">
            <ul className="sidebar__menu">
                <li           
                    className={classNames("sidebar__menu-item", activeItem === null ? 'sidebar__menu-item_active' : '')} 
                    onClick={() => onSelectedItem(null)}
                >
                All brands</li>
                {items.map((item, index) => (
                    <li
                        onClick={() => onSelectedItem(index)}
                        className={classNames("sidebar__menu-item",
                            activeItem === index ? 'sidebar__menu-item_active' : ''
                        )}
                        key={`${index}_${item.title}`}
                    >
                    {item.title}</li>
                ))}
            </ul>
        </div>
    )
}
export default Sidebar;