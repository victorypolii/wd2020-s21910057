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
// let massa=prompt("Masukkan Massa badan (kg) : ");
// let tinggi=prompt("Masukkan Tinggi badan (cm) : ");
// tinggi/=100;
// let bmi=massa/(tinggi*tinggi);
// console.log("BMI anda adalah "+bmi.toFixed(2));
// let kategori=bmi>25? "GEMUK": bmi<=18?"KURUS":"NORMAL";
// console.log("Kategori Anda " + kategori);

//PROGRAM BMI JAVACRIPT WITH FUNCTION
let massa,tinggi,bmi,kategori,roc;//roc=risk of comorbidities
function bmiCalculate() {
    massa=prompt("Masukkan Massa badan (kg) : ");
    tinggi=prompt("Masukkan Tinggi badan (cm) : ");
    tinggi/=100;
    bmi=massa/(tinggi*tinggi);
    if (bmi<18.5) {
        kategori="Underweight";
        roc="Low";
    }else if (bmi>=18.5&&bmi<25) {
        kategori="Normal renge";
        roc="Average";
    } else if (bmi>=25&&bmi<30) {
        kategori="Overweight";
        roc="Mildly increased";
    } else if (bmi>=30&&bmi<35) {
        kategori="Obese Class I";
        roc="Moderate";
    } else if (bmi>=35&&bmi<40) {
        kategori="Obese Class II";
        roc="Severe";
    } else if (bmi>=40) {
        kategori="Obese Class III";
        roc="Very Severe";
    }  
    console.log("Weight : "+massa+" kg");
    console.log("Height : "+tinggi+" m2");
    console.log("BMI : "+bmi.toFixed(1)+" kg/m2");
    console.log("Classification : "+kategori);
    console.log("Risk of Comorbidities : "+roc);
}
bmiCalculate()