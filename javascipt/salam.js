// const cavab = confirm("Eminsiniz?");

// console.log(cavab);

// if (confirm("Eminsiniz?")){

//   console.log ("Silin getsin");

// }
// else{
//   console.log("Silmeyin qalsin");
// }

// const cavab = prompt ("2 + 2 = ?");

// console.log(cavab);

// console.log(typeof cavab);

// if (cavab == "4") {
//   console.log("duzdur");

// }

// else{
//   console.log("sehvdir");
// }

// let value;
// value = window.outerHeight;

// console.log(value);


function Table(){
    let tbl = document.getElementById('tbl');
    let slc = document.getElementById('slc');
    let data ="";
    let color="";
    for(let i = 0; i<slc.value; i++){
        data +=`<tr>`;

        for( let j = 0; j<slc.value; j++){
        color = (i-j) == 0 ? "black"  : "";
        // color = (i+j) == 0 ? "black"  : "";

        if(i==j){
            color = "black";
        } else if ( i+j == slc.value ){
            color = "black";
        }else{
            color = 'white';
        }
            
        
        
            data += `<td style='background-color:${color}'> ${i}${j} </td>`;
        }
        data += `<tr/>`

        // for( let j=0; j<slc.value; j++){
        //     color = (i+j) == (i+j) ? "black" : "";
            
        // }
        
    }

    tbl.innerHTML = data;
}







// function test(){
//     let slc = document.getElementById('slc');
//     alert(slc.value);
// }