import { React, useEffect, useContext, useState, } from "react";
import { AuthContext } from "../context/auth/AuthContext";
import { TableContainer, TableCell, TableHead, TableRow, Table, TableBody, Paper, Rating } from "@mui/material";

export const User = () => {
    const [users, setUsers] = useState([]);

    const { user } = useContext(AuthContext);


    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then((usersReponse) => {
                setUsers(usersReponse.users)
            });
    }, []);

    return (
        <div>
            <div >
                User
            </div>
            <TableContainer component={Paper} >
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow >
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Age</TableCell>
                            <TableCell align="right">Address</TableCell>
                            <TableCell align="right">Hair Color</TableCell>
                            <TableCell align="right">LastName</TableCell>
                            <TableCell align="right">phone</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow
                                key={user.id}
                                sx={{
                                    '&:last-child td, &:last-child th': {
                                    }
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    <img src={user.image} alt=""
                                        width='80px' height='80px' />
                                </TableCell>
                                <TableCell align="center">{user.age}</TableCell>
                                <TableCell align="center">{user.address.city}</TableCell>
                                <TableCell align="center">{user.hair.color}</TableCell>
                                <TableCell align="center">{user.lastName}</TableCell>
                                <TableCell align="center">{user.phone}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}