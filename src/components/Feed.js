import { Favorite, MoreVert, Share } from "@mui/icons-material";
import ChatIcon from "@mui/icons-material/Chat";
import {
  Avatar,
  Box,
  IconButton,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Link,
  styled,
  Typography,
} from "@mui/material";
import AddRecipe from "./AddRecipe";
import SidebarBottom from "./SidebarBottom";

const StyledLink = styled(Link)(({ theme }) => ({
  color: "#fb8c00",
  fontWeight: "bold",
  marginLeft: 10,
  textDecoration: "none",
}));

const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <Card sx={{ mb: 4 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              AR
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Red Lentil Dal (Masoor Dal)"
          subheader="September 23, 2020"
        />
        <CardMedia
          component="img"
          height="194"
          image="/images/lentil-dal.jpg"
          alt="Red Lentil Dal"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This Indian Red Lentil Dal (Masoor Dal) with sweet potatoes,
            fragrant spices and creamy coconut milk is one of my favorite vegan
            weeknight dinner recipes.
            <StyledLink href="https://www.crowdedkitchen.com/red-lentil-dal/">
              Link
            </StyledLink>
          </Typography>
        </CardContent>
        {/* like & share buttons */}
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Favorite />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
          <IconButton aria-label="comment">
            <ChatIcon />
          </IconButton>
        </CardActions>
      </Card>

      <Card sx={{ mb: 4 }}>
        <CardHeader
          avatar={
            <Avatar
              sx={{ color: "black", bgcolor: "yellow" }}
              aria-label="recipe"
            >
              JS
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Vegan Pancakes"
          subheader="December 13, 2021"
        />
        <CardMedia
          component="img"
          height="194"
          image="/images/Pancakes.jpg"
          alt="Vegan Pancakes"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Soft, tall, fluffy, and easy to make, these vegan pancakes are the
            best pancakes you'll ever have.
            <StyledLink href="https://theplantbasedschool.com/vegan-pancakes/">
              Link
            </StyledLink>
          </Typography>
        </CardContent>
        {/* like & share buttons */}
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Favorite />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
          <IconButton aria-label="comment">
            <ChatIcon />
          </IconButton>
        </CardActions>
      </Card>
      {/* Floating action button */}
      <AddRecipe />
      {/* Sidebar goes to the bottom on phone screens */}
      <SidebarBottom />
    </Box>
  );
};

export default Feed;
