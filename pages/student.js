import Head from 'next/head';
import Layout from './../components/Layout';
import Container from './../components/Container';
import QandA from './../components/QandA';

const Student = () => (
  <>
    <Head>
      <title>Mind Connector</title>
      <meta name='description' content='Mind Connector' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Layout>
      {/* <Seo seo={seo} /> */}
      <h1>Students</h1>
      <div>
        <QandA />
      </div>
    </Layout>
  </>
);

export default Student;
