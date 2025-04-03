import { Drawer, Box, Typography, Divider, CircularProgress, Rating } from "@mui/material";
import { useEffect, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { UserBasicInfo } from './UserBasicInfo'

export const UsersDetail = (props) => {

    const [user, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);


    console.log(props.userId)

    useEffect(() => {
        setLoading(true)
        fetch(`https://dummyjson.com/users/${props.userId}`)
            .then(res => res.json())
            .then((usersReponse) => {

                setUsers(usersReponse)
                setLoading(false)
            })
            .catch(() => {
                setLoading(false)
            })
    }, [props.userId])

    return (
        <Drawer
            anchor='right'
            open={props.open}
            onClose={props.onClose}
        >
            <Box sx={{ width: '500px', }}>
                <Box sx={{ height: '30px', padding: '15px 20px', display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h5"> Users Detalis    </Typography>
                    <CloseIcon sx={{ cursor: 'pointer' }} onClick={props.onClose} />

                </Box>
                <Divider />
                <Box sx={{ height: 'calc(100vg-75px)', }}>
                    {loading
                        ? (
                            <Box sx={{

                                display: 'flex',
                                justifyContent: 'center',
                                alignContent: "center",
                                height: '100%',
                            }}><CircularProgress /></Box>
                        ) : user?.id && (
                            <>
                                <UserBasicInfo data={{
                                    address: user.address,
                                    image: user.image,
                                    lastName: user.lastName,
                                    phone: user.phone,
                                }} />
                            </>
                        )}
                </Box>

            </Box>
        </Drawer >
    )
}