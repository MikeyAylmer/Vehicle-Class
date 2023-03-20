

// below are examples of constructor functions.
function Triangle(a,b){
    this.a = a;
    this.b = b;
    this.getArea = function () {
        return this.a * this.b / 2;
    };
    this.getHypotenuse = function(){
        return Math.sqrt(this.a ** 2 + this.b ** 2);
    };
}

// since this is a function you cant just call it with Triangle(), you must use the syntax new and save it to a variable const.
// so to run the above function in the console you must const triangle1 = new Triangle(3,4), and then look at triangle1.
// how the new syntax works is it creates a new blank object {} for us, then the object is filled with what this is refrence to
// so {a: a, b: b} then it adds the methods like getArea(){a * b / 2}, and getHypotenuse(){ Math.sqrt(a ** 2 + b ** 2)};
// then it returns.

// below is example of the top triangle functions created using prototype.
function Triangle(a,b){
    this.a = a;
    this.b = b;}
    Triangle.prototype.getArea = function () {
        return this.a * this.b / 2;
    };
    Triangle.prototype.getHypotenuse = function(){
        return Math.sqrt(this.a ** 2 + this.b ** 2);
    };
// so now we are defining these on a single special object called triangle.prototype, and everytime we make a
// new triangle that object will not only have a and b set up, but it will aslso know that is prototype triangle.

Triangle(5, 7);// return undefined
// using the new operator:
const tri1 = new Triangle(3,4);
tri1.getHypotenuse(); // 5
const tri2 = new Triangle(9, 12);
tri2.getArea(); // 15

// above is kinda annoying to have our data seperate from our functionality, using a class which we will 
// show next we can group our methods together with our values in one class and we dont need refrence prototype.

class TriBangle {
    constructor(a, b, c){
        // for loop is to loop over (a,b,c) without making it super long.
        for(let side of [a,b,c]){
        if(!Number.isFinite(side) || side <= 0){
            throw new Error('Invalid Number');// we use throw new Error() instead of return with constructor method. 
        }
    }
        this.a = a;
        this.b = b;
        this.c = c;
    }
    greet(){
        console.log('hello from triangle!');
    }
    display(){
        return `triangle with the sides of ${this.a} and ${this.b} and ${this.c}`;
 // so in this class when we refrence this its not referencing this class but the instance of firstTri or secondTri
    };
    getArea(){
        const {a,b,c} = this;
        const s = (a + b + c) / 2;
        return Math.sqrt(s * (s - a) * (s - b) * (s - c));
    };
    isBig(){
        return this.getArea() > 50;
    }
}

// const firstTri = new TriBangle();
// firstTri.a = 3;
// firstTri.b = 4;
// const secondTri = new TriBangle();
// secondTri.a = 9;
// secondTri.b = 12;
// here we are manually adding in those properties to our triangle objects.
// next is a better way of passing values in when we instantiate a new triangle
// Constructor - the constructor method allows us to put the values at the top of our class above our methods,
// it does have to be named constructor

// const t1 = new TriBangle(3, 4, 5);
// const t2 = new TriBangle(30, 40, 50)

class RightTriangle extends TriBangle { // extend allows us to use the code from the TriBangle class.
    constructor(a, b, c){
        if(a * a + b * b !== c * c){
            throw new Error ('Invalid C side for right triangle')
        };
       super(a, b, c);// super is going to call the constructor, so in this case super calls the TriBangle constructor
    }// ^^ we have to pass (a, b, c) otherwise the code will not run without any parameters
    display(){
        return 'Right ' + super.display();// super refrences the triangle display() method and then we use the + to add in 'right'
        // console.log(`Right Triangle with side of ${this.a}, ${this.b} and ${this.c}`)
    }
}