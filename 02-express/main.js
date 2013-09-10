/**
 * Express MVC framework
 *
 * User: kogit
 * Date: 10/09/13
 * Time: 19:05
 */
var express = require( "express" )
	,app = express();

// Default route
app.get
(
	"/", function( req, res )
	{
		res.send( "Hello haxers" );
	}
).listen( 80 );

