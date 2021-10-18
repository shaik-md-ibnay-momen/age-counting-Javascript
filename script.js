//alert("hello")
    
var mYear, mMonth, mDay, year, month, day, dd, mm, yyyy;

function getDate(){
    var x = document.getElementById("bdate").value
    console.log(typeof x);
    console.log(x);

    year_slice(x);
    month_slice(x);
    day_slice(x);
} 

function year_slice(mainDate){
    year= mainDate.slice(0,4)
    year= parseInt(year);
    //console.log (typeof(year));
    console.log(year);
}

function month_slice(mainDate){

    month= mainDate.slice(5,7)
    month= parseInt(month);
    console.log(month);
}

function day_slice(mainDate){

    day= mainDate.slice(8,10)
    day= parseInt(day);
    console.log(day);

    today_date();
}

function today_date(){

    var today = new Date();
    dd = String(today.getDate()).padStart(2, '0');
    mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    yyyy = today.getFullYear();
    calculation();
}

function calculation(){
    mYear= (yyyy-year)-1;
    mMonth = (mm-1)+(month-1);
    mDay = dd+day;
    var totalDay= (mYear*365)+ (mMonth*30)+ mDay;
    console.log(today_date)
}
