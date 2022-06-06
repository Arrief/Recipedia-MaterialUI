import React from "react";
import { Avatar, AvatarGroup, Badge, Box, Divider, List, ListItem, ListItemAvatar, ListItemText, styled, Typography } from "@mui/material"

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

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
        <Typography variant="h6" fontWeight={100} mb="1rem">Live Chat</Typography>
        <Typography mb=".5rem">Currently online</Typography>
        <AvatarGroup max={5}>
          <StyledBadge
            anchorOrigin={{
              vertical: 'bottom', 
              horizontal: 'right' 
            }}
            overlap="circular"
            variant="dot"
          >
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </StyledBadge>
          <StyledBadge
            anchorOrigin={{
              vertical: 'bottom', 
              horizontal: 'right' 
            }}
            overlap="circular"
            variant="dot"
          >
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          </StyledBadge>
          <StyledBadge
            anchorOrigin={{
              vertical: 'bottom', 
              horizontal: 'right' 
            }}
            overlap="circular"
            variant="dot"
          >
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          </StyledBadge>
          <StyledBadge
            anchorOrigin={{
              vertical: 'bottom', 
              horizontal: 'right' 
            }}
            overlap="circular"
            variant="dot"
          >
            <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          </StyledBadge>
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
        </AvatarGroup>
        <Typography mb=".5rem" mt="1rem">Join the conversation</Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
  )
}

export default Rightbar;
