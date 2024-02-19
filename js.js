//! **** JSON => Javascript Object Notation */
// *Bir dizi içerisinde birden fazla obje bulundurmasına denir

// * OBJE
const obj = {
    name : "john",
    surname : "adam",
    age : 22,
    gender : "M", //cinsiyet
    isAvailable : true, // çalışmaya uygunmu
}
// * JSON
const team = [
  {
    name: "sümeyra",
    surname: "yılmaz",
    job: "devoloper",
    age: 25,
  },
  {
    name: "yasemin",
    surname: "öztürk",
    job: "devoloper",
    age: 23,
  },
  {
    name: "rıdvan",
    surname: "can",
    job: "devoloper",
    age: 26,
  },
];
 console.log(team);
 console.log(team[2]);

// ?örnk : team dizisindeki job ları tek tek yazdırın

team.forEach((person) => console.log(person.job));

// ? örnk : age leri bir arttırarak YENİZ BİR DİZİYE yazdırın

const ages = team.map((personAge) => personAge + 1)

console.log(ages);

// ? örnk : name ve surname leri birleştirip büyük harfe çevirip ekrana yazdırın

team.forEach ((p) => {
    console.log(`${p.name.toUpperCase()} ${p.surname.toUpperCase()}`);
})

// ? age leri 25 den küçük esit olan kişilerin name lerini listeleyiniz

const ages = team.filter ((s) =>s.age<= 25 );
 ages.forEach((s) => console.log(s.name , s.age));

// * kısa yol
 team.filter(s => s.age <= 25).forEach((s) => console.log(s.name, s.age))

// ? örnk : 25 yasından küçük ve esit olanların isimlerini bir diziye saklayınız

const newName = team.filter((s) => s.age <= 25).map((s) => s.name);
console.log(newName);

// ?örnk: ortalama yaşı hesaplayınız

const avgAges = team.reduce((toplam, kisi) => toplam += kisi.age, 0) / team.length
console.log(avgAges);

//**** DESTRUCTURING (OBJECT)*** */ istediğimiz belirli özellikleri çıkarmak için kullanılır

const car = {
  name: "mercedes",
  model: "2014",
  engine: 1.6,
  colors: ["blue", "yellow"],
};
//*1.yöntem --CLASICC
const nameOfCar = car.name; //*nokta ile ulaşma
console.log(nameOfCar);

const modelOfCar = car["model"]; //*değişkene atayarak ulaşma
console.log(modelOfCar);

//*2.yontem --DESTRUCTURING
const { name, model, engine, colors } = car; //* değişken süslü deyip kendi değişkenimize atıyoruz
console.log(colors);

//?örnk: nested
const cars = {
  car1: {
    name: "bmw",
    model: 2022,
  },
  car2: {
    name : "volvo",
    model : 1995,
  },
};

const { car1, car2 } = cars;
const { names } = car1

//?örnk:

const newTeam = [
    {
      name: "sümeyra",
      surname: "yılmaz",
      job: "tester",
      age: 25,
    },
    {
      name: "yasemin",
      surname: "öztürk",
      job: "devoloper",
      age: 23,
    },
    {
      name: "rıdvan",
      surname: "can",
      job: "team lead",
      age: 26,
    },
  ];

//   //* clasıc
  newTeam.forEach((person) => {
console.log("****``*********");
console.log("name:" , person.name);
console.log("surname:" , person.surname);
console.log("job:" , person.job);
console.log("age:" , person.age);
});

//*destructuring
newTeam.forEach((person) => {
    const {name,surname, job, age } = person
console.log("****``*********");
console.log("name :" , name);
console.log("surname:" , surname);
console.log("job:" , job);
console.log("age:" , age);
})

//**************REST (...) *********** */

//?1-array
const autos = ["anadol", "tofas", "ferrari", "bugatti", "reno" ]

const [anadol, ...restautos] = autos; //*rest operatörü her zaman sonda yazılır yoksa hata verir

console.log(anadol);
console.log(restautos);

//?2-objects
const personel= {
    pName: "john",
    surname: "smith",
    job: "devoloper",
    age:"30",
}
const {pName, surname, ...ageAndJob} = personel;
console.log(pName);
console.log(ageAndJob);

! bir fonksiyonun argümanlarını diziye çevirmek için kullanılabilir

const sum = (x,y) => x + y ;
console.log(sum(5,10)); //*iki argüman atanmış fazla değer yazılsa yine ilk iki değerini kullanır

const sumAll = (...numbers) => {
    const sonuc = numbers.reduce(
        (toplamSonuc, eleman) => (toplamSonuc += eleman), 0
    );
    return sonuc;
    
    };
    console.log("SUM OF NUMBERS ", sumAll(1,2,3,4,5,));



//**************SPREAD (...)*********** */
//! *REST İN TAM TERSİ

//? *1.Array concanitation : iki diziyi birleştirmek için kullanılır

const flyİngVehicles = ["aircraft" , "helicopter" , "drone"]
const auto = ["truck" , "car" , "bus" , "SUV "]

const  allVechicles =  [flyİngVehicles , auto]; //* iki diziyi  yan yana yazdı ama tek dizi de birleşmedi
console.log(allVechicles);


const allVechicles1 = [...flyİngVehicles, ...auto] //*tek dizi de birleştirdi
console.log(allVechicles1);

//*string  spread
const str = "hello world"
console.log([...str]);

// ?örnk max( )
 console.log(Math.max(1, 2, 54, 5, 34, 6, 89));

const nums = [5, 54, 90, 23, 45]
console.log(...nums); //*arraydan dışarı çıkarma işlemi
console.log(Math.max(...nums)); //*sonrasında toplama işlemi çalışır

// *object copy

const myObj = {a: 1, b: 2 , c: 3, };
const herObj =  {a: 2, x: 7 , c: 2, };

const copiedObj = { ...myObj };
console.log(copiedObj);

const combinedObj = { ...myObj, ...herObj }
console.log(combinedObj);








