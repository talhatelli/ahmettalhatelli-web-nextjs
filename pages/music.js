/* eslint-disable */
import Image from 'next/image';
import Layout from './component/layout';

function Music({ results }) {
  return (
    <Layout>
      {results?.items?.map((result) => (
        <div className="music">
          <h1>
            <br />
            <br />
            {result?.snippet?.title}
          </h1>
          <figure>
            <a href={'https://www.youtube.com/watch?v=' + result.id}>
              <img src={result?.snippet?.thumbnails.high.url} />
            </a>
          </figure>
        </div>
      ))}
    </Layout>
  );
}
var myHeaders = new Headers();
myHeaders.append('Accept', 'application/json');
myHeaders.append('Authorization', 'Bearer  ya[token]');

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
};
export async function getStaticProps() {
  const response = await fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&myRating=like&key=[YOUR_API_KEY]', requestOptions);
  const results = await response.json();

  return {
    props: {
      results,
    },
  };
}

export default Music;

//   const paths = results.items?.map((items) => {
//     return { params: { slug: `${slug(items.snippet.title)}` } };
//   });
//   //console.log(results.items[0].snippet.title);
//   //console.log(element.snippet.description);

//   return {
//     props: {
//       items,
//     },
//     paths,|
//     fallback: false,
//   };

/*
  function Blog({ posts }) {
  return (
    <ul>
      {posts.map((post) => (++++++
        <li>{post.title}</li>
      ))}
    </ul>
  )
}
export async function getStaticProps() {
  const res = await fetch('https://.../posts')
  const posts = await res.json()
  return {
    props: {
      posts,
    },
  }
}
  */

// var myHeaders = new Headers();
// myHeaders.append('Accept', 'application/json');
// myHeaders.append(
//   'Authorization',
//   'Bearer ya29.A0AVA9y1tCCGaZiFTnECQyVjJodwLs9auqH7FOdTJNUodnZBcgyQ5Kd8FYBnuBq5_Mxm4vC649xFTfM41HKTr9KSAsKvnFybA9u5vw9V54kdldxU0T7xauE6p6n4qC88JrCN0XJIYfMfx7PNLvKlNbimLqRC2EYUNnWUtBVEFTQVRBU0ZRRTY1ZHI4R2wtWEltVmhpbmlxNjhzdHBGbGhOdw0163'
// );

// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow',
// };

// fetch(
//   'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&myRating=like&key=[YOUR_API_KEY]',
//   requestOptions
// )
//   .then((response) => response.text())
//   .then((result) => console.log(result))
//   .catch((error) => console.log('error', error));
