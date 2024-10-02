import Project from '../models/Project.js';
   
   // Create project
   export const createProject = async (req, res) => {
     const { name, department, startDate, endDate } = req.body;
     try {
       const project = new Project({ name, department, startDate, endDate });
       await project.save();
       res.json(project);
     } catch (err) {
       console.error(err);
       res.status(500).json({ msg: 'Server error' });
     }
   };

   // List projects
   export const getProjects = async (req, res) => {
     try {
       const projects = await Project.find();
       res.json(projects);
     } catch (err) {
       console.error(err);
       res.status(500).json({ msg: 'Server error' });
     }
   };

   // Update project status
   export const updateProjectStatus = async (req, res) => {
     try {
       const project = await Project.findById(req.params.id);
       project.status = req.body.status;
       await project.save();
       res.json(project);
     } catch (err) {
       console.error(err);
       res.status(500).json({ msg: 'Server error' });
     }
   };
