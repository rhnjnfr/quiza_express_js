import express from "express"

import{ 
    showStudents,
    showStudentbyId,
    createStudent, 
    updateStudent, 
    deleteStudent
} from "../controller/student.js"

const router = express.Router();

//get all students 
router.get("/students", showStudents);
 
//get single student
router.get("/student/:id", showStudentbyId);

//create student 
router.post("/student", createStudent); 

//update student
router.put("/student/:id", updateStudent);

//dalete student 
router.delete("/student/:id", deleteStudent);

//export default route 
export default router;