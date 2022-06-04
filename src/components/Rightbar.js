import { Box, Typography } from "@mui/material"

const Rightbar = () => {
  return(
    <Box 
      flex={2} 
      p={2}
      sx={{display: {xs: "none", sm: "block"}}}
    >
      {/* if we want "position=fixed", we have to wrap "Typo" into another Box here and give "position=fixed" to this Box! Otherwise the Rightbar content will spill over into the feed, apparently "position=fixed" acts as "position=absolute" */}
      <Box position="fixed">
        {/* we have to add 100 first to index.html, starts at 300 by default */}
        <Typography variant="h6" fontWeight={100}>Live Chat</Typography>
        hello
      </Box>
    </Box>
  )
}

export default Rightbar;
