import React from 'react'
import Document, {Head, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head,  errorHtml, chunks } = renderPage();
    return { html, head ,  errorHtml, chunks};
  }

  render() {
    return (
      <html>
        <Head>
          <meta name='viewport' content='width=device-width,initial-scale=1.0'/>
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />

          <link href="./static/css/css" rel="stylesheet" type="text/css" />
          <link href="./static/css/font-awesome.min.css" rel="stylesheet" />
          <link rel="icon" type="image/gif" href="http://cameronwp.com/images/favicon.gif" />

          <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
          <link rel='stylesheet' type='text/css' href='./static/css/nprogress.css'/>
          <link rel='stylesheet' type='text/css' href='./static/css/main.css'/>
          <link rel='stylesheet' type='text/css' href='./static/css/button.css'/>
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet"/>

        </Head>
        <body>
          {this.props.customValue}
          <Main/>
          <NextScript/>
        </body>
      </html>
)
}
}
