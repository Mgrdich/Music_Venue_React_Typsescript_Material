import React from 'react';
import {Drawer, ListItem, List} from "@material-ui/core";
let {scroller} = require("react-scroll");
interface IProps {
    open: boolean,
    onClose: Function
}

const SideDrawer: React.FC<IProps> = ({open, onClose}) => {
    function scrollToElement(element:any) {
        scroller.scrollTo(element,{
            duration:1500,
            delay:100,
            smooth:true
        });
    }
    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={() => onClose(false)}
        >
            <List component="nav">
                <ListItem button onClick={() => scrollToElement("Event")}>
                    Events starts in
                </ListItem>
                <ListItem button onClick={() => scrollToElement("Info")}>
                    information
                </ListItem>
                <ListItem button onClick={() => scrollToElement("highlights")}>
                    Highlights
                </ListItem>
                <ListItem button onClick={() => scrollToElement("Pricing")}>
                    Pricing
                </ListItem>
                <ListItem button onClick={() => scrollToElement("map")}>
                    Map
                </ListItem>
            </List>
        </Drawer>
    );
};

export default SideDrawer;