## Easy Photography Portfolio -  WordPress Plugin
* [Basic Demo](https://befree.pyronaur.com/) with Twenty Seventeen Theme
* [Download on WordPress.org](https://wordpress.org/plugins/photography-portfolio/)
* [How to setup Photography Portfolio Tutorial](https://youtu.be/b5mevuD-hPI?list=PLhppommwLJT7s8fdVDlGzrZoiS8j_yr7W)
* [Useful Snippets in the Wiki](https://github.com/pyronaur/easy-photography-portfolio/wiki)

---
[![Run on Repl.it](https://repl.it/badge/github/pyronaur/easy-photography-portfolio)](https://repl.it/github/pyronaur/easy-photography-portfolio)

### Developed for Extensibility

Out of the box, Photography Portfolio is built using Masonry Layout.
Quite simply - it's the layout most easily portable to any website layout while keeping the feel of the brand.

For some, a masonry layout might not be enough, it sure isn't enough for our Photography WordPress themes, because of that, this plugin is packed with Actions and Filters. Not only in PHP but also the JavaScript side.

You can easily extend the plugin with your own custom archive and single-view layouts. Customization is easy as Photography Portfolio plugin templates are based on `get_template_part()` function, similar to the way WooCommerce plugin has a custom template function. That brings a lot of customization power to the table. Pick any part of the view, and append your own template bits or completely rewrite the templates.

The JavaScript side is also easily extensible.
You can use filters and actions based on [WP-JS-Hooks](https://github.com/carldanley/WP-JS-Hooks) to either modify the existing functionality, for example modifying the core masonry layout just a bit or completely initialize a brand new layout (like Packery or Horizontal Scroll). If you decide to build a custom view, you can utilize the existing JavaScript hook structure to let the plugin handle all the little things for you.

---

### Demos

* [Minimalist Portfolio](http://befree.pyronaur.com/) - default Photography Portfolio plugin, with the default WordPress theme.
---

## Installation

**This plugin requires at least PHP 5.4**

1. Upload "Photography Portfolio" plugin to the `/wp-content/plugins/` directory
2. Activate the plugin through the 'Plugins' menu in WordPress
3. Go to "Pages -> Add New" and create a page for your portfolio. Call it "Whatever you like" :)
4. Go to "Portfolio -> Portfolio Settings" and set "Portfolio Page" to the page you called "Whatever you like"
5. Add a few Portfolio entries in "Portfolio -> New Portfolio Entry", don't forget to set a thumbnail!
6. That's it! Enjoy your Portfolio!

