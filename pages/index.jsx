import axios from 'axios';
import useSWR from 'swr';
import Link from 'next/link';

import Layout from '../components/Layout';
import Counter from '../components/Counter';


const PostLink = ({title, children}) => (
    <Link href="/post/[title]" as={`/post/${title}`}><a>{children}</a></Link>
);


function PageList() {
    const {data, error} = useSWR('/api', url => axios.get(url).then(x => x.data));

    if (error) return <Layout><h1>hello world!</h1>Failed: <pre>{error}</pre></Layout>;
    if (!data) return <Layout><h1>hello world!</h1>Loading...</Layout>;

    return (
        <ul>
            {data.pages.map(x => (
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
