import Head from 'next/head';
import Container from '../components/Container';
import Layout from './../components/Layout';

const Contact = () => (
  <>
    <Head>
      <title>Mind Connector</title>
      <meta name='description' content='Mind Connector' />
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <Layout>
      {/* <Seo seo={seo} /> */}
      <h1>Contact</h1>
      <div></div>
    </Layout>
  </>
);

export default Contact;
