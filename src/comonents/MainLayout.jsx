import { Outlet, Link } from "react-router-dom";
import './MainLayout.css';
import { useContext } from "react";
import { AuthContext } from "../context/auth/AuthContext";
import Container from '@mui/material/Container';
import { Navbar } from "./Navbar";
import LogoutIcon from '../assets/logout.svg';




export const MainLayout = () => {
    const { signOut } = useContext(AuthContext);

    return (
        <Container id="main-layout" disableGutters={true}>
            <Navbar />

            <div className="content">
                <Outlet />
            </div>
        </Container>
    );
};
