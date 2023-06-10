function Hotel(name,rooms,booked, picture){
    this.name = name;
    
    this.rooms = rooms;
    this.booked = booked;
    this.picture = picture;
    this.checkAvalsbility = 
       function ()
       {
         return this.rooms - this.booked
       };
}
