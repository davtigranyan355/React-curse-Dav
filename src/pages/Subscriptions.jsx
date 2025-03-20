import { useNavigate } from 'react-router-dom';
import { Typography, Input, Button } from '@mui/material';
import "./Subscriptions.css"
export const Subscriptions = () => {
    const navigate = useNavigate();

    const handleSomething = (subscriptionId) => {
        //...
        navigate(`/subscriptions/${subscriptionId}`);
    };

    const mouseMove = () => { };


    return (
        <section className='Sub'>
            <Typography variant='h3'>This is Subscriptions Page</Typography>
            <div className='but'>
                <Button variant='contained'
                    onClick={
                        () => handleSomething('subID') // subscription.id
                    }
                >
                    More
                </Button>
            </div>
        </section>
    );
};