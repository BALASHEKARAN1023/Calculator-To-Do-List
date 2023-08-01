function calculater(){
    var a=document.getElementById("num1").value;
    var b=document.getElementById("num2").value;
    var sym=String(document.getElementById("Oparators").value);
    var result;
    if(a=="" || b==""){
        alert("Enter the Value(s)");
    }
    else{
        a=parseInt(a);
        b=parseInt(b);
    
        switch(sym){
            case "+":
                result=a+b;
                break;
            case "-":
                    result=a-b;
                    break;
            case "*":
                    result=a*b;
                    break;
            case "/":
                    if(a!=0 && b!=0){
                        result=a/b;
                    }
                    else {
                        alert("Any one input is 0");
                    }
                    break;
             case "^":
                    result=a**b;
                    break;
                default:
                    alert("Select Any operator");
                    // break;
}
document.getElementById("result").innerHTML=result;
}
}