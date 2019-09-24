import React from 'react';
import {Drawer} from "@material-ui/core";

const SideDrawer = ({open, onClose}: { open: boolean, onClose: Function }) => {
    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={() => onClose()}
        >
        Hello
        </Drawer>
    );
};

export default SideDrawer;