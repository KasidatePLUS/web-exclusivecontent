'use strict';

var pg = require('pg');
var db = 'notconn';

exports = module.exports = function(settings) {
	db = new pg.Client(settings.database.connection.string);
	db.connect(function(err, db, done) {
		if(err) {
			/*
			server.log('error', 'Database connection ' + err);
			Static.ShutdownProcedure();
			*/
			console.log(configurations);
			console.log('Database connection ' + err);
            db = 'notconn';
		}else{
			console.log('Successfully connected to database.');
		}
	});
    return db;
}

exports['@singleton'] = true;
exports['@require'] = [ 'config/settings' ];