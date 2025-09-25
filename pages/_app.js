import Layout from '@/components/Layout';
import styles from '../styles/main.css';
import { SWRConfig, useSWRConfig } from 'swr';
import { ChakraProvider } from '@chakra-ui/react';

export default function App({ Component, pageProps }) {
    const options = {
        revalidateOnFocus: false,
    };

    const { refreshInterval, mutate, cache, ...restConfig } = useSWRConfig();

    return (
        <SWRConfig value={options}>
            <ChakraProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ChakraProvider>
        </SWRConfig>
    );
}
