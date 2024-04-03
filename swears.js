function filter(text){
    var temptext=text.replace("0","o").replace("@","o").replace("1","i");
    temptext=temptext.toLowerCase();
    temptext.repalce(" ","");
    for (var i=0;i<swears.length();i++){
        var replacewith="";
        for (var y=0;y<swears[i].length();y++){
            replacewith=replacewith+"*";
        }
        temptext=temptext.replace(swears[i],replacewith);
    }
}
