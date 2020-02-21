import {NextApiRequest, NextApiResponse} from 'next';


let count = 0;


export default async (req: NextApiRequest, res: NextApiResponse) => {
    count++;
    res.status(200).send(`${count}`);
};
