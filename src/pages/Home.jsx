import { useAuth } from '../hooks/useAuth';
import './home.css'
import { Typography } from '@mui/material';

export const Home = () => {
    const user = useAuth();

    return (
        <div className="container">
            <section className="hero">
                <Typography variant='h4'>Holistic Health</Typography >
            </section>

            <section className="articles">
                <div className="article-card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqYRi0XtiHXOgUy5sA3N-R2sIdul_2MJlFdw&s" alt="Article 1" />
                    <Typography variant='h6'>Australia, officially the Commonwealth of Australia, is a country comprising the mainland of the Australian continent,


                    </Typography >
                </div>

                <div className="article-card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpXhMPDEcgnrq19fToVPX0tridkn9-9Qr2NQ&s" alt="Article 2" />
                    <Typography variant='h6'>Finland, officially the Republic of Finland, is a Nordic country in Northern Europe.</Typography>

                </div>
                <div className="article-card">
                    <img src="https://www.oberoihotels.com/-/media/oberoi-hotels/website-images/the-oberoi-lombok/overview/overview-banners/tol-elements-1920x819-new.jpg" alt="Article 3"
                        height='185px' />
                    <Typography variant='h6'>Canada is a parliamentary democracy and a constitutional monarchy in the Westminster tradition. </Typography>

                </div>
            </section>


        </div>
    );
};