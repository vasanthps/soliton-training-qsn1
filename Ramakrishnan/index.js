var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World');
})
app.get('/i',function(req,res){
    var str = req.query.input;
    var prev,next;
    console.log("The input string is:"+str);
    var array = str.split(",").map(Number);
    array.forEach(function(c,i,array){
        //console.log(c,typeof(c));
        if (isNaN(c))
            {
                console.log(c.toString());
                prev=array[i-1];
                next=array[i+1];
                inserting(prev,next,array,i);
            }
        else{
        console.log(c)
        }
    })
    //console.log(output);
    res.send(array);
})

var inserting = function(p,n,a,i){
    while (p<n-1){
        a.push(++p);        
        console.log(p);
    }    
}

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})