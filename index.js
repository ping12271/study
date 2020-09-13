// /* 
// var : 예전에 하던 방법으로 최근에는 사용하지 않는 것이 좋음 
// let : 변수의 값을 계속 바꿀 수 있음
// 예) let members = 10;
//     member++; const일 경우 불가함
// const : 재정의를 할 수 없는 변수이다. 대부분의 경우에 사용하는 것이 좋음!
// */

// //String, Number, Boolean, null, undefined
// const name = "haha shin";
// const age = "31";
// const weight = 33.3;
// const isMale = true;
// const money = null; //빈 값
// const girlfrined = undefined; //선언이 안됐다
// const hobbies = "piano,soccer,baseball"; 
// console.log(typeof girlfrined);
// console.log("제 이름은 " + name + " 입니다.");
// console.log(`제 이름은 ${name} 입니다. 나이는 ${age} 입니다.`) //백태그 사용
// console.log(name.substring(0, 1).toUpperCase());
// console.log(name.split(""))//하나씩 잘려서 배열형태가 된다.
// console.log(name.split(" "))//쉼표를 기준으로 잘려서 배열형태가 된다.
// console.log(hobbies.split(",")[2])//2번째 인덱스가 나오게 해랏


// //Array란? 여러가지 다수의 value를 가지고 있는 것
// const animals = ["lion", "bear", "monkey", 10];//스트링, 숫자 상관없이 배열로 넣을 수가 있음
// console.log(animals[0]);
// animals[3] = "dear"; //인덱스 3번째는 dear이 되어랏, const로 선언했지만 배열 추가는 가능하다
// animals.push("dear");//맨뒤에 값을 넣을 수 있다
// animals.unshift("hippo");//맨 앞에 값을 넣을 수 있다
// animals.pop();//맨 마지막 값이 빠져 나간다
// console.log(Array.isArray(animals));//배열인지 아닌지 알려준당
// console.log(animals.indexOf('bear'));//bear가 몇번째 인덱스인지 가르쳐준다.
// animals.splice(1,2);//1번 인덱스부터 2개를 삭제하라

// const bearIndex = animals.indexOf('bear');
// animals.splice(bearIndex, 2);
// console.log(animals);


// //objet란? key와 value로 이루어진다.
// const monkey = {
//     name: "ringo",
//     face: "funny",
//     age: 11,
//     food: ["banana","apple","strawberry"],
//     tail: true,
//     location: {
//         country: "congo",
//         place: "forest",
//         isAfrica: true
//     }
// }
// console.log(monkey);
// console.log(monkey.food[0]);
// console.log(monkey.location.place);
// //alert(monkey); 오브젝트를 확인하기는 어렵땅

// monkey.name = "star";
// console.log(monkey.name);
// monkey.food[1] = "peanut";
// console.log(monkey.food);
// monkey.weight = 50; //오브젝트에 weight = 50을 추가할 수도 있다.
// console.log(monkey);


// //Jason - API를 호출해서 정보를 받을때, 서버로 전송하거나 받을 때 사용한다.
// const monkeyJSON = JSON.stringify(monkey); //monkey를 jason 형태로 변환하는 메서드
// console.log(monkeyJSON);
// console.log(monkeyJSON.name); //undefined가 나온다. object로 변환하지 않았기 때문이다.
// const monkeyJSONParse = JSON.parse(monkeyJSON); // object형태로 다시 변환
// console.log(monkeyJSONParse);


//반복문 돌리기
const animals = [
    {name: 'lion', size: 'big', isAggressive: true, weight: 200},
    {name: 'monkey', size: 'medium', isAggressive: true, weight: 30},
    {name: 'cat', size: 'small', isAggressive: false, weight: 10},
    {name: 'rat', size: 'small', isAggressive: false, weight: 2},
];
//전통적인 방법
for(let i = 0; i < 4; i++){ // i를 1씩 증가하게 하되, 4에 다달하면 멈춘다.
    console.log(animals[i].name);
}

for(let i = 0; i < animals.length; i++){
    console.log(animals[i].name);
}

for(let animal of animals) { //animals(배열) 안에 들어있는 animal(아이템)이라는 의미
    console.log(animal);
}

let i = 0;
while (i < 10) { //i가 10보다 작을 동안에 실행한다.
    console.log(i);
    i++;
}

//forEach : 단순한 반복문

animals.forEach(function(animal, index){
    console.log(index);
});

//map : 어떤 배열을 다른 형태의 배열로 재생산할 때 사용하는 반복문이다.
// const animalsNames = animals.map(function(animal){
//     return animal.name; //어떤 값을 남길지 지정하는 것
// })
// console.log(animalsNames);

const animalsNames = animals.map(function(animal){
    return `Animal's name is ${animal.name} and size is ${animal.size}`;
})
console.log(animalsNames);

//filter : 배열 안에서 특정 조건을 가진 아이템만을 뽑아내는 반복문이다.
const smallAnimals = animals.filter(function(item){
    return item.size === 'small'; //item의 size가 small인 경우에만 return한다.
});
console.log(smallAnimals);

//reduce : 배열 안에 값들에 합을 구할때 사용한다.
const numbers = [1,10,11,23,444];
const total = numbers.reduce(function(acc, cur){ //acc 더해진 값,acc 현재값
    return acc + cur; // 결과적으로 total이 나옴
});
console.log(total);

const totalWeight = animals.reduce(function(acc, cur){
    return acc + cur.weight; // 값이 안나올 거임, 초기값이 필요함
},0);
console.log(totalWeight);

//조건문
// === 자료형까지 똑같은 경우이다, == 자료형이 달라도 true를 반환한다.
// const x = 10;

// if(x == "10") {
//     console.log(`x is 10`);
// };

// if(x === "10") {
//     console.log(`x is 10`);
// } else if(x === 20) {
//     console.log(`x is 20`);
// } else {
//     console.log(`x is not 10 and 20`);
// }
// //삼항 연산자
// const animal = 'cat';
// const food = animal === 'lion' ? 'meat' : 'apple';
// console.log(food);

//switch 케이스문
const animal = 'lion';
switch (animal) {
    case 'lion':
        console.log('animal in lion');
        break;
    case 'monkey':
        console.log('animal in monkey');
        break;
    default :
        console.log('animal is unknown')
    break;    
}

//funtion

// function add(a, b){ // ()에는 함수의 값들을 통과시키서 받을 수 있다.
//     return a + b; // a 인자에 10, b라는 인자에 20이 들어가서 리턴이 된다. 
// };
// const sum = add(10,20);
// console.log(sum);

//arrow function는 중괄호를 생략할 수 있고, return 생략도 가능하다.
// const add = (a, b) => {
//     return a + b;
// };
// const add = (a, b) => a + b;
// console.log(add(10, 20));

/* 객체지향 프로그래밍 
함수 () 안에 프로퍼티를 지정해준다. 프로퍼티를 오브젝트에서 사용하기 위해서는 this로 받아줘야 함.
*/

function Song(title, writer, singer, released) {
    this.title = title;
    this.writer = writer;
    this.singer = singer;
    this.released = new Date(released);
    // console.log(this);
}

//인스턴스
const song1 = new Song('lose your self','eminem','eminem', '1997-07-11');
const song2 = new Song('hater','oasis','oasis', '1999-08-11');
//new를 통해 Song을 인스턴스화 시킴, new를 빼면 this는 song 객체가 아니라, window 전체를 가르키게 된다.
console.log(song1.released.getDay());