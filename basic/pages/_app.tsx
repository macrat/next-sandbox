import {AppProps} from 'next/app';

import withRedux from '../store/withRedux';

import Layout from '../components/Layout';


export default function App({Component, pageProps, router}: AppProps) {
    const Wrap = withRedux(Component);
    return <Layout><Wrap {...pageProps} /></Layout>
};
