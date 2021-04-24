import Head from 'next/head';
import Body from '../components/Body';
import Header from '../components/Header';
import Hero from '../components/Hero';
import HeroNav from '../components/HeroNav';

export default function Home() {
  return (
    <div className='bg-gray-100 min-w-screen min-h-screen'>
      <Head>
        <title>Twitter Clone</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Hero />
      <HeroNav />
      <Body />
    </div>
  );
}
