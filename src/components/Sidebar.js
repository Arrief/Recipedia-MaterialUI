import React, { useState } from "react";
import { Box, List, ListItemButton, ListItem, ListItemIcon, ListItemText, Switch } from "@mui/material";
import ArticleIcon from '@mui/icons-material/Article';
import Home from '@mui/icons-material/Home';
import NightlightIcon from '@mui/icons-material/Nightlight';
import PeopleIcon from '@mui/icons-material/People';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

const Sidebar = (props) => {
  // state for switching between light & dark theme
  let [dark, setDark] = useState(false)

  return(
    <Box
      flex={1} 
      p={2}
      /* if the screen size is very small, don't display the Sidebar at all;
        otherwise display as block */ 
      sx={{display: {xs: "none", sm: "block"}, height: "fit-content"}}
    >
       <List>
          <ListItem disablePadding>
            {/* we can use "component" here like with Typography to give this the functionality of an <a> tag */}
            <ListItemButton component="a" href="/">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="/">
              <ListItemIcon>
                <ArticleIcon />
              </ListItemIcon>
              <ListItemText primary="My Recipes" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="/">
              <ListItemIcon>
                <PersonAddIcon />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="/">
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="/">
              <ListItemIcon>
                <RestaurantIcon />
              </ListItemIcon>
              <ListItemText primary="Nearby Restaurants" />
            </ListItemButton>
          </ListItem>

        <ListItem disablePadding sx={{borderTop: "1px solid black", mt: 2}}>
            <ListItemButton onClick={() => setDark(!dark)}>
              <ListItemIcon>
                {/* icon will switch depending on chosen theme */}
                {dark
                  ? <WbSunnyIcon />
                  : <NightlightIcon />
                }
              </ListItemIcon>
              <Switch color="default" onChange={() => props.setMode(props.mode === "light" ? "dark" : "light")}/>
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  )
}

export default Sidebar;
