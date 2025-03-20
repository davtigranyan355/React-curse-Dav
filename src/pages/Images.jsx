import { useParams, useNavigate } from "react-router-dom";
import { getImages } from '../data/images';
import { Typography } from "@mui/material";
import "./image.css";

export const Images = () => {
    const navigate = useNavigate();

    const images = getImages();

    const handleImageView = (image) => {
        navigate(`/shorts/${image.id}`);
    };

    return (
        <section className="start">
            <Typography variant="h3"
            >This is Images Page</Typography>

            <div className="images">

                {images.map((image) => (
                    <img
                        className="img"
                        onClick={
                            () => handleImageView(image)
                        }
                        src={image.src}
                        alt="Test"
                    />
                ))}
            </div>
        </section>
    );
};