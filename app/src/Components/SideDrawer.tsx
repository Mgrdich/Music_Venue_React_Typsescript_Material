import React from 'react';
import {Drawer, ListItem,List} from "@material-ui/core";


const SideDrawer = ({open, onClose}: { open: boolean, onClose: Function }) => {
    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={() => onClose(false)}
        >
        <List component="nav">
            <ListItem button onClick={()=> console.log("asda")}>
                AA
            </ListItem>
            <ListItem button onClick={()=> console.log("asda")}>
                AA
            </ListItem>
            <ListItem button onClick={()=> console.log("asda")}>
                AA
            </ListItem>
            <ListItem button onClick={()=> console.log("asda")}>
                AA
            </ListItem>
        </List>
        </Drawer>
    );
};

export default SideDrawer;