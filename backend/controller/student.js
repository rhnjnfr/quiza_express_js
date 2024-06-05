//import funcstions from models 
import {
    getStudents,
    getStudentbyId,
    insertStudent,
    updateStudentById,
    deleteStudentById,
} from "../models/studentModel.js"

//retrieves all students
export const showStudents=(req, res) => {
    getStudents((err, results)=>{
        if(err){
            res.send(err);
        }
        else{
            res.json(results) 
        }
    })
}

//get single student info
export const showStudentbyId=(req, res) => {
    getStudentbyId(req.params.id, (err, results) => {
        if(err){
            res.send(err);
        }else{
            res.json(results);
        }
    })
}

//create new student 
export const createStudent=(req, res) => {
    // console.log("req body", req.body) //loggin
    const data = req.body;
    insertStudent(data, (err, results)=>{
        if(err){
            if(err === 'ER_DUP_ENTRY'){
                res.status(409).send({ error: 'ER_DUP_ENTRY' });
                res.send('ER_DUP_ENTRY')
            }
            else{
                res.send(err);
            }
        }else{
            res.json(results);
        }
    })
}

//update student by id
export const updateStudent=(req, res) => {
    const data = req.body;
    const id = req.params.id
    updateStudentById(data, id, (err, results)=>{
        if(err){
            res.send("here" + err);
        }else{
            res.json(results);
        }
    })
}


// delete student by id
export const deleteStudent = (req, res) => {
    const id = req.params.id;
    deleteStudentById(id, (err, results) => {
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send(`Student with id ${id} deleted successfully`);
        }
    })
}