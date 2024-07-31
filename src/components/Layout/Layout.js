import React from "react";
import { Menu } from "../Menu";

export const Layout = ({children}) => {
    return <div>
            <Menu>
            </Menu> 
            {children}
        </div>
}