/**
 * URL connection format
 * mongodb://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database][?options]]
 *
 * In below connection URL format
 * localhost:27017 = server:port, default port is 27017, port value is optional
 * test = our database name
 *
 * See more: https://mongodb.github.io/node-mongodb-native/driver-articles/mongoclient.html
 */
var config = {
	database: {
		url: 'mongodb://kokulan97:03201997k@cluster0-shard-00-00-ln91r.mongodb.net:27017,cluster0-shard-00-01-ln91r.mongodb.net:27017,cluster0-shard-00-02-ln91r.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority'
	},
	server: {
		host: '127.0.0.1',
		port: '3000'
	}
}

module.exports = config
