const { Schema, model } = require('mongoose');

userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        validate: { 
            validator: function(v) {
                return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(v);
            }
        }
    },
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'Thought',
    }
],},{
    toJSON: {
        virtuals: true,
    },
    id: false,
})
userSchema.virtual('friendCount').get(function(){
    return this.friends.length;
});

const User = model('user',userSchema)

module.exports = User