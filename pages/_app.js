import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

//MuI Stuff
import { ThemeProvider } from '@mui/material/styles';
import { useTheme } from '@mui/system';
import theme from '../utils/theme';
// import CssBaseline from '@mui/material/CssBaseline';

//Redux
import { Provider, useStore } from 'react-redux';
// import store from '../redux/store';

//Redux Persist
import { PersistGate } from 'redux-persist/integration/react';

//Import custom wrapper for persist
import { wrapper } from '../redux/store';

import '../styles/globals.css';
import GeneralLayout from '../components/general-layout';

function MyApp(props) {
    const store = useStore((state) => state);
    const { Component, pageProps } = props;
    const themes = useTheme(theme);
    const router = useRouter();
    const currentPath = router.pathname; // untuk menyalin URL Browser kita dan menyimpannya di currentpath

    // Remove the server-side injected CSS. (Agar Met Ui dapat bekerja di next)
    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    let trueComponent =
        currentPath === '/sign-in' || currentPath === '/sign-up' ? (
            <Component {...pageProps} />
        ) : (
            <GeneralLayout>
                <Component {...pageProps} />;
            </GeneralLayout>
        );

    return (
        <div>
            <Head>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
                    integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
                <link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css" />
            </Head>
            <ThemeProvider theme={themes}>
                {/* <CssBaseline /> */}
                <PersistGate persistor={store.__persistor} loading={null}>
                    {trueComponent}
                </PersistGate>
            </ThemeProvider>
        </div>
    );
}

export default wrapper.withRedux(MyApp);
