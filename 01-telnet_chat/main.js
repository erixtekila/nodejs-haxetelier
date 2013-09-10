/**
 * Use telnet to chat to node.js sockets : how cool !
 *
 * User: kogit
 * Date: 10/09/13
 * Time: 18:08
 */
var net = require( 'net' );
var server = net.createServer()
	,clients = [];

// Catch new connections
server.on
(
	"connection", function( client )
	{
		clients.push( client );
		client.write( "Welcome new haxer !" )

		// Register incoming data
		client.on
		(
			"data", function( data )
			{
				clients.forEach
				(
					function( c )
					{
						// Filter message output
						if( client !== c )
						{
							c.write( "haxer "+ client.remoteAddress +":"+ client.remotePort +" says "+ data );
						}
					}
				);
			}
		)
	}
);

// server socket configuration
server.listen( 1234 );