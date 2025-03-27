import { useEffect, useState } from "react"
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Rating } from "@mui/material";



export const Products = () => {
    const [products, setProdacts] = useState([]);


    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then((productsReponse) => {
                setProdacts(productsReponse.products)
            });
    }, []);
    console.log(products)
    return (
        <div>
            <div >
                products
            </div>
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
                                <Rating value={product.rating} />
                                <TableCell align="center">{product.stock}</TableCell>
                                <TableCell align="center">{product.routing}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div >
    )
}