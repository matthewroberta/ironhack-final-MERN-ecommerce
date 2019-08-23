const mongoose = require("mongoose");

// hash password
const crypto = require("crypto");

// unix strings
const uuidv1 = require("uuid/v1");

// new userSchema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: 32
    },
    hashed_password: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      trim: true,
    },
    salt: String,
    role: {
      type: Number,
      default: 0,
    },
    history: {
      type: Array,
      default: [],
    }
  }, 
  {timestamps: true}
);

// virtual field - send pw from client side encrypted
userSchema
  .virtual("password")
  .set(function(password) {
    this._password = password;
    this.salt = uuidv1();
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function() {
    return this._password;
  });

// create method to add to user schema and hex pw
userSchema.methods = {
  encryptPassword: function(password) {
    if (!password) return "";
    try {
        return crypto
            .createHmac("sha1", this.salt)
            .update(password)
            .digest("hex");
    } catch (err) {
        return "";
    }
  }
};

// create User model we can use anywhere later in our controller to create new users, update users, etc...
module.exports = mongoose.model("User", userSchema);