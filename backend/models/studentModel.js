import db from "../config/database.js"

//ALL UNTESTED
//retrieve all data 
export const getStudents=(result)=>{
    db.query("SELECT * FROM students", (err, results) => {
        if (err) {
          console.log(err);
          result(err, null);
        } else {
          result(null, results);
        }
      });
    };

//retrieve single data base on id
export const getStudentbyId=(id, result)=>{
    db.query("Select * from students where id= ?",
        [id],
        (err,results)=>{
            if(err){
                console.log(err);
                result(err, null);
            }else{
                result(null, results[0])
            }
        }
    )
}

//insert data to database
export const insertStudent=(data, result)=>{
    // console.log(data.firstName + " insert")
    db.query(`INSERT INTO students SET ?`, 
        [data],
        (err, results) => {
            if(err){
                if(err.code = 'ER_DUP_ENTRY'){
                   //saveStudent(true)
                   //console.log(":D")
                   result('ER_DUP_ENTRY', null);
                }
                else{
                    console.log(err);
                    result(err, null);
                }
               
            }else{
                result(null, results);
                console.log("Successfully added")
            }
    })
}


//update student
export const updateStudentById = (data, id, result)=>{
    db.query ("UPDATE students SET first_name = ?, last_name = ?, mi = ?, student_course = ? WHERE id = ?", 
    [data.first_name, data.last_name, data.mi, data.student_course, id],
    (err, results) => {
        if(err){
            console.log(err);
            result(err, null);
        }else{
            result(null, results)
        }
    })
}

//delete student 
export const deleteStudentById = (id, result)=>{
    db.query ("DELETE FROM students WHERE id = ?", 
    [id],
    (err, results) => {
        if(err){
            console.log(err);
            result(err, null);
        }else{
            result(null, results)
        }
    })
}

// import mysql from 'mysql2';
// import { promisify } from 'util'; //import promise

// const db = mysql.createConnection({
//   host: '127.0.0.1',
//   user: 'root',
//   password: '',
//   database: 'students'
// });

// const query = promisify(db.query).bind(db);

//   try {
//     const result = await query("Select * from student");
//     console.log(result);
//   } catch (err) {
//     console.error(err);
//   } finally {
//     db.end();
//   }