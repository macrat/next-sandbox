import axios from 'axios';

import Layout from '../components/Layout';


interface TVShow {
    id: number,
    name: string,
    url: string,
    type: string,
    genres: string[],
    officialSite?: string,
}


function Async({shows}: {shows?: TVShow[]}) {
    return (
        <Layout>
            <h1>Batman TV Shows</h1>
            <ul>
                {shows && shows.map(show => (
                    <li key={show.id}>
                        <a href={show.url}>{show.name}</a>
                    </li>
                ))}
            </ul>
        </Layout>
    );
}

Async.getInitialProps = async () => {
    const resp = await axios.get('https://api.tvmaze.com/search/shows?q=batman');

    return {
        shows: resp.data.map((entry: {show: TVShow}) => entry.show),
    };
}

export default Async;
