'use strict';
 module.exports = function(app) {
	 var controller = require('../controllers/batatasController');

	 app.route('/batatas')
		 .get(controller.list)
		 .post(controller.create);

	  app.route('/batatas/:id')
		 .get(controller.read)
		 .put(controller.update)
		 .delete(controller.delete);
};