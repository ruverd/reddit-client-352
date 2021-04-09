import { NextApiRequest, NextApiResponse } from 'next';

export default async function categories(req: NextApiRequest, res: NextApiResponse) {
  const { category } = req.query;

	const url = `https://reddit.com/r/${category}.json`;
	console.log(url);

	const posts = await fetch(url).then((res) =>
		res.json()
	);
  
	return res.json(posts);
}
