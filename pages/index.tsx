import {ReactNode} from 'react';
import {NextPage} from 'next';
import axios from 'axios';
import useSWR from 'swr';
import Link from 'next/link';

import Layout from '../components/Layout';
import Counter from '../components/Counter';


const PostLink: NextPage<{title: string, children: ReactNode}> = ({title, children}) => (
    <Link href="/post/[title]" as={`/post/${title}`}><a>{children}</a></Link>
);


function PageList() {
    const {data, error} = useSWR('/api', url => axios.get(url).then(x => x.data));

    if (error) return <>Failed: <pre>{error}</pre></>;
    if (!data) return <>Loading...</>;

    return (
        <ul>
            {data.pages.map((x: string) => (
                <li key={x}><PostLink title={x}>this is "{x}"</PostLink></li>
            ))}
        </ul>
    );
}


export default function Index() {
    return (
        <Layout>
            <h1>hello world!</h1>
            <p><Counter /><Counter /><Counter /></p>
            <PageList />
        </Layout>
    );
}
