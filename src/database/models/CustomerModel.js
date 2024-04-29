import mongoose from 'mongoose';

const { Schema } = mongoose;

const CustomerSchema = new Schema(
  {
    name: String,
    company: String,
    email: {
      type: String,
      unique: true,
    },
    birthday: Date,
  },
  { timestamps: true }
);

const CustomerModel = mongoose.model('customers', CustomerSchema);
export default CustomerModel;
