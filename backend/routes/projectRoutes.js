import express from "express";
import { createProject, getProjects, updateProjectStatus }  from "../controller/projectController.js";
const router = express.Router();
   router.post('/project', createProject);
   router.get('/projects', getProjects);
   router.put('/project/:id', updateProjectStatus);

   export default router;
