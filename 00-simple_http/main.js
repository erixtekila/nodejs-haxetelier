/**
 * Launch a simppel HTTP Server
 *
 * User: Eric Priou erixtekila
 * Date: 08/09/13
 * Time: 18:59
 */
var http = require( "http" );
http.createServer
(
	function( req, res )
	{
		res.writeHead( 200, { "Content-Type" : "text/plain" } );
		res.end( "Welcome to our haxetelier first example" );
	}
).listen( 8080, "127.0.0.1" );

console.log( "haxetelier node.js first example is running" );
