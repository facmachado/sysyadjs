/* jshint esversion: 6 */

import copy     from 'rollup-plugin-copy';
import execute  from 'rollup-plugin-execute';
import resolve  from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import legacy   from '@rollup/plugin-legacy';

var output_file,
  arr_execute = [],
  copy_targets = [{ src: 'static/favicon.ico', dest: 'public' }];

switch (process.env.NODE_ENV) {
  case 'production':
    output_file = 'public/_temp.js';
    arr_execute = [
      'cleancss -O2 --output public/style.css static/style.css',
      'html-minifier --html5 --use-short-doctype --collapse-whitespace --remove-comments --minify-js "cm" --minify-css "O2" --output public/index.html static/index.html',
      'terser --module --comments false -cmo public/bundle.js public/_temp.js',
      'rm -f public/_temp.js'
    ];
    break;
  default:
    output_file = 'public/bundle.js';
    copy_targets = [
      { src: 'static/favicon.ico', dest: 'public' },
      { src: 'static/index.html', dest: 'public' },
      { src: 'static/style.css', dest: 'public' }
    ];
}

export default {
  input: 'lib/client.js',
  output: {
    file: output_file,
    format: 'cjs'
  },
  plugins: [
    resolve({
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }),
    commonjs({
      include: 'node_modules'
    }),
    legacy({
      'node_modules/jquery/dist/jquery.js': 'jquery'
    }),
    copy({
      targets: copy_targets,
      outputFolder: 'public'
    }),
    execute(arr_execute)
  ]
};
