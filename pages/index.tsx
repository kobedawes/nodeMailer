import {useState} from 'react';
import Layout from '../components/Layout';
import {sendMail} from '../lib/api';

type Props = {
  posts: [Post]
}

type Post = {
  _id: String;
  fullName: String;
  email: String;
}
let entries: JSON;
export async function getServerSideProps() {
  try {
    let response = await fetch('http://localhost:3000/api/getPosts');
    let posts = await response.json();
    //console.log("======== POSTS ========")
    entries = posts;
    //console.log(entries);
    //console.log(posts[1].fullName)

    return {
      props: { posts: JSON.parse(JSON.stringify(posts)) },
    };
  } catch (e) {
    console.error(e);
  }
}
// const sendEmail = async () => {
//   await sendMail(entries);
// };

export default function Mail(props: Props) {
  const [posts, setPosts] = useState < Post[] > (props.posts);
  // console.log("======== POSTS ========");
  // console.log(posts);
  // console.log(posts[1].fullName);
  // console.log(posts.length);

  //cause of issue, when sendMail used it brings up the fs module not found error
  const sendEmail = async () => {
    await sendMail(posts);
  };
  

  const handleDeletePost = async (postId: string) => {
    try {
      let response = await fetch(
        "http://localhost:3000/api/deletePost?id=" + postId,
        {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
        }
      );
      response = await response.json();
      window.location.reload();
    } catch (error) {
      console.log("An error occurred while deleting ", error);
    }
  };
  return (
    <Layout>
      <div className="posts-body">
        <h1 className="posts-body-heading">Top 20 Added Posts</h1>
        <button
          onClick={sendEmail}
          > Send Email</button>
        {posts.length > 0 ? (
          <ul className="posts-list">
            {posts.map((post, index) => {
              return (
                <li key={index} className="post-item">
                  <div className="post-item-details">
                    <h2>{post.fullName}</h2>
  
                    <p>{post.email}</p>
                  </div>
                  <div className="post-item-actions">
                    <a href={`/posts/${post._id}`}>Edit</a>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <h2 className="posts-body-heading">Ooops! No posts added so far</h2>
        )}
      </div>
      
      <style jsx>
        {`
          .posts-body {
            width: 400px;
            margin: 10px auto;
          }
          .posts-body-heading {
            font-family: sans-serif;
          }
          .posts-list {
            list-style-type: none;
            display: block;
          }
          .post-item {
            width: 100%;
            padding: 10px;
            border: 1px solid #d5d5d5;
          }
          .post-item-actions {
            display: flex;
            justify-content: space-between;
          }
          .post-item-actions a {
            text-decoration: none;
          }
        `}
      </style>
    </Layout>
  );
}