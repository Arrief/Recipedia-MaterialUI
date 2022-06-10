import React, { useState } from 'react';
import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, styled, TextField, Tooltip, Typography } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import theme from "../theme";
import { DateRange } from '@mui/icons-material';
import '../App.css';

const PostButton = styled(Button) ({
  backgroundColor: "var(--main-orange)",
  '&:hover': {
    backgroundColor: "#cf7606"
  }
})

const StyledModal = styled(Modal) ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});

const UserBox = styled(Box) ({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  marginBottom: "1rem",
  marginTop: "1rem"
});

const AddRecipe = () => {
  const [open, setOpen] = useState(false);

  return(
    // using theme here for Floating action button color
    <ThemeProvider theme={theme}>
      <Tooltip 
        title="Add a recipe" 
        onClick={() => setOpen(true)}
        sx={{
          bottom: 30, 
          left: {xs: "calc(50%)", md: 30}, 
          position: "sticky"
          }} 
        >
        {/* //! sx for small screen here in "Fab" fixes element on bottom, without that and just the sx from "Tooltip" it will float in the Feed cards! */}
        <Fab color="recipediaOrange" aria-label="edit" sx={{xs: "20%", mb: "1rem"}}>
          <EditIcon />
        </Fab>
      </Tooltip>
      {/* Modal opens when clicking Fab */}
      <StyledModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box bgcolor="white" borderRadius={5} width={400} height={280} padding={3}>
          <Typography id="modal-modal-title" variant="h6" component="h2" textAlign="center">
            Post a new Recipe
          </Typography>
          <UserBox>
            <Avatar
              src="/images/Gordon.jpg"
              sx={{height: 50, width: 50}}
            />
            <Typography fontWeight={500} variant="span">Gordon</Typography>
          </UserBox>

          <TextField
          id="standard-multiline-static"
          multiline
          rows={4}
          placeholder="Share your new recipe"
          variant="standard"
          sx={{width: "100%"}}
        />
        <Stack direction="row" gap={1}>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
            sx={{marginTop: "1rem"}}
          >
            <PostButton>
              Post
            </PostButton>
            <PostButton sx={{width: "100px"}}>
              <DateRange />
            </PostButton>
          </ButtonGroup>
        </Stack>
        </Box>
      </StyledModal>
    </ThemeProvider>
  );
}

export default AddRecipe;
