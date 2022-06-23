
class Car {
    // car class
    constructor(carModel,carPrice){
        this.carModel=carModel;
        this.carPrice=carPrice;
    }

    toString(){
        return "Model: "+this.carModel+", Price: "+this.carPrice+"\n";
    }
}
class Feature{
    // feature class
    constructor(fName,fPrice){
        this.fName=fName;
        this.fPrice=fPrice;
    } 
    toString(){
        return "Feature Name: "+this.fName+", Feature Price: "+this.fPrice;
    }
}

class Player{
    // creates static instance variables for the array to be modified throughout the classes easily, 
    static carsArr = [];
    static featuresArr = [];


    // asks player what car to make
    static createList(){ 
        // creates variables
        let mName = prompt("Enter Model Name");
        let mPrice = parseInt(prompt("Enter Model Price"));
        let fName = prompt("Enter Features");
        let fPrice = parseInt(prompt("Enter Price"));
        // creates the objects and stores them in an array
        this.carsArr.push(new Car(mName,mPrice));
        this.featuresArr.push(new Feature(fName,fPrice));
        // displays the new cars
        Menu.displayCars();
    }


    // deletes a car
    static deleteCar(index){
        // deletes the car of element, if it isn't invalid, it will print invalid
        index-=1;
        if(index<=this.carsArr.length &&
            index<=this.featuresArr.length && index >=0){
            this.carsArr.splice(index,1);
            this.featuresArr.splice(index,1);
        } else {
            alert("Invalid Number!");
        }
    }
    
}

class Menu{
    // A way to check users input by using one method 
    // An int was assigned to 'n' for re-usability 
    static userInput(n){
        switch(n){
            case 1:
                Player.createList();
                break;
            case 2:
                Player.deleteCar(parseInt(prompt("Which car num?")));
                break;
            case 3:
                this.displayCars();
                break;
        }
    }


    // DISPLAYS INFORMATION
    static displayCars(){
        alert(Player.carsArr.map(e => e.toString()+"\n").join('').toString()
        + " "+Player.featuresArr.map(i=>i.toString()+"\n").join('').toString());
    }
}
