SysYADjs
=
_YAD browser running a Node.js web application_

The proposal of this project is to demonstrate how to run a Node.js web application on Linux using [YAD (Yet Another Dialog)](https://github.com/v1cont/yad). For the frontend I'm using [jQuery](https://jquery.com/), but any JS/CSS frontend library can be used.

Couldn't I use Electron for running this app?
-
Sure. Append **about 70-100 MB of data or more** and you're good do go.

Does it run on Windows?
-
I'm not running Windows, so I didn't test it. But I think compiling YAD on Cygwin or WSL could do the trick.

Does it run on Mac?
-
[Seems not](https://github.com/v1cont/yad/issues/75).

Dependencies
-
- [Node.js](https://nodejs.org/) (obviously NPM comes included :)
- [YAD (Yet Another Dialog)](https://github.com/v1cont/yad), installed from the source code with Webkit browser enabled

TODOs (cultivation in progress...)
-
- Generate a standalone/installable/portable app (Linux distros could compile YAD with Webkit enabled :)

License
-
[MIT](LICENSE). Other software included have their own licenses.
