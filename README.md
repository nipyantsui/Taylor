# Taylor

Taylor is running on a modification of [ng-boilerplate](http://joshdmiller.github.com/ng-boilerplate) with sass and karma-chrome

***

## Quick Start

- Install Node.js
- Install Ruby
- Open cmd
- Install Sass  by entering the command `gem install sass`
- Clone the repository to the desired directory `git clone git://github.com/nipyantsui/Taylor`
- `cd Taylor`
- `npm -g install grunt grunt-cli karma bower`
- `npm install`
- `bower install`
- `grunt watch`
- Open `/build/index.html`


### Live Reload!

`ngBoilerplate` also includes [Live Reload](http://livereload.com/), so you no
longer have to refresh your page after making changes! You need a Live Reload
browser plugin for this:

- Chrome - [Chrome Webstore](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei)
- Firefox - [Download from Live Reload](http://download.livereload.com/2.0.8/LiveReload-2.0.8.xpi)
- Safari - [Download from Live Reload](http://download.livereload.com/2.0.9/LiveReload-2.0.9.safariextz)
- Internet Explorer - Surely you jest.

Note that if you're using the Chrome version with `file://` URLs (as is the
default with `ngBoilerplate`) you need to tell Live Reload to allow it. Go to
`Menu -> Tools -> Extensions` and check the "Allow access to file URLs" box next
to the Live Reload plugin.

When you load your page, click the Live Reload icon in your toolbar and
everything should work magically. w00t!

If you'd prefer to not install a browser extension, then you must add the
following to the end of the `body` tag in `index.html`:

```html
<script src="http://localhost:35729/livereload.js"></script>
```

Boom!

