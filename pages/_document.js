import { Html, Head, Main, NextScript } from 'next/document';
import { Provider } from '@/components/ui/provider';

export default function Document() {
    return (
        <Html lang="en" suppressHydrationWarning>
            <Head />
            <body>
                <Provider>
                    <Main />
                    <NextScript />
                </Provider>
            </body>
        </Html>
    );
}
