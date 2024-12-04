import Layout from '@/components/Layout';
import styles from '../styles/main.css';
import { SWRConfig } from 'swr';

export default function App({ Component, pageProps }) {
    return (
        <SWRConfig value={{ revalidateOnFocus: false }}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </SWRConfig>
    );
}
