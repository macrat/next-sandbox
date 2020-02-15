import {AppProps} from 'next/app';

import withRedux from '../store/withRedux';


export default function App({Component, pageProps}: AppProps) {
    const Wrap = withRedux(Component);
    return <Wrap {...pageProps} />
};
