import {NextApiRequest, NextApiResponse} from 'next';


const sleep = (millisecond: number) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), millisecond);
    });
};


export default async (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200);
    await sleep(1000);
    res.json({value: Math.random()});
};
