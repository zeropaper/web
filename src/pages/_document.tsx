import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
} from 'next/document'

class OryDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="apple-touch-icon-precomposed"
            sizes="57x57"
            href="/images/icon/apple-touch-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="114x114"
            href="/images/icon/apple-touch-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="72x72"
            href="/images/icon/apple-touch-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="144x144"
            href="/images/icon/apple-touch-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="60x60"
            href="/images/icon/apple-touch-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="120x120"
            href="/images/icon/apple-touch-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="76x76"
            href="/images/icon/apple-touch-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="152x152"
            href="/images/icon/apple-touch-icon-152x152.png"
          />
          <link
            rel="icon"
            type="image/png"
            href="/images/icon/favicon-196x196.png"
          />
          <link
            rel="icon"
            type="image/png"
            href="/images/icon/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            href="/images/icon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            href="/images/icon/favicon-16x16.png"
          />
          <link
            rel="icon"
            type="image/png"
            href="/images/icon/favicon-128x128.png"
          />
          <meta
            name="msapplication-TileImage"
            content="/images/icon/mstile-144x144.png"
          />
          <meta
            name="msapplication-square70x70logo"
            content="/images/icon/mstile-70x70.png"
          />
          <meta
            name="msapplication-square150x150logo"
            content="/images/icon/mstile-150x150.png"
          />
          <meta
            name="msapplication-wide310x150logo"
            content="/images/icon/mstile-310x150.png"
          />
          <meta
            name="msapplication-square310x310logo"
            content="/images/icon/mstile-310x310.png"
          />

          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        </Head>
        <body>
          <noscript key="noscript" id="gatsby-noscript">
            This app works best with JavaScript enabled.
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default OryDocument
