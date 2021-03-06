import React, {useState} from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import SideDrawer from "./SideDrawer";
import {useEventListener} from "../CustomHooks/EventListener";


const Header: React.FC = () => {
    const [Drawer, ChangeDrawer] = useState<boolean>(false);
    const [headerShow, ChangeHeaderShow] = useState<boolean>(false);

    function HeaderHandler() {
        if (window.scrollY === 0) {
            ChangeHeaderShow(false);
        } else {
            ChangeHeaderShow(true);
        }
    }

    useEventListener("scroll", HeaderHandler);
    return (
        <div>
            <AppBar position="fixed"
                    style={{
                        backgroundColor: (headerShow) ? '#2f2f2f' : 'transparent',
                        boxShadow: 'none',
                        padding: '10px 0'
                    }}
            >
                <Toolbar style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div className="header_logo">
                        <div className="header_logo-main">Led Zeppelin</div>
                    </div>
                    <IconButton
                        aria-label="Menu"
                        color="inherit"
                        onClick={() => ChangeDrawer(!Drawer)}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <SideDrawer
                        open={Drawer}
                        onClose={ChangeDrawer}
                    />
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;