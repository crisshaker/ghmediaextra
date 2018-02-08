const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { Schema } = mongoose;

const AdminModel = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: { type: String, required: true }
});

AdminModel.methods.isCorrectPassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function(err, matching) {
    if (err) return callback(err);
    return callback(null, matching);
  });
};

AdminModel.pre("save", function(next) {
  const user = this;

  bcrypt.hash(user.password, 10, function(err, hash) {
    if (err) return next(err);
    user.password = hash;

    return next();
  });
});

mongoose.model("Admin", AdminModel);
