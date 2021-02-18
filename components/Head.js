/* This custom Head component was created by Phiilu: https://github.com/phiilu/phiilu.com/blob/main/src/components/Head/Head.js */
import * as React from "react";
import NextHead from "next/head";

const defaultImage = "https://makemoney.dev/images/homepage.png";

const Head = ({
    children,
    title,
    description,
    keywords,
    url,
    date,
    image = defaultImage,
}) => {
    return (
        <NextHead>
            <meta key="charSet" charSet="UTF-8" />
            <meta
                key="viewport"
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <meta
                key="httpEquiv"
                httpEquiv="x-ua-compatible"
                content="ie=edge"
            />

            <meta key="title" name="title" content={title} />
            {description && (
                <meta
                    key="description"
                    name="description"
                    content={description}
                />
            )}
            {keywords && (
                <meta key="keywords" name="keywords" content={keywords} />
            )}
            <meta key="author" name="author" content="MakeMoney.dev" />

            {date && (
                <meta
                    key="article:published_time"
                    property="article:published_time"
                    content={new Date(date).toISOString()}
                />
            )}

            <meta key="og:title" property="og:title" content={title} />
            <meta
                key="og:description"
                property="og:description"
                content={description}
            />
            <meta key="og:type" property="og:type" content="website" />
            {url && <meta key="og:url" property="og:url" content={url} />}

            {image && (
                <meta key="og:image" property="og:image" content={image} />
            )}
            {image && <meta key="image" property="image" content={image} />}
            {image && (
                <meta
                    key="og:image:width"
                    property="og:image:width"
                    content="1200"
                />
            )}
            {image && (
                <meta
                    key="og:image:height"
                    property="og:image:height"
                    content="630"
                />
            )}

            <meta
                key="twitter:card"
                name="twitter:card"
                content="summary_large_image"
            />
            <meta
                key="twitter:creator"
                name="twitter:creator"
                content="@makemoneydev"
            />
            <meta
                key="twitter:title"
                name="twitter:title"
                content={title ? `${title} | MakeMoney.Dev` : "MakeMoney.Dev"}
            />
            <meta
                key="twitter:description"
                name="twitter:description"
                content={description}
            />
            {image && (
                <meta
                    key="twitter:image"
                    name="twitter:image"
                    content={image}
                />
            )}

            {url && <link key="canonical" rel="canonical" href={url} />}

            <link
                key="apple-touch-icon"
                rel="apple-touch-icon"
                sizes="180x180"
                href="/apple-touch-icon.png"
            />
            <link
                key="icon32"
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon-32x32.png"
            />
            <link
                key="icon16"
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicon-16x16.png"
            />

            <title key="pageTitle">
                {title ? `${title} | MakeMoney.Dev` : "MakeMoney.Dev"}
            </title>

            {children}
        </NextHead>
    );
};

export default Head;
