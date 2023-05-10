// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

/* A good use case for API Routes is handling form input. For example, you can create a form on your page and have it send a POST request to your API Route. You can then write code to directly save it to your database. The API Route code will not be part of your client bundle, so you can safely write server-side code. 

export default function handler(req, res) {
  const email = req.body.email;
  // Then save email to your database, etc...
}
*/

export default function handler(req, res) {
  res.status(200).json({ text: 'Hello' });
}
