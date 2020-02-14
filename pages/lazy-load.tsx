import dynamic from 'next/dynamic';

import Layout from '../components/Layout';


const Elem = dynamic(() => import('../components/LazyLoadedElement'));


function LazyLoad() {
    return (
        <Layout>
            <Elem />
        </Layout>
    );
}


export default LazyLoad;
