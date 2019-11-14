# buy-nsw-front

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd buy-nsw-front`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200/ict](http://localhost:4200/ict/).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Running alongside Rails api

* `ember serve`
* `rails server` # Run this command inside buy-nsw directory
* `cp nginx.conf /etc/nginx/`
* `sudo service nginx restart`
* Visit your app at [http://localhost/ict/](http://localhost/ict/)

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Serve the build on nginx

* After building copy the content of dist directory to nginx root (/var/www/html/)
* Create a soft link in nginx root as follow: `ln -s /var/www/html /var/www/html/ict` (you might need sudo for this step)
* Configure nginx to serve index.html for all routes and serve other mimetypes:
```
  server {
    root /var/www/html;
    index index.html;
    server_name buy-nsw-front;
    location / {
      include /etc/nginx/mime.types;
      try_files $uri $uri/ /index.html;
    }
  }
```

### Deployment
* Create three files for each env as in .env.sample, named like .env.deploy.env-name
* `ember deploy env-name --verbose --activate=true`

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
