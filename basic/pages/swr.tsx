import {NextPage} from 'next';
import useSWR from 'swr';
import axios from 'axios';


export type Props = {
    initialData?: string,
};


const SWR: NextPage<Props> = ({initialData}) => {
    const {data, error} = useSWR('/api/counter', path => axios.get(path).then(resp => resp.data), {initialData});

    return (
        <>
            <p>data: <b>{data}</b></p>
            <p>error: <b>{error}</b></p>
        </>
    );
};


SWR.getInitialProps = async ({req}) => ({
    initialData: (await axios.get((req ? `http://${req.headers.host}` : '') + '/api/counter')).data,
});


export default SWR;
