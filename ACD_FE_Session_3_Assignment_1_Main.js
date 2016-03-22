function Car(make,model,year){
    this.make=make;
    this.model=model;
    this.year=year;
    
}

var car1=new Car("Honda", "Corola","2001");
var car2=new Car("Mercedes", "AC200","1990");
alert("Name : " + car1.make + " Model : "+ car1.model + " Year : " + car1.year);
alert("Name : " +car2.make + " Model : "+ car2.model + " Year : " + car2.year);