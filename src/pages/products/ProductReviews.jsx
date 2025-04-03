import { Box, Rating, Typography } from "@mui/material"



export const ProductReviews = (props) => {
    console.log(props.reviews)

    return props.reviews.map(review => (
        <Box sx={{ padding: '20 px 20px', }}>
            <Box sx={{
                margin: '10px',
                display: 'flex', justifyContent: 'space-between'
            }}>

                <Box>
                    <Typography>{review.reviewerName}</Typography>
                    {review.comment}

                </Box>
                <Box>
                    <Rating value={review.rating} />
                </Box>

            </Box >
        </Box>
    ))
}