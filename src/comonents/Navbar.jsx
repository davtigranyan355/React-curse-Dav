
import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/auth/AuthContext';
import LogoutIcon from '@mui/icons-material/Logout';

import CodeIcon from '@mui/icons-material/Code';


const pages = [
    { text: 'Home', link: '/' },
    { text: 'Shorts', link: '/images' },
    { text: 'Subscribtions', link: '/subscriptions' },
    { text: 'Prodacts', link: '/products' },
    { text: 'Users', link: '/users' },
    // { text: 'Contact', link: '/contact' }
];


const settings = ['User', 'Profile', 'Account', 'Dashboard', 'Logout'];

export function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const navigate = useNavigate();
    const { signOut, user } = useContext(AuthContext);


    const handlePageChange = (link) => {
        console.log({ link });

        navigate(link);
    };


    return (
        <AppBar sx={{ padding: '5px' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <CodeIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }} />
                    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between' }}>
                        <Box sx={{ display: 'flex' }}>
                            {pages.map((page, key) => (
                                <Button
                                    key={key}
                                    onClick={() => handlePageChange(page.link)}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >

                                    {page.text}

                                </Button>
                            ))}
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography fontWeight={"bold"}>{user.firstName}</Typography>
                            <Button
                                onClick={signOut}
                                sx={{ my: 2, color: 'white', display: 'block' }}>

                                <LogoutIcon />
                            </Button>
                        </Box>
                    </Box>

                    {/* <Box sx={{ flexGrow: 0 }}>
                       
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box> */}
                </Toolbar>
            </Container>
        </AppBar>
    );
}
