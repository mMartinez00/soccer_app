import Layout from '@/components/Layout';
import styles from '../styles/main.css';
import { SWRConfig, useSWRConfig } from 'swr';

export default function App({ Component, pageProps }) {
    const options = {
        revalidateOnFocus: false,
    };

    const { refreshInterval, mutate, cache, ...restConfig } = useSWRConfig();

    console.log(cache);

    return (
        <SWRConfig value={options}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </SWRConfig>
    );
}
