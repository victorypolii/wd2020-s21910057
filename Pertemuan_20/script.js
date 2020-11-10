// let angka=20;
// let kata="Saya";
// const tglLahir="01 Agustus 2000";
// console.log(tglLahir);

// let ghost;//undefined variable
// console.log(ghost);

// let angka1=150;
// let angka2=2;
// console.log(angka1+angka2);
// let angka3=angka1-angka2;
// console.log(angka3);

// let fname="Victory";
// let lname="Polii";
// console.log("Nama saya " + fname + " " + lname+ ". Saya berasal dari Bintuni, Papua Barat.");

// let kataBaru="Satu";
// kataBaru+=" Dua";
// console.log(kataBaru);

// let x=1;
// let y=2;
// let hasil=x==y;
// console.log(hasil);
// x+=1;
// let hasil2=x==y;
// console.log(hasil2);

// let a=10;
// let b="10";
// console.log(a==b);
// console.log(a===b);

// let angka =5;
// let hasil= angka < 0 ? "Negatif" : "Positif";
// console.log(angka);

// let kondisi1=true;
// let kondisi2=false;
// console.log(kondisi2);

//PROGRAM BMI JAVASCRIPT
let massa=prompt("Masukkan Massa badan (kg) : ");
let tinggi=prompt("Masukkan Tinggi badan (cm) : ");
let tinggi2=tinggi/=100;
let bmi=massa/(tinggi2*tinggi2);
console.log(bmi);
let kategori;
if (bmi<=18.4) kategori="Kurus"
else if (bmi>18.4&&bmi<=25) kategori="Normal" 
else if (bmi>25) kategori="Gemuk" 
console.log("Kategori Anda " + kategori);