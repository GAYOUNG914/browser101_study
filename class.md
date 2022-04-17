# Class

Sun, Apr 17, 2022 2:45 PM
<br>
### class
<br>
템플릿과 같음
붕어빵 틀과 같음
실질적인 데이터는 포함하지 않으며, 데이터를 다루는 방법만 들어있음.
클래스로 객체를 생성할 수 있음
<br>
### object
<br>
instance of class
클래스를 이용하여 팥붕어빵, 크림 붕어빵등을 만들 수 있음

<br>
```
// 1. Class declarations

class Person {
    //constructor
    constructor(name, age){
        //fields
        this.name = name;
        this.age = age;
    }
    //methods
    speak(){
        console.log(`${this.name}:hello!`)
    }
}

const ellie = new Person('ellie', 20);
consle.log(ellie.name); // ellie
console.log(ellie.age); //20
ellie.speak(); //ellie:hello!
```
<br>
Getter 와 Setters를 이용해서 값을 리턴하고, 설정할 수 있다.
//정보를 캡슐화, 은닉

```
//2. Getter and setters

class User{
	constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    }

    get age() {
    	return this._age;
    }

    set age(value) {
    	this._age = value < 0 ? 0 : value;
    }
}
```
<br>
상속 & 다양성

```
// 3. Inheritance
// a way for one class to extend another class.
class Shape{
	constructor(width, height, color){
    	this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){
    	console.log(`drawing ${this.color} color of`)
    }

    getArea() {
    	return width * this.height;
    }
}

class Rectangle extends Shape {} //상속
class Triangle extends Shape{
    draw(){
        super.draw(); // 원래 클래스에 있던 draw 함수도 호출하고, 새로 추가되는 함수도 호출할 수 있음.
        console.log('삼각형'); //이렇게만 하면 원래 클래스의 draw 함수는 없어지고 얘만 남음. 오버라이드 되니까.
    }
    getArea() {
        return (width * this.height) / 2;
    }
}//상속과 overriding

const rectangle = new Rectangle(20,20,'blue');
const triangle = new Triangle(40,40,'red');

rectangle.draw(); //drwaing blue color of
triangle.draw(); //drawing red color of
rectangle.getArea(); //400
triangle.getArea();//800
///우왕! extends라는 키워드만 쓰면 상속이 저절로~!
```
<br>
instance Of
    object는 class로 인해 만들어진 새로운 instance 이다.

```
console.log(rectangle instance of Rectangle); //true
console.log(triangle instance of Object); //true

//instance of 키워드 좌측의 객체가 우측의 클래스로 인해 만들어진 것인지, 아닌지 boolean값을 리턴해줌
```
<br>
<br>
