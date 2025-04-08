
import { useEffect } from "react"
import { Box } from "@mui/material"
import Rating from '@mui/material/Rating';
import { Typography } from "@mui/material";

export const UserBasicInfo = (props) => {

    return (

        <Box sx={{ padding: '15px 20px', }} >
            <Typography variant="h6">Basic Informatiomn</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <img src={props.image} alt="" />
                <p><Typography sx={{ fontSize: '15px', }}>{props.data.firstName}</Typography>
                    <Typography sx={{ fontSize: '8px' }}>{props.data.description}</Typography></p>

            </Box>
            <Rating value={props.data.rating} />

        </Box >)
}