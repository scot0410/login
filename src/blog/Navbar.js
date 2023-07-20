import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import LoginButton from '../login/LoginButton';
import ProfileIcon from '../account/ProfileIcon';
import { useAuth0 } from "@auth0/auth0-react";
import PostAddIcon from '@mui/icons-material/PostAdd';
import { Link as routerLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';


const sections = [
  { title: 'All Engineering Topics', url: '#' },
  { title: 'Cloud', url: '#' },
  { title: 'Message Streaming', url: '#' },
  { title: 'Backend', url: '#' },
  { title: 'Web Frontend', url: '#' },
  { title: 'Mobile', url: '#' },
  { title: 'Data Science and Databases', url: '#' },
  { title: 'More...', url: '#' }
];

const Navbar = (props) => {
  const { title } = props;
  const {
    user,
    isAuthenticated,
    loginWithRedirect,
    logout,
  } = useAuth0();
  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <React.Fragment>
          <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <IconButton component={routerLink} to="/post">
              <PostAddIcon />
            </IconButton>
            <Button size="small">Subscribe</Button>
            <Typography
              component="h2"
              variant="h5"
              color="inherit"
              align="center"
              noWrap
              sx={{ flex: 1 }}
            >
              {title}
            </Typography>
            <IconButton>
              <SearchIcon />
            </IconButton>
            {isAuthenticated ? <ProfileIcon /> : <LoginButton />}
          </Toolbar>
          <Toolbar
            component="nav"
            variant="dense"
            sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
          >
            {sections.map((section) => (
              <Link
                color="inherit"
                noWrap
                key={section.title}
                variant="body2"
                href={section.url}
                sx={{ p: 1, flexShrink: 0 }}
              >
                {section.title}
              </Link>
            ))}
          </Toolbar>
        </React.Fragment>
      </Container>
    </ThemeProvider>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;