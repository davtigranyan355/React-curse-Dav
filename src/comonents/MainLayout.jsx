import { Outlet, Link } from "react-router-dom";
import './MainLayout.css';
import { useContext } from "react";
import { AuthContext } from "../context/auth/AuthContext";
import Container from '@mui/material/Container';
import { Navbar } from "./Navbar";
import LogoutIcon from '../assets/logout.svg';
import { Box } from "@mui/material";




export const MainLayout = () => {
    const { signOut } = useContext(AuthContext);

    return (
        <Container id="main-layout" disableGutters={true}>
            <Navbar />

            <Box className="content" sx={{ marginTop: '90px' }}>
                <Outlet />
            </Box>
        </Container>
    );
};
