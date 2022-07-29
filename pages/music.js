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
