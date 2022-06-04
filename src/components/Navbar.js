import React, { useState } from "react";
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from "@mui/material";
import FastfoodIcon from '@mui/icons-material/Fastfood';
import MailIcon from '@mui/icons-material/Mail';
import Notifications from "@mui/icons-material/Notifications";

const message = 4;

// custom toolbar
const StyledToolbar = styled(Toolbar) ({
  display: "flex",
  justifyContent: "space-between"
});

/* Searchbar created from a div, but this means no <input> inside
  => wrap "InputBase" component inside Search */
//* can also use "Autocomplete" component and provide a preset list to it!
const Search = styled("div") (({theme}) => ({
  backgroundColor: "white",
  // using predefined theme style instead of pixels
  borderRadius: theme.shape.borderRadius,
  padding: "0 10px",
  width: "40%"
}));

const IconsDesktop = styled(Box) (({theme}) => ({
  // get all items on the same line, otherwise avatar floats a bit above because it is bigger than the rest
  alignItems: "center",
  display: "none",
  gap: "20px",
  /* we can use theme to directly access & define the breakpoints here, going upward
    => if screen is bigger than small(600px), display Icons as flex, in small do not display at all */
  [theme.breakpoints.up("sm")]: {
    display: "flex"
  }
}))

const IconsPhone = styled(Box) (({theme}) => ({
  alignItems: "center",
  display: "flex",
  gap: "10px",
  /* other way around for phone, display this only for small screens and if bigger than 600px  don't display at all*/
  [theme.breakpoints.up("sm")]: {
    display: "none"
  }
}))

const Navbar = () => {
  // state controlling if the menu from clicking the avatar shows
  const [open, setOpen] = useState(false);

  return(
    <AppBar position="sticky">
      {/* Toolbar gives a default margin and padding */}
      <StyledToolbar>
        <Typography sx={{display: {xs: "none", sm: "block"}}} variant="h6">
          Blog
        </Typography>
        {/* The icon will only appear on very small screens to replace the Typography */}
        <FastfoodIcon sx={{display: {xs: "block", sm: "none"}}} />
        <Search>
          <InputBase placeholder="search..."/>
        </Search>
        {/* Icons on the right displayed only on larger screen sizes */}
        <IconsDesktop>
          <Badge badgeContent={message ? message : undefined} color="error">
            <MailIcon color="white" />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications color="white" />
          </Badge>
          <Avatar
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            sx={{height: 30, width: 30}}
            // open the menu when the avatar is clicked
            onClick={() => setOpen(true)}
          />
        </IconsDesktop>
        {/* Version for phone displays, open menu when clicking avatar or username */}
        <IconsPhone onClick={() => setOpen(true)}>
          <Avatar
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              sx={{height: 30, width: 30}}
          />
          <Typography variant="span">
            Username
          </Typography>
        </IconsPhone>
      </StyledToolbar>
      {/* Menu */}
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // prop linked to state for opening & closing this menu when clicking avatar
        open={open}
        // whenever we click somewhere else in the page, close the menu again if open
        onClose={() => setOpen(false)}
        // this will ensure that the profile is placed at the avatar's position in the top-right
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>Settings</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar;
