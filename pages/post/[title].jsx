import {useRouter} from 'next/router';

import Layout from '../../components/Layout';


export default function Post() {
    const router = useRouter();

    return (
        <Layout>
            <h1>{ router.query.title }</h1>
            this is content
        </Layout>
    );
}
