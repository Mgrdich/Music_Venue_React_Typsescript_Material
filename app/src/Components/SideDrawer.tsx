import React from 'react';
import {Drawer, ListItem, List} from "@material-ui/core";

interface IProps {
    open: boolean,
    onClose: Function
}

const SideDrawer: React.FC<IProps> = ({open, onClose}) => {
    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={() => onClose(false)}
        >
            <List component="nav">
                <ListItem button onClick={() => console.log("asda")}>
                    AA
                </ListItem>
                <ListItem button onClick={() => console.log("asda")}>
                    AA
                </ListItem>
                <ListItem button onClick={() => console.log("asda")}>
                    AA
                </ListItem>
                <ListItem button onClick={() => console.log("asda")}>
                    AA
                </ListItem>
            </List>
        </Drawer>
    );
};

export default SideDrawer;