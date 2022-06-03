import { AppBar, Box, styled, Toolbar, Typography } from "@mui/material";
import FastfoodIcon from '@mui/icons-material/Fastfood';

const StyledToolbar = styled(Toolbar) ({
  display: "flex",
  justifyContent: "space-between"
})

const Navbar = () => {
  return(
    <AppBar position="sticky">
      {/* Toolbar gives a default margin and padding */}
      <StyledToolbar>
        <Typography sx={{display: {xs: "none", sm: "block"}}} variant="h6">
          Blog
        </Typography>
        {/* The icon will only appear on very small screens to replace the Typography */}
        <FastfoodIcon sx={{display: {xs: "block", sm: "none"}}} />
      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar;
