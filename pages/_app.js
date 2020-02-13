import withRedux from '../lib/redux';


export default function App({Component, pageProps}) {
    const Wrap = withRedux(Component);
    return <Wrap {...pageProps} />
};
