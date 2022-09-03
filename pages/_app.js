import App from 'next/app';
import Head from 'next/head';
import { createContext } from 'react';
import { fetchAPI } from '../lib/api';
import { getStrapiMedia } from '../lib/media';

import '../styles/globals.scss';
import Layout from './../components/Layout';

export const GlobalContext = createContext({});

function MyApp({ Component, pageProps }) {
  const { global } = pageProps;

  return (
    <GlobalContext.Provider value={global}>
      <Layout navlinks={global.navlinks}>
        <Component {...pageProps} />
      </Layout>
    </GlobalContext.Provider>
  );
}

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);

  const navlinks = [
    {
      name: 'Dành cho sinh viên',
      path: 'student',
      submenus: [
        {
          name: 'Thành Công Trong Học Tập',
          path: '/student#thanh-cong-trong-hoc-tap',
        },
        {
          name: 'Thành Công Trong Ứng Tuyển',
          path: '/student#thanh-cong-trong-ung-tuyen',
        },
        {
          name: 'Thành Công Trong Khởi Sự Kinh Doanh',
          path: '/student#thanh-cong-trong-khoi-su-kinh-doanh',
        },
        {
          name: 'Experience Tour',
          path: 'student',
        },
      ],
    },
    {
      name: 'Dành cho doanh nghiệp',
      path: 'business',
      submenus: [
        {
          name: 'Thành Công Trong Học Tập',
          path: '/student#thanh-cong-trong-hoc-tap',
        },
        {
          name: 'Thành Công Trong Ứng Tuyển',
          path: '/student#thanh-cong-trong-ung-tuyen',
        },
        {
          name: 'Thành Công Trong Khởi Sự Kinh Doanh',
          path: '/student#thanh-cong-trong-khoi-su-kinh-doanh',
        },
        {
          name: 'Experience Tour',
          path: '/student',
        },
      ],
    },
    {
      name: 'Đối tác',
      path: 'partners',
    },
    {
      name: 'Tin tức & Sự kiện',
      path: 'news',
    },
    {
      name: 'Liên hệ',
      path: 'contact',
    },
  ];

  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  // Fetch global site settings from Strapi
  // const globalRes = await fetchAPI('/global', {
  //   populate: {
  //     favicon: '*',
  //     defaultSeo: {
  //       populate: '*',
  //     },
  //   },
  // });

  // Pass the data to our page via props
  // return { ...appProps, pageProps: { global: globalRes.data } };
  return {
    ...appProps,
    pageProps: {
      global: {
        navlinks: navlinks,
        siteName: 'Mind Connector',
      },
    },
  };
};

export default MyApp;
