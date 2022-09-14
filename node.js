const exp = require("express");
const mycon = require("mysql");
const cors = require("cors");
// const multer = require('multer');

const app = exp();
app.use(cors());
app.use(exp.json());
// app.use(exp.static("../client/public/images"));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencode({extended: true}));


const c = mycon.createConnection({
    host : "localhost",
    user:"root",
    password:"Sam@12345",
    database:"amazon"
});

c.connect(function(err){
    if(err){console.log(err);}
    else{console.log("Database Connected")}
})
app.post('/products',(req,res)=>{
    let productname=req.body.productname;
    let color=req.body.color;
    let ram=req.body.ram;
    let storage=req.body.storage;
    let battery=req.body.battery;
    let ramextend=req.body.ramextend;
    let additionalfeature=req.body.additionalfeature;
    let camera=req.body.camera;
    let display=req.body.display;
    let processor=req.body.processor;
    let ratting=req.body.camera;
    let price=req.body.price;
    let discountprice=req.body.discountprice;
    let offer=req.body.offer;
    c.query("insert into products(productname,color,ram,storage,battery,ramextend,additionalfeature,camera,display,processor,ratting,price,discountprice,offer)values(?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[productname,color,ram,storage,battery,ramextend,additionalfeature,
                camera,display,processor,ratting,price,discountprice,offer],(err,result)=>{
        if(err){
            let s={'status':'error'}
            res.send(s)
        }
        else{
            let s={'status':'inserted'}
            res.send(s)
        }
    })
})

app.get('/details',(req,res)=>{
    
    c.query("select*from products",(err,result)=>{    
     res.send(result);
    });
});
app.get('/details2/:id',(req,res)=>{
    const {id}=req.params;
    c.query("select*from products where id=?",[id],(err,result)=>{    
     res.send(result);
    });
});

app.post("/siginup",(req,res)=>{
    let name=req.body.name;
    let number=req.body.number;
    let email=req.body.email;
    let password=req.body.password;
    let confirmpassword=req.body.confirmpassword;

    c.query("insert into siginup(name,number,email,password,confirmpassword)values(?,?,?,?,?)",[name,number,email,password,confirmpassword],(err,result)=>{
        if (err){
            let s={'data':'not inseted'}
            // res.send(s);
            console.log(s);
        }
        else{
            let s={'status':'inserted'}
            res.send(s);
        }

    })
})

app.post("/sigin",(req,res)=>{
    let email2=req.body.email;
    let password2=req.body.password;
    c.query("select * from siginup where email=?",[email2],(error,rows)=>{
        if(error){
            let s={'invalid':'login'}
            res.send(s);
        }
        else{
         let password1=rows[0].password;
         let email1=rows[0].email;
         if(email1==email2 && password1==password2){
            let s={'status':'correct'};
            res.send(s);
         }
        //  else if(password1==password2){
        //     let s={'status':'error1'};
        //     res.send(s);
        //  }
         else{
            let s={'status':'error'};
            res.send(s);
         }
        }
    })
})
//   var stoage = multer.diskStorage({
//         destination: (req, file, callBack) => {
//             callBack(null, '../client/public/images/')     // './public/images/' directory name where save the file
//         },
//         filename: (req, file, callBack) => {
//             callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
//         }
//     })
//     var upload=multer({
//         storage:storage
//     });

app.listen(3006);
