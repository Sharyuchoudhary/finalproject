import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '@/app/styles/s.module.css';

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Skill sail</title>
     
      </Head>

      <div className={styles.l}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
