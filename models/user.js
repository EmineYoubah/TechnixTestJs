const mongoose = require('mongoose');
const User = mongoose.model('User', {
name: {
type: String
},
lastname: {
type: String
},
statut: {
type: String
}
})
module.exports = User;