module.exports = {
  siteMetadata: {
    title: "OpenApprentice",
    description: "A new approach to gaining real experience.",
    menuLinks: [
      {
        name: "Open Apprentice",
        link: "/",
      },
      {
        name: "Our Purpose",
        link: "/our-purpose",
      },
      {
        name: "For Students",
        link: "/for-students",
      },
      {
        name: "For Employers",
        link: "/for-employers",
      },
      {
        name: "For Teachers and Mentors",
        link: "/for-teachers",
      },
      {
        name: "Contact",
        link: "/contact",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `openApprentice`,
        short_name: `openApprentice`,
        start_url: `/`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
