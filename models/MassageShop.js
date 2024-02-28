const mongoose = require('mongoose');

const MassageShopSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'Please add shop name'],
        unique: true,
        trim: true,
        maxlength: [50, 'Name cannot be longer than 50 characters']
    },

    address: {
        type: String,
        required: [true, 'Please add an address']
    },

    district: {
        type: String,
        required: [true, 'Please add a district']
    },

    province: {
        type: String,
        required: [true, 'Please add a province']
    },

    postalcode: {
        type: String,
        required: [true, 'Please add a postal code'],
        maxlength: [5, 'Postal Code cannot be longer than 5 digits']
    },

    tel: {
        type: String,
        required: [true, 'Please add telephone number']
    },

    open_time: {
        type: String,
        required: [true, 'Please add open-time']
    },

    close_time: {
        type: String,
        required: [true, 'Please add close-time']
    }
}, 
{
    toJSON: {virtuals: true},
    toObject: {virtuals: true}
});

MassageShopSchema.virtual('reservations', {
    ref: 'Reservation',
    localField: '_id',
    foreignField: 'massage_shop',
    justOne: false
});

module.exports = mongoose.model('MassageShop', MassageShopSchema);