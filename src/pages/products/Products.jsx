import { useEffect, useState } from "react"
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Rating } from "@mui/material";
import { useParams } from "react-router-dom";
import { ProductDetail } from "./ProductDetail";
import { useNavigate } from "react-router-dom";

export const Products = () => {
    const [products, setProdacts] = useState([]);

    const navigate = useNavigate();

    const params = useParams();

    const [isDetailsOpend, setisDetailsOpend] = useState(false);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then((productsReponse) => {
                setProdacts(productsReponse.products)
            });
    }, []);
    const handleDetailsOpen = (productId) => {
        setisDetailsOpend(true);
        navigate(`/products/${productId}`)
    };

    const handleDetailsclose = () => {
        setisDetailsOpend(false);
        navigate(`/products`)
    };


    return (

        <div>
            <h1 align='center'>

                <div>
                    PRODUCTS
                </div></h1>
            <TableContainer component={Paper} >
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow >
                            <TableCell>Thumbnail</TableCell>
                            <TableCell align="right">Title</TableCell>
                            <TableCell align="right">SKU</TableCell>
                            <TableCell align="right">Stovk</TableCell>
                            <TableCell align="right">Routing</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow
                                onClick={() => handleDetailsOpen(product.id)}
                                key={product.id}
                                sx={{
                                    '&:last-child td, &:last-child th': {
                                    }
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    <img src={product.thumbnail} alt=""
                                        width='80px' height='80px' />
                                </TableCell>
                                <TableCell align="center">{product.title}</TableCell>
                                <TableCell align="center">{product.sku}</TableCell>

                                <TableCell align="center">{product.stock}</TableCell>
                                <TableCell align="center">{product.routing}</TableCell>
                            </TableRow>
                        ))}
                        <h1 align='center'>

                        </h1>
                    </TableBody>
                </Table>
            </TableContainer>
            <ProductDetail
                productId={params.productId}
                open={isDetailsOpend}
                onClose={handleDetailsclose}
            />
        </div >
    )
}
