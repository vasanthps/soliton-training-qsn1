function completeSeries(inp){
    var s = inp.split(",");
    for(i=0;i<s.length;i++){
        if(s[i].includes("...")){
            var a = createString(s[i]);
            s.splice(i,0,a);
        }
        console.log(s[i]);
    }
    var out = s.join();
    return "out";
}

function createString(s){
    var start = parseInt(s.substr(0,s.indexOf(".")));
    var end = parseInt(s.substr(s.indexOf(".")+3));
    var out="";
    for(i=start;i<=end;i++){
        out=out+(i+",");
    }
    //console.log(out);
    return out;
}



console.log(createString("1...5"));