import axios from 'axios';

import Layout from '../components/Layout';


function Async({shows}) {
    return (
        <Layout>
            <h1>Batman TV Shows</h1>
            <ul>
                {shows && shows.map(show => (
                    <li key={show.id}>
                        {show.name}
                    </li>
                ))}
            </ul>
        </Layout>
    );
}

Async.getInitialProps = async () => {
    const resp = await axios.get('https://api.tvmaze.com/search/shows?q=batman');

    return {
        shows: resp.data.map(entry => entry.show),
    };
}

export default Async;
