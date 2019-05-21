import React from 'react';
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";


const SideDrawer = (props) =>{
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={()=>{props.onClose(false)}}
      >
      <List component="nav">
        <ListItem
          button
          onClick={()=>console.log("Clicked")}>
          Events Start In
        </ListItem>
        <ListItem
          button
          onClick={()=>console.log("Clicked")}>
          Venue NFO
        </ListItem>
        <ListItem
          button
          onClick={()=>console.log("Clicked")}>
        Highlights
        </ListItem>
        <ListItem
          button
          onClick={()=>console.log("Clicked")}>
        Pricing
        </ListItem>
        <ListItem
          button
          onClick={()=>console.log("Clicked")}>
          Location
        </ListItem>
      </List>

    </Drawer>
  );
};


export default SideDrawer;
