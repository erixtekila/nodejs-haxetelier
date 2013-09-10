/**
 * Express MVC framework
 *
 * User: kogit
 * Date: 10/09/13
 * Time: 19:05
 */
var express = require( "express" )
		,app = express();

var haxers =
	[
		{
			name	: "Eric Priou"
			,pseudo : "erixtekila"
		}

	];

// Default route
app.get
(
	"/", function( req, res )
	{
		res.render( 'index.jade', { pageTitle: 'Welcome haxers', layout: false } );
	}
).listen( 80 );

// subscribe route
app.post
(
	'/subscribe'
	,express.bodyParser()
	,function( req, res )
	{
		if( req.body && typeof req.body == "object" )
		{
			haxers.push( req.body.person );
			res.send
			(
					{
						status:"ok"
						,message:"Welcome new haxer"
					}
			);
		} else
		{
			//no tweet?
			res.send
			(
					{
						status:"ko"
						,message:"No haxer received"
					}
			);
		}
	}
);

// haxers route
app.get
(
	'/haxers', function( req, res )
	{
		res.send( haxers );
	}
);
