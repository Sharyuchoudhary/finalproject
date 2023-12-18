// Import mongoose
import mongoose from "mongoose";

// Define the course schema
const courseSchema = new mongoose.Schema({
  courseName: {
    type: String,
    required: true,
  },
  instructor: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageURL: {
    type: String, // Assuming the image reference is a URL or file path
    required: true,
  },
  subDescription: {
    type: String, // Add subDescription field
    required: true , // Adjust as needed based on your requirements
  },
  category: {
    type: String, // Add category field
    required: true, // Adjust as needed based on your requirements
  },
  createdat : Date ,
});

// Create the Course model
export const Course = mongoose.models.Course || mongoose.model('Course', courseSchema);


