import express from "express"
import cors from "cors"
import mysql from "mysql"

const app= express();
const PORT= 5000;
app.use(cors());
app.get("/getData", (req,res) =>{
    res.send("YOHANNA");
})
const DB = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'',
    database:'tareas'
});
DB.connect((err)=>{
    if(err){
        throw err;
    }
    console.log("Conexion exitosa");
});

app.get('/api/tareas', (req,res)=>{
    const SQL= 'select * from tareas'
    DB.query(SQL , (err,result)=>{
        if(err){
            throw err
        }
        res.json(result)
    })
})
app.listen(PORT, ()=> console.log(`app is running. Listening on port ${PORT}`))