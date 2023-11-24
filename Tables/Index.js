 function abc(){
   let table=document.querySelector("#tb1").value;
   let result=" ";
   for(let i=1;i<=10;i++)
   {
      result=result+(`${table} X ${i} = ${table*i}`);
   }
   document.querySelector("#res").innerHTML = result;
 }