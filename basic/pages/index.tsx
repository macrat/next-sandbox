import {FC} from 'react';
import axios from 'axios';
import useSWR from 'swr';
import Link from 'next/link';

import {APIData} from './api/posts';

import Counter from '../components/Counter';


const PostLink: FC<{href: string}> = ({href, children}) => (
    <Link href={href}><a>{children}</a></Link>
);


const DateTime: FC<{time: Date}> = ({time}) => (
    <time dateTime={time.toISOString()}>
        {`${time.getFullYear()}/${time.getMonth() + 1}/${time.getDate()} ${time.getHours()}:${String(time.getMinutes()).padStart(2, '0')}`}
    </time>
);


function PageList() {
    const {data, error} = useSWR<APIData>('/api/posts', url => axios.get(url).then(x => x.data));

    if (error) return <>Failed: <pre>{error}</pre></>;
    if (!data) return <>Loading...</>;

    return (
        <ul>
            {data.posts.map(x => (
                <li key={x.path}><PostLink href={x.path}>
                    <DateTime time={new Date(x.createdAt)} />
                    {` ${x.title}`}
                </PostLink></li>
            ))}
        </ul>
    );
}


export default function Index() {
    return (
        <>
            <h1>hello world!</h1>
            <PageList />
            <p><Counter /><Counter /><Counter /></p>
        </>
    );
}
