import { useState, useContext } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { Input, Button, Typography,  } from '@mui/material';
import "./sign.css"
import { AuthContext } from "../context/auth/AuthContext";

export const SignIn = () => {
    const authContext = useContext(AuthContext);

    const navigate = useNavigate();

    const [username, setUserName] = useState('john_doe91');
    const [password, setPassword] = useState('');

    const onChangeUsername = (event) => {
        setUserName(event.target.value);
    };

    const onChangePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleSignIn = () => {
        const auth = authContext.signIn(username, password);

        if (!auth) {
            alert('User with credentials does not exist');
        }
    };

    return (
        <div className='Sign'>
            <Typography variant='h3'>Sign In</Typography>
            <br />
            <div>
                <Input
                    value={username}
                    onChange={onChangeUsername}
                    type="text"
                    placeholder="Username"
                />
            </div>
            <br />
            <div>
                <Input
                    value={password}
                    onChange={onChangePassword}
                    type="password"
                    placeholder="Password"
                />
            </div>
            <br />
            <Button variant='contained' onClick={handleSignIn}>Sign In</Button>
        </div>
    );
};
