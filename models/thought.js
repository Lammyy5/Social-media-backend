const { Schema, model, Types } = require('mongoose'); 
const reactionSchema = require('./Reaction');

const userSchema = new Schema(
    {
      username: {
          type: String,
          required: true,
          unique: true,
          minLength: 1,
          maxLength: 280,
      },

      createdAt:{type: Date,
        default: Date.now,}
    ,

    username: {
        type: String,
        required: true,
    },
    reactions:[reactionSchema],

    toJSON: {
        getters: true,
        virtuals: true,
    },
    id: false,
}
);

thoughtSchema.virtual('reactionCount').get(function(){
return this.reactions.length;
});