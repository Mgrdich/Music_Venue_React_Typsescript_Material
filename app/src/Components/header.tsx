import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/core/Menu";
import IconButton from "@material-ui/core/IconButton";


const Header = () => {
    return (
        <div>
           <AppBar position="fixed"
           style={{
               backgroundColor:'#2f2f2f',
               boxShadow:'none',
               padding:'10px 0'
           }}
           >
               <Toolbar>
                   <div className="header_logo">
                    <div className="header_logo-main">Led Zeppelin</div>
                   </div>
               </Toolbar>
           </AppBar>
        </div>
    );
};

export default Header;