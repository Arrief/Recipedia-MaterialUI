import { Fab, Tooltip } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import theme from "../theme";

const AddRecipe = () => {
  return(
    // using theme here for Floating action button color
    <ThemeProvider theme={theme}>
      <Tooltip title="Add a recipe" sx={{bottom: 30, left: {xs: "calc(50%)", md: 30}, position: "sticky"}} >
        {/* //! sx for small screen here in "Fab" fixes element on bottom, without that and just the sx from "Tooltip" it will float in the Feed cards! */}
        <Fab color="recipediaOrange" aria-label="edit" sx={{xs: "20%"}}>
          <EditIcon />
        </Fab>
      </Tooltip>
    </ThemeProvider>
  );
}

export default AddRecipe;
