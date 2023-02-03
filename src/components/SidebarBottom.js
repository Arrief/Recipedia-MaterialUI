import ArticleIcon from "@mui/icons-material/Article";
import PeopleIcon from "@mui/icons-material/People";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  styled,
} from "@mui/material";

const BottomBox = styled(Box)({
  marginTop: "2rem",
  width: "80vw",
});

const SidebarBottom = () => {
  return (
    <BottomBox sx={{ display: { xs: "block", sm: "none" } }}>
      <BottomNavigation sx={{ backgroundColor: "inherit" }} showLabels>
        <BottomNavigationAction label="Recipes" icon={<ArticleIcon />} />
        <BottomNavigationAction label="Friends" icon={<PersonAddIcon />} />
        <BottomNavigationAction label="Groups" icon={<PeopleIcon />} />
        <BottomNavigationAction label="Restaurants" icon={<RestaurantIcon />} />
      </BottomNavigation>
    </BottomBox>
  );
};

export default SidebarBottom;
