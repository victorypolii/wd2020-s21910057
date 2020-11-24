let saya= document.getElementsByTagName('h1')[2].innerText;
console.log(saya);

let title=document.getElementById("head2").innerText;
console.log(title);

let umur = document.getElementById("umur").value;
console.log(umur);

function klik() {
    let nilai=document.getElementById("umur").value;
    //alert(nilai)
    //console.log(nilai);
    document.getElementsByTagName('p')[1].innerText=nilai;
    document.querySelector('.head').style.color='red';
    document.querySelector('.head').style.fontSize="3rem";
}
