import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@600;700&display=swap"
                    rel="stylesheet"
                />
                <meta
                    name="description"
                    content="Rock, Paper, Scissors, Spock game created by Charles Miller as a frontendmentor.io challenge."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
