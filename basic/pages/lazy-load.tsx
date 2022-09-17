import dynamic from 'next/dynamic';


const Elem = dynamic(() => import('../components/LazyLoadedElement'));


function LazyLoad() {
    return <Elem />;
}


export default LazyLoad;
