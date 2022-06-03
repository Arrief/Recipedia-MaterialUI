import { Box } from "@mui/material";

const Sidebar = () => {
  return(
    <Box 
      bgcolor="skyblue" 
      flex={1} 
      p={2} 
      /* if the screen size is super small, don't display the Sidebar at all;
        otherwise display as block */ 
      sx={{display: {xs: "none", sm: "block"}}}
    >
      Sidebar
    </Box>
  )
}

export default Sidebar;
