import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("test");

    const posts = await db.collection("users").find({}).limit(20).toArray();

    res.json(posts);
    console.log(posts);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};