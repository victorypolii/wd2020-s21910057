//Mendeklarasikan Array
let angkaGanjil=[1,3,5,7,9];
let angkaGenap=[2,4,6,8];
let nama=['hatory','hachiman','kiritod'];
let campuran=['satu',2,3,'empat'];
let buah=new Array('apel','banana','ceri','durian');
let angkaArray=new Array(1,2,3,4,5);
let kosong=[];

//menghitung jumlah index array
console.log("Jumlah index " + angkaGanjil.length);
console.log("Jumlah buah "+ buah.length);
console.log("Jumlah index " + kosong);

//mengakses element/data pada array
console.log("menampilkan nama "+ nama[1]);

let countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp;Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
//menampilkan bagian terakhir
console.log(countries[countries.length-1])
//menampilkan seluruh elemen dalam array
console.log(campuran)
console.log(nama)
console.log(angkaGenap)

//menampilakn seluruh elemen dalam array menggunakan for
// for (let index = 0; index < countries.length; index++) {
//     const element = countries[index];  
//     console.log(countries[index]);
// }

// mengubah elemen dalam array
console.log(angkaGanjil);//sebelum
angkaGanjil[0]=9;
console.log(angkaGanjil);//sesudah
console.log(buah);//sebelum
buah[1]='semangka';
console.log(buah);//sesudah\
//menambah elemen
angkaGanjil[5]=11;
console.log(angkaGanjil);//sesudah

//ARRAY METHOD
//mengubah element array menjadi string
let string1=['saya',1,2,'ini','adalah',3,'string'];
console.log(string1.toString());
//mengubah elemen array dengan join()
console.log(string1.join());//koma
console.log(string1.join(" "));//spasi
console.log(string1.join("#"));//tagar
console.log(string1.join('...'));//titik

//menambah dan mengeluarkan  element array
//pop
console.log(string1.pop());//hanya menampilkan bagian akhir stela itu elemennya menghilang
console.log(string1);
string1.pop();//untuk menghilangkan bagian akhir tanpa menampilkan
console.log(string1);
//push
console.log(string1.push());//menampilkan jumlah data
string1.push("ditambahkan");
console.log(string1);
//shift
console.log(string1.shift());//menampilakn data pertama, setelah ituu data hilang
console.log(string1);
string1.shift();//langsung menghilangkan element pertama
console.log(string1);
//unshift
console.log(string1.unshift());//menampilkan jumlah data
string1.unshift("saya");//menambah element di awal
console.log(string1);

//splice()
let baru=['satu','dua','tiga','mpat','lima'];
baru.splice(2,0,'nol');
console.log(baru);
//2 mewakili index yang akan di isi
//0 jumlah elemen selanjutnya(arah ->kanan yang akan di hapus atau dihilangkan)
//nol adalah data yang akan diisikan
baru.splice(1,2,'zero');
console.log(baru);
//zero akan mengisi index 1, dan dua element yaitu index 1 dan 2 akan dihapus

//concat()
let satu=['one','two','three'];
let dua=['four','five','six'];
let tiga=['seven','eight','nine'];
console.log(satu.concat(dua,tiga));//langsung
let empat=satu.concat(dua,tiga);//buatvariable baru
console.log(empat);

//slice()
let slice1 =['saya','kamu','dia','kita','mereka'];
let slice2=slice1.slice(3);//menambahkan ke array slice dua dari index 2 sampai akhir
console.log(slice2);
let slice3=slice1.slice(0,3);//menambahkan ke array slice dua dari index 0 sampai 2
console.log(slice3);

//sort()
let nama1=['subaru','yui','hachiman','amai','zetsu'];
let number1=[34,637,70,12,51,75,8,9,4];
let number2=[2,12,55,7,23,6,45,15];
number1.sort();//nama diurut berdasarkan angka pertama
nama1.sort();//nama diurut berdasarkan abjad
console.log(nama1);
console.log(number1);
//mengatasi urutan angka
let dariKecil=function (a,b) {
    return a-b;
};
let dariBesar=function(a,b){
    return b-a;
};
console.log(number1.sort(dariBesar));
console.log(number1.sort(dariKecil));
console.log(number2);//sebelum
number2.sort(dariKecil);
console.log(number2);//sesudah

//reverse()
let reverse1=['satu','dua','tiga','empat','lima'];
let reverse2=['one','two','three','four','five'];
reverse1.reverse();
console.log(reverse1);
//mengurutkan dari besar ke kecil
reverse2.sort().reverse();
console.log(reverse2);