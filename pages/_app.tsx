import {AppProps} from 'next/app';

import withRedux from '../lib/redux';


export default function App({Component, pageProps}: AppProps) {
    const Wrap = withRedux(Component);
    return <Wrap {...pageProps} />
};
