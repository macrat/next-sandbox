import {Provider} from 'react-redux';

import {initializeStore} from '../store';


let _store;
const getStore = initialState => {
    if (typeof window === 'undefined') return initializeStore(initialState);

    if (!_store) _store = initializeStore(initialState);

    return _store;
};


export default (PageComponent, {ssr = true} = {}) => {
    const WithRedux = ({initialReduxState, ...props}) => (
        <Provider store={getStore()}>
            <PageComponent {...props} />
        </Provider>
    );

    if (ssr || PageComponent.getInitialProps) {
        WithRedux.getInitialProps = async context => {
            context.store = getStore();

            const pageProps = (
                typeof PageComponent.getInitialProps === 'function'
                ? await PageComponent.getInitialProps(context)
                : {}
            );

            return {
                ...pageProps,
                initialState: context.store.getState(),
            };
        };
    }

    return WithRedux;
};
