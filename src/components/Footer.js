import { Box, Grid, ListItem, Stack, styled, Typography } from "@mui/material"
import '../App.css';

const FooterBox = styled(Box) (({theme}) => ({
  alignItems: "center",
  backgroundColor: "var(--main-orange)", 
  color: "white", 
  maxWidth: "100vw", 
  padding: ".5rem"
}))

const Footer = () => {
  return(
    <footer>
      <FooterBox>
        <Stack direction="row" margin="1rem">
          <ListItem>Test1</ListItem>
          <ListItem>Test2</ListItem>
          <ListItem>Test3</ListItem>
        </Stack>
        <Grid></Grid>
        <Typography align="center">&copy;2022</Typography>
      </FooterBox>
    </footer>
  );
}

export default Footer;
