function display(data){
    document.getElementById('screen').value +=data;
    return data;
}
// function display(data){
//     document.getElementById('screen').value -=data;
//     return data;
// }
function clearScreen(){
    let screen = document.getElementById('screen');
    screen.value="";
    console.log("Clear was clicked")
}

function solve(){
    let screen = document.getElementById('screen');
    let data = screen.value;
    let result = eval(data);
    screen.value= result;
    return result;
}


// function solve(){
//     let screen = document.getElementById('screen');
//     let data = screen.value;
//     let result = eval(data);
//     screen.value= result;
//     return result;
// }
var hotel = {
    name: "Atlantic", rooms: 10, booked: 8, gym:true,pool:false, roomTypes: ['twin' , 'double', 'suite', 'presidential']
    , checkAvalsbility: function ()  {return this.rooms-this.booked;}
};

var realestate = {
    name: "Mamamia", houses: 120, taken: 50, gym:false,pool:false, sauna: false, property: ['small' , 'mini', 'huge', 'big']
    , checkAvalsbility: function ()  {return this.houses-this.taken;}
};

var house =  new Object();
house.address ="new york";
house.rooms = 5;
house.backyard = true;


function Hotel(name,rooms,booked){
    this.name = name;
    this.rooms = rooms;
    this.booked= booked;
    this.checkAvalsbility= function (){return this.rooms - this.booked};
}
var trumHotel = new Hotel('Trum Tower', 50 ,40);
var dreamHotel = new Hotel('Dream ' , 250 , 50);
var marioHotel = new Hotel("Mariot" , 250 , 100);
