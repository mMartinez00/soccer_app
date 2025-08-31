import Layout from '@/components/Layout';
import { HeroUIProvider } from '@heroui/system';
import styles from '../styles/main.css';
import { SWRConfig, useSWRConfig } from 'swr';

export default function App({ Component, pageProps }) {
    const options = {
        revalidateOnFocus: false,
    };

    const { refreshInterval, mutate, cache, ...restConfig } = useSWRConfig();

    return (
        <SWRConfig value={options}>
            <HeroUIProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </HeroUIProvider>
        </SWRConfig>
    );
}
