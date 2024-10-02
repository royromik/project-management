import mongoose from "mongoose";
const projectSchema = new mongoose.Schema({
  name: String,
  department: String,
  status: { type: String, default: 'Registered' },
  startDate: Date,
  endDate: Date
});
const Project = mongoose.model("Project",projectSchema);
export default Project;
