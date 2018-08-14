# SFGOV Pattern Library.

This project is based off the [PHP Twig version of Pattern Lab.](http://github.com/pattern-lab/edition-php-twig-standard)

## Dependencies

- php-cli (If `php --version` returns version info, then this is already installed)
- [NodeJS](https://nodejs.org/)
- [Composer](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-osx/)

## Installation

1. `cd pattern-lab`

2. `composer install`
  
    Answer the prompts as follows:
  
    - The path ./public/ already exists. Merge or replace with the contents of pattern-lab/styleguidekit-assets-default package? `M`
    - Update the config option styleguideKitPath? `n`

3. `cd ../`

4. `php pattern-lab/core/console --generate`

5. `npm install`

## Getting Started

1. Run `gulp`. (You might need to re-install with `npm install gulp -g`)

2. `php pattern-lab/core/console --server --watch`

## Other Commands

**Generating a public instance:** `$ php pattern-lab/core/console --generate`

**Viewing a full list of commands:** `$ php pattern-lab/core/console --help`

### Documentation

- Edit the document `<head>` in `pattern-lab/source/_meta/00-head.twig`.
- Edit pattern styles and markup in `pattern-lab/source/_patterns`.
- Add or edit Markdown files to `pattern-lab/source/_patterns` to document the usage and context of each pattern.
- Add any images to `pattern-lab/source/images`.

All changes in `/source/` automatically compile to `/public`.
