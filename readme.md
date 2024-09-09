# BC Partners Website

A Bootstrap-based website for BC Partners, a company specializing in creating and customizing office spaces. The site is versatile and can be adapted for any business needs, offering a clean and modern design.

<img src="./images/screen.png" />

## Features

- Minimalist, clean design with customizable background images and patterns
- Fully responsive layout for optimal viewing on all devices
- Custom JavaScript for interactive stat counters
- Smooth navigation scroll effect
- Dedicated project showcase area
- Testimonial carousel/slider for client feedback
- Functional contact form
- Inner article or blog page template
- Integrated Font Awesome icons for design enhancement

## Usage

The BC Partners website is built using [Bootstrap](https://getbootstrap.com/) and [Sass](https://sass-lang.com/), and leverages [Font Awesome](https://fontawesome.com/) for icons.

### Installation

To customize and work on this website, you'll need [Node.js](https://nodejs.org/en/). After installing Node.js, clone this repository and run the following command to install dependencies:

```bash
npm install
```

This will install Bootstrap, Sass, and Font Awesome. Once installed, you can compile Sass to CSS by running:

```bash
npm run sass:build
```

To automatically watch your Sass files for changes, use:

```bash
npm run sass:watch
```

### Customization

To tailor the website design, you can modify Bootstrap variables by adding custom variables to the `bootstrap.scss` file. For reference, you can review the available variables in `node_modules/bootstrap/dist/scss/_variables.scss`. **Do not** directly edit this file, as it will be overwritten during Bootstrap updates.

For your own custom styles, make changes in the `styles.scss` file, which is dedicated to housing all non-Bootstrap-related styles.

## Key Notes

- Leverage Sass for easy customization and styling.
- Keep the design responsive for better user experience on both desktop and mobile devices.
- Enhance visual appeal with Font Awesome icons and background patterns tailored to your brand.

