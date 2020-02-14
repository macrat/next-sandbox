import {NextApiRequest, NextApiResponse} from 'next';


type APIData = {
    pages: string[],
};


export default (req: NextApiRequest, res: NextApiResponse<APIData>) => {
    res.status(200).json({
        pages: [
            'hello',
            'world',
        ],
    });
};
