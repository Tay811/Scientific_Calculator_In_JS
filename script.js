function myclick(a){
    myform.display.value+=a;
}

function eualto(){
    myform.display.value=eval(myform.display.value);
}

function ac(){
    myform.display.value="";
}

function backspace(){
    var prevalue=myform.display.value;
    myform.display.value=prevalue.substr(0,prevalue.length-1);
}

function fnsin(){
    myform.display.value=Math.sin(myform.display.value);
}

function fncos(){
    myform.display.value=Math.cos(myform.display.value);
}

function fntan(){
    myform.display.value=Math.tan(myform.display.value);
}

function square(){
    myform.display.value=Math.pow(myform.display.value,2);
}

function squarert(){
    myform.display.value=Math.sqrt(myform.display.value);
}

function deg(){
    myform.display.value=myform.display.value * (180 / Math.PI);
}

function rad(){
    myform.display.value=myform.display.value * (180 / Math.PI);
}

function fac(){
    if (myform.display.value==1) return 1;
    myform.display.value=myform.display.value*(myform.display.value-1);		
    }


// function fac(n) {
//     if(n == 0 || n == 1) {
//     	var fac = 1;
//     } else {
//     	var fac = parseInt(n);
//     	for(var i = 1; i < n; i++) {
//     		fac *= i;
//     	}
//     }
//     return fac;
// }


// function fac(y) {
//     var num=0,i=0,fac=1;// variables
//     num=y; 
//     for(i=1;i<=num;++i){//for loop from 1 to less than the x value.
//         fac=fac*i;    //logic   
//     };
//     console.log(fac); //output on console.
// }


function percent(){
    var text = document.myform.display.value
    myform.display.value = text/100
}

function exp(){
    myform.display.value=Math.exp(myform.display.value);
}

function log(){
    myform.display.value=Math.log(myform.display.value);
}
