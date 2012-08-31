that.js
=======

Advanced Node.js framework featuring Evented Evolution Engine, Seamless State
Sharing, and Plugin-optimized Operation

[![build status](https://secure.travis-ci.org/carlos8f/that.js.png)](http://travis-ci.org/carlos8f/that.js)

What is that?
-------------

That provides everything you need to build a speedy, fault-taulerant, robust
Node.js application. Once you use that, you won't want to go back to this!

### Features

- Seamless State Sharing (SSS)
- Global Application Awareness (GAA)
- Evented Evolution Engine (EEE)
- Plugin-optimized Operation (POO)
- Extremely [high performance](http://en.wikipedia.org/wiki/File:Bob-Marley-in-Concert_Zurich_05-30-80.jpg)

Installation
------------

### That for applications

To start using that, simply:

```bash
$ npm install --save that
```

And in your application:

```javascript
var that = require('that');

// require plugins down here...
// use that...
```

By requiring that, your plugins will share the Global Application Awareness (GAA).

That's it!

### That for plugins

That enables easy plugin development via POO and SSS.

If you're writing a plugin module, you don't even need to install that! In that
case, just require that to get that:

```javascript
var that = require('that');
```

That's Seamless State Sharing (SSS) will take care of the rest (you'll get the
same exact that that your application is using).

To write your plugin, just interact with that!

API
---

That's Evented Evolution Engine (EEE) is based on the well-tested Node.js core
[EventEmitter](http://nodejs.org/api/events.html#events_class_events_eventemitter).
Study that!

Example application
-------------------

An fully-functional, modular website application example is provided
[here](https://github.com/carlos8f/that.js/tree/master/examples/app).

FAQ
---

### Is that a joke?

No! See the [example](https://github.com/carlos8f/that.js/tree/master/examples/app)
if you don't believe me.

### Do I really need that?

Of course not.

### I've never seen anything quite like that.

Nor have I!

- - -

### Developed by [Terra Eclipse](http://www.terraeclipse.com)
Terra Eclipse, Inc. is a nationally recognized political technology and
strategy firm located in Aptos, CA and Washington, D.C.

- - -

### License: MIT

- Copyright (C) 2012 Carlos Rodriguez (http://s8f.org/)
- Copyright (C) 2012 Terra Eclipse, Inc. (http://www.terraeclipse.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is furnished
to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.