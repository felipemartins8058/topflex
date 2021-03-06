module.exports = {
    siteMetadata: {
        title: `Topflex`,
        siteUrl: `https://topflexoffice.com.br`,
    },
    plugins: [
        "gatsby-plugin-styled-components",
        {
            resolve: "gatsby-plugin-google-analytics",
            options: {
                trackingId: "CHANGE-IT-LATER",
            },
        },
        // {
        //     resolve: "gatsby-plugin-google-tagmanager",
        //     options: {
        //         id: "GTM-TLB2GZZ",
        //         includeInDevelopment: true,
        //     },
        // },
        {
            resolve: "gatsby-plugin-google-tagmanager",
            options: {
                id: "GTM-T629HH4",
                includeInDevelopment: false,
            },
        },
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-plugin-facebook-pixel",
            options: {
                pixelId: "372808458192910",
            },
        },
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "src/images/logo.png",
                name: `TopFlex`,
                short_name: `TopFlex`,
            },
        },
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
