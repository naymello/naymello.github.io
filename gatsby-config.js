module.exports = {
  siteMetadata: {
    title: `Portfólio`,
    description: `Site profissional para a exibição de dados e projetos`,
    author: `@naymello`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nay Mello Portfólio`,
        short_name: `Nay Mello`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/assets/myLogo.svg`,
      },
    },
  ],
}
