module.exports = {
    siteMetadata: {
        title: `Topflex`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        "gatsby-plugin-styled-components",
        {
            resolve: "gatsby-plugin-google-analytics",
            options: {
                trackingId: "CHANGE-IT-LATER",
            },
        },
        {
            resolve: "gatsby-plugin-google-tagmanager",
            options: {
                id: "GTM-TLB2GZZ",
                includeInDevelopment: false,
            },
        },
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
    ],
};
