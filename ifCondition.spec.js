var name="Maruthupandi";
var yearOfBirth=1998;
var location="Chennai";
const currentYear=2025;
let gender="Male";
for(a=yearOfBirth;a<=currentYear;a++){
 let year=a%4==0 || (a%100==0 && a%400==0);
 if(year){
    console.log(a);
 }

}       
