var mysql      = require('mysql');
var http       = require('http');
var table;
const express= require ("express");
const app = express();
var coeff;
var i=0;
app.get("/",(req,res)=>{
  console.log("responding to root route");
  res.send("Heelloo from ROOOOT");
})
/*app.get("/users",(req,res)=>{
  console.log("responding to root route");
  res.send("demon runnining");
})

app.listen(3000,()=>{
  console.log("server is up and listnening");
});*/
var connection = mysql.createConnection({
  host     : 'localhost',
  database : 'tp_igl',
  user     : 'root',
  password : '',
});
/*function CalculMoy(){

  });
}
CalculMoy();

app.get("/users",(req,res)=>{
  console.log("responding to root route");
  res.json(table);
 
})

app.listen(3000,()=>{
  console.log("server is up and listnening");
});*/



/*http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);
var connection = mysql.createConnection({
    host     : 'localhost',
    database : 'tp_igl',
    user     : 'root',
    password : '',
});

connection.connect(function(err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }

    console.log('Connected as id ' + connection.threadId);
});*/
var modules=[];
module[0]='notes_anum';
module[1]="notes_igl";
module[2]="notes_res";
module[3]="notes_thp";
async function notes_mod_i(i){
  const result= await connection.query("SELECT id_etud, CC, CI, TP, CF FROM "+module[i]);
  return result;
}
console.log(notes_mod_i(1));
console.log("helloo");
/*var sql1="SELECT CC, CI, TP, CF FROM modules WHERE id_module=?";

i=0;
while ( i<4)
{
  console.log(i);
  connection.query(sql1,[i+1], function (error, results2, fields){
    if (error)
    throw error;
    coeff=results2;
    console.log("2eme i");
    console.log(i);
  });
  console.log("un autre i");
  console.log(i);
  connection.query("SELECT id_etud, CC, CI, TP, CF FROM "+module[i], function (error, results1, fields) {
    if (error)
        throw error;
        
        console.log("deuxieme query");
        console.log(results1);
        results1.forEach (result => {
          var somme_coeff=coeff[0].CC+coeff[0].CI+coeff[0].TP+coeff[0].CF;
          var moy=((result.CC * coeff[0].CC+result.CI * coeff[0].CI+result.TP * coeff[0].TP+result.CF * coeff[0].CF)/(somme_coeff));
          //var j=0;
          console.log('la moyenne est');
          console.log(moy);
          console.log(i);
          console.log(module[i]);
           var mysql3 ="UPDATE "+module[i]+" SET MOY=? WHERE id_etud = ?";

          connection.query(mysql3,[moy,result.id_etud] , function (error, results) {
            if (error)
            throw error;
            console.log("inserted");
            //j++;
        }); 
        
});

  
  // query: insert moy in notes_res where id=results[0].id_etud
  // query : insert moy in moy_etud where id=resutlts........
  // qd on termine tous les etudiants et tou les modules: select from table de moy_etud et pour chaque etudiants coeff_mod*moy_mod
  //...... et inserer dans la moyenne generale
  // à la fin on fait un sort selon la moyenne



});
i++;
}
//connection.end();*/
