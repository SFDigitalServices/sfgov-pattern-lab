'use strict';

/* Require the path module */
const path = require('path');

/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = module.exports = require('@frctl/fractal').create();

/* Set the title of the project */
fractal.set('project.title', 'SFGOV Pattern Library');

/* Tell Fractal where the components will live */
fractal.components.set('path', __dirname + '/components');

/* Tell Fractal where the documentation pages will live */
fractal.docs.set('path', __dirname + '/docs');

/* Tell the Fractal web preview plugin where to look for static assets. */
fractal.web.set('static.path', path.join(__dirname, '/public/dist'));

/* Add Twig adapter. */
const twigAdapter = require('@wondrousllc/fractal-twig-drupal-adapter');
const twig = twigAdapter({handlePrefix: '@components/'});

fractal.components.engine(twig);
fractal.components.set('ext', '.twig'); 