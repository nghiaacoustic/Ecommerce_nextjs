import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta name="description" content="Dev AT E-commerce website with Next.js" />
                    {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"></link> */}
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />

                    {/* <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js"></script>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js"></script> */}

                    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" ></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" ></script>
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
                    <script src="https://kit.fontawesome.com/a076d05399.js"></script>

                    {/* <script src={`https://www.paypal.com/sdk/js?client-id=${process.env.PAYPAL_CLIENT_ID}`}></script> */}
                    {/* i dont know why it doesn't accept {process.env.PAYPAL_CLIENT_ID} in next.config ... it said paypal is undefined*/}

                    <script src='https://www.paypal.com/sdk/js?client-id=AeJhpZFvv7o4Bv7J8jaNnPZAe-CRlqg0fezvLQfIxFIsRGGIplfDKUoZpDRt7vhNNRUSgk47nXjNvKwf'></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument