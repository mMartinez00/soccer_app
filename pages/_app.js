import Layout from '@/components/Layout';
import styles from '../styles/main.css';

export default function App({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
