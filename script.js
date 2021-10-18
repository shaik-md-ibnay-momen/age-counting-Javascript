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
}

function month_slice(mainDate){

    month= mainDate.slice(5,7)
    month= parseInt(month);
}

function day_slice(mainDate){

    day= mainDate.slice(8,10)
    day= parseInt(day);

    today_date();
}

function today_date(){
    var today = new Date();
    dd = String(today.getDate()).padStart(2, '0');
    mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    yyyy = today.getFullYear();
    dd= parseInt(dd);
    calculation();
}

function calculation(){
    mYear= (yyyy-year)-1;
    mMonth = (mm-1)+(12-month);
    mDay = dd+(30-day);
    console.log(mYear*365 + 2);
    console.log(typeof mYear);
    console.log(typeof mMonth);
    console.log(typeof day);
    var totalDay= ((mYear*365)+ (mMonth*30)+ mDay);
    console.log(typeof totalDay);
    console.log(totalDay);
    showResult(totalDay);
}

function showResult(num1)
{
    var mainResult= document.createElement('mainResult');
    var answer= document.createTextNode('You are ' + num1 + 'days old.');
    mainResult.setAttribute('id', 'mainResult');
    mainResult.appendChild(answer);
    document.getElementById('result').appendChild(mainResult);
}

function reset(){
    document.getElementById('mainResult').remove();
}