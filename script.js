//alert("hello")
    
function getDate(){
    var x = document.getElementById("bdate").value
    console.log(typeof x);
    console.log(x);

    year_slice(x);
    month_slice(x);
    day_slice(x);
} 

function year_slice(mainDate){
    var year= mainDate.slice(0,4)
    year= parseInt(year);
    //console.log (typeof(year));
    console.log(year);
}

function month_slice(mainDate){

    var month= mainDate.slice(5,7)
    month= parseInt(month);
    console.log(month);
}

function day_slice(mainDate){

    var day= mainDate.slice(8,10)
    day= parseInt(day);
    console.log(day);
}
