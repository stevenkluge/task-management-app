var mongoose = require('mongoose');
var fs = require('fs');
const config = require('../config');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
    {
        display_name: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 30,
            trim: true
        },
        tasks: {
            type: [Schema.Types.ObjectId],
            ref: 'Task'
        },
        lastLogin: {type: Date},
        friends: {
           type: [Schema.Types.ObjectId],
           ref: 'User' 
        },
        points: {
            type: Number,
            required: true,
            min: 0
        }
    }
);

// assemble url that points to user's profile picture, or point to the placeholder image url if file doesnt exist
UserSchema.virtual('profile_picture').get(function() {
    const image_path = config.paths.user_pfp_dir
    fs.access(image_path, fs.OK, function(err) {
        if (err) {
            return config.placeholders.pfp_placeholder;
        } else {
            return image_path + this._id;
        }
    });
});