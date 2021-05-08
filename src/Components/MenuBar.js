import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'

function MenuBar() {
    let pathname = window.location.pathname
    let path = pathname === "/" ? "home" : pathname.substr(1)
    const [activeItem, setActiveItem] = useState(path)
    const handleItemClick = (e, { name }) => setActiveItem(name)
    console.log("handle click  ", handleItemClick)
    return (
        <Menu tabular color="teal">
            <Menu.Item
                name='home'
                active={activeItem === 'home'}
                onClick={handleItemClick}
            />
            <Menu.Menu position="right">

                <Menu.Item
                    name='login'
                    active={activeItem === 'login'}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name='register'
                    active={activeItem === 'register'}
                    onClick={handleItemClick}
                />
            </Menu.Menu>
        </Menu>
    )
}

export default MenuBar;