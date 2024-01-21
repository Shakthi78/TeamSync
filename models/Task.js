import mongoose from 'mongoose';
const { Schema } = mongoose;

const taskSchema = new Schema({
  trackingId: {
    type: String,
    required: true
  },   
  title: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  }, 
  assignee: {
    type: [String]
  },
  startDate: {
    type: String
  },
  endDate: {
    type: String
  },
  featured: {
    type: Boolean,
    default: false
  }, 
  status: {
    type: String
  }

}, { timestamps: true});

export default mongoose.model('Task', taskSchema)