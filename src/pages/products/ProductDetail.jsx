import { Drawer, Box, Typography, Divider, CircularProgress, Rating } from "@mui/material";
import { ProductBasicInfo } from './ProductBasicInfo';
import { ProductReviews } from "./ProductReviews";
import { useEffect, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { Description, Title } from "@mui/icons-material";

export const ProductDetail = (props) => {

    const [product, setProducts] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        fetch(`https://dummyjson.com/products/${props.productId}`)
            .then(res => res.json())
            .then((productsReponse) => {

                setProducts(productsReponse)
                setLoading(false)
            })
            .catch(() => {
                setLoading(false)
            })
    }, [props.productId])

    return (
        <Drawer
            anchor='right'
            open={props.open}
            onClose={props.onClose}
        >
            <Box sx={{ width: '500px', }}>
                <Box sx={{ height: '30px', padding: '15px 20px', display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h5"> Product Detalis    </Typography>
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
                        ) : product?.id && (
                            <>
                                <ProductBasicInfo data={{
                                    image: product.thumbnail,
                                    title: product.title,
                                    description: product.description,
                                    rating: product.rating,
                                }} />
                                <Typography sx={{ fontSize: '11px' ,padding: '1px 20px' }}>Reviews</Typography>

                                <ProductReviews reviews={product.reviews} />
                            </>
                        )}
                </Box>

            </Box>
        </Drawer >
    )
}