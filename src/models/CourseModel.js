// Assuming you have a mongoose model file, e.g., CourseModel.js
import mongoose from "mongoose";

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
  courseImage: {
    type: Buffer, // Assuming you store the image as a Buffer in MongoDB
  },
});

const Course = mongoose.models.Course ||mongoose.model('Course', courseSchema);

module.exports = Course;
