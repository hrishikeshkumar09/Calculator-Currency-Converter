const result=document.getElementById('res');
const buttons=document.querySelectorAll('.btn');
var tempRes="";

for(var i of buttons){
    i.addEventListener("click",function(e){
        try{
            var x=e.target.innerText;
            if(x==='x')
            {
                tempRes+="*";
                result.value=tempRes;
            }
            else if(x==='%')
            {
                tempRes+="/";
                result.value=tempRes;
            }
            else if(x==='Del')
            {
                tempRes=tempRes.slice(0,tempRes.length-1);
                result.value=tempRes;
            }
            else if(x==='Clear'){
                tempRes="";
                result.value=tempRes;
            }
            else if(x==='='){
                result.value=eval(tempRes).toString();
                tempRes=result.value;
            }
            else{
                tempRes+=x;
                result.value=tempRes;
            }
        }catch(ex){
            result.value="Error";
        }
    })
}

function sin(){
    try{
        if(parseFloat(tempRes)!=tempRes)
            tempRes=eval(tempRes).toString();
            console.log(tempRes);
        result.value=Math.sin(tempRes).toString();
        tempRes=result.value;
    }catch(ex){
        result.value="Error";
    }
}

function cos(){
    try{
        if(parseFloat(tempRes)!=tempRes)
            tempRes=eval(tempRes).toString();
            console.log(tempRes);
        result.value=Math.cos(tempRes).toString();
        tempRes=result.value;
    }catch(ex){
        result.value="Error";
    }
}

function tan(){
    try{
        if(parseFloat(tempRes)!=tempRes)
            tempRes=eval(tempRes).toString();
            console.log(tempRes);
        result.value=Math.tan(tempRes).toString();
        tempRes=result.value;
    }catch(e){
        result.value="Error";
    }
}

function ln(){
    try{
        if(parseFloat(tempRes)!=tempRes)
            tempRes=eval(tempRes).toString();
            console.log(tempRes);
        result.value=Math.log(tempRes).toString();
        tempRes=result.value;
    }catch(ex){
        result.value="Error";
    }
}

function log(){
    try{
        if(parseFloat(tempRes)!=tempRes)
            tempRes=eval(tempRes).toString();
            console.log(tempRes);
        result.value=Math.log10(tempRes).toString();
        tempRes=result.value;
    }catch(ex){
        result.value="Error";
    }
}

function disable(){
    document.onkeydown=function(){
        return false;
    }
}