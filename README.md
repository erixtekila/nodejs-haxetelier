nodejs-haxetelier
=================

Use node.js in conjunction with haxe
(http://www.silexlabs.org/179221/the-blog/haxetelier4-passez-en-mode-node-js-pour-un-mhaxe-de-simplicite/)



Why node ?
----------

-   While there are some interpreted language that runs inside a web server
    (think php with apache), **node.js is a webserver**

-   node.js provide an event driven model to create high performance web sites :
    the **javascript runtime exposes event callbacks**

-   A **single eventloop treats all requests**, no threads (unlike Apache...)

-   All IO is  **asynchronous**, meaning that don't block the whole server

-   **Node.js is perfect for high demand sites with low CPU usage**

-   **JSON** is a first citizen format

-   Use javascript on both sides of the wire

-   Scale well

-   Sockets and websockets



Node.js primer
--------------

### Mode Read-Evaluate-Print-Loop

Node.js can be used not only as a server, but also as a runtime environment.

In order to launch the REPL mode, one can issue from the command line :

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
node
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

It'll open an interactive shell exposing the Google's V8 javascript runtime.



Let's type some javascript atrocities...

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
undefined == null //true
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
"Why am I a " + typeof + ""; 
// "Why am I a number" (courtesy of http://www.wtfjs.com)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



Some hints :

-   .help

-   .exit



### Simple http server

Example 00-simple_http
