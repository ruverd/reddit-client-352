import { NextApiRequest, NextApiResponse } from 'next';

export default async function posts(req: NextApiRequest, res: NextApiResponse) {
	const posts = await fetch('https://reddit.com/r/all.json').then((res) =>
		res.json()
	);
	return res.json(posts);
}
