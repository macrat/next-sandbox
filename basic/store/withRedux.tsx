import {Store} from 'redux';
import {ReactNode} from 'react';
import {NextPage, NextPageContext} from 'next';
import {Provider} from 'react-redux';

import {initializeStore, State} from '../store';


let _store: Store<State>;
const getStore = (initialState?: State) => {
    if (typeof window === 'undefined') return initializeStore(initialState);

    if (!_store) _store = initializeStore(initialState);

    return _store;
};


export default (PageComponent: NextPage, {ssr = true} = {}) => {
    const WithRedux = ({initialReduxState, ...props}: {initialReduxState: Store}) => (
        <Provider store={getStore()}>
            <PageComponent {...props} />
        </Provider>
    );

    if (ssr || PageComponent.getInitialProps) {
        WithRedux.getInitialProps = async (context: NextPageContext) => {
            const store = getStore();

            const pageProps = (
                typeof PageComponent.getInitialProps === 'function'
                ? await PageComponent.getInitialProps(context)
                : {}
            );

            return {
                ...pageProps,
                initialState: store.getState(),
            };
        };
    }

    return WithRedux;
};
