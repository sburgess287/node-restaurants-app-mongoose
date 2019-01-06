'use strict';
exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://new-user-one:Lemur73!@ds041678.mlab.com:41678/node-restaurants-app-mongoose';
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'mongodb://localhost/test-restaurants-app';
exports.PORT = process.env.PORT || 8080;