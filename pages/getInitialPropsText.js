import Layout from '../components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Index = (props) => (
  <Layout>
    <h1>Batman TV Show</h1>
    <ul>
      {
        props.shows.map(({show})=>{
          <li key={show.id}>
            <Link as={`/p/${show.id}`} href={}>

            </Link>
          </li>
        })
      }
    </ul>
  </Layout>
)