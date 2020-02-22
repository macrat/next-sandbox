import fs from 'fs';

import {NextApiRequest, NextApiResponse} from 'next';


export type APIData = {
    posts: {
        title: string,
        path: string,
        createdAt: string,
    }[],
};


export default async (req: NextApiRequest, res: NextApiResponse<APIData>) => {
    const files = (await fs.promises.readdir('./pages/post')).filter(name => name.match(/\.mdx$/));

    const posts = await Promise.all(files.map(async name => ({
        ...(await import(`../post/${name}`)).metadata,
        path: `/post/${name.replace(/\.mdx$/, '')}`,
    })));

    posts.sort((x, y) => new Date(y.createdAt).getTime() - new Date(x.createdAt).getTime());

    res.status(200).json({
        posts: posts,
    });
};
