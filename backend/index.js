import express from "express"; 

import cors from "cors";

import Router from "./route/routes.js"

const app = express();

app.use(express.json());

app.use (cors());

app.use(Router);

app.listen(5000, ()=>{
    console.log("server running succesfullly");
})