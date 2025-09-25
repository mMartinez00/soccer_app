import Layout from '@/components/Layout';
import styles from '../styles/main.css';
import { SWRConfig, useSWRConfig } from 'swr';
import { Provider } from '@/components/ui/provider';

export default function App({ Component, pageProps }) {
    const options = {
        revalidateOnFocus: false,
    };

    const { refreshInterval, mutate, cache, ...restConfig } = useSWRConfig();

    return (
        <SWRConfig value={options}>
            <Provider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Provider>
        </SWRConfig>
    );
}
