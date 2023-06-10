class Restaurant {
    constructor(name,rating, numEmployees,menu ){
        this.name = name;
        this.rating = rating;
        this.menu = menu;
        this.numEmployees = numEmployees;

    }
    get name(){
        return this.name;
    }
    
    hireWaitress(){
        this.numEmployees++;
    }

    fireEmployee(){
        this.numEmployees--;
    }

}