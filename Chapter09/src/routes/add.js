var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var addTicketSchema = new Schema({
	user: String,
	email: String,
	issuetype : String,
	department : String,
	ticketstate : String,
	comments : String,
	createddate : Date
}, {
      collection: 'addticket'
    });

module.exports = mongoose.model('insert', addTicketSchema);
