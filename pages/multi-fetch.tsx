import {useState} from 'react';
import useSWR from 'swr';
import axios from 'axios';

import Layout from '../components/Layout';


const FetchTimer = () => {
    const [stime, _] = useState<number>(new Date().getTime());

    const {data, error} = useSWR('/api/slow', async url => (await axios.get(url)).data.value);

    let content = (<span>waiting...</span>);
    let color = {bg: '#ccc', fg: '#000'};

    if (error) {
        content = (<span>{error}</span>);
        color = {bg: '#f00', fg: '#fff'};
    }

    if (data) {
        content = (<span>done: {(new Date().getTime() - stime) / 1000}<br />{data}</span>);
        color = {bg: '#fff', fg: '#000'};
    }

    return (
        <div>
            {content}

            <style jsx>{`
                div {
                    display: inline-block;
                    width: 120px;
                    height: 120px;
                    padding: 8px;
                    margin: 4px;
                    overflow: hidden;
                    color: ${color.fg};
                    background-color: ${color.bg};
                    border: 1px solid black;
                }
            `}</style>
        </div>
    );
};


const MultiFetch = () => {
    const [count, setCount] = useState<number>(1);

    return (
        <Layout>
            {[...new Array(count)].map((_, i) => (
                <FetchTimer key={i} />
            ))}
            <button onClick={() => setCount(count + 1)}>+</button>

            <style jsx>{`
                button {
                    position: fixed;
                    bottom: 32px;
                    right: 32px;
                    width: 64px;
                    height: 64px;
                    font-size: 2em;
                    border-radius: 48px;
                }
            `}</style>
        </Layout>
    );
};


export default MultiFetch;
