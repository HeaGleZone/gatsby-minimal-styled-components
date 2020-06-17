<h1 align="center">
  gatsby-minimal-styled-components
</h1>

Simple minimal website starter. Full support for MDX Pages and styled-components for styling.

## 🚀 Quick start

1.  **Create a Gatsby site.**

    ```shell
    gatsby new my-starter https://github.com/gatsbyjs/gatsby-blank-styled-components
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-starter/
    gatsby develop
    ```

3.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## ⚙ Configuration

You can configure many aspects of the website by editing the corresponding JSON files inside `./src/data/`;

### 🌍 General Configuration

See `./src/data/website-settings/website-settings.json`

- **sitename**: also used as default SEO Title. Remember to also set it inside `./gatsby-config.js`.
- **site-url**: needed for static resources.
- **show-full-title**: choose to show page name + separator + sitename as the page title.
- **title-seperator**: symbol used as separator.
- **menu-links**: navigation links.

### 🔎 Default Metatags

You can edit the defaults Metatags (or add some) inside `./src/data/metadata.json`

### 🎨 Changing Color Palette

The default color palette contains 5 colors:

- primary
- secondary
- background_primary
- background_secondary

You can change those by editing `./src/data/color-schema/color-schema.json`.
