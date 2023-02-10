//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 1:  I OBJECT!
//declared an object variables
var meObject ={
    //properties of object
    name: "Michael Momo",
    hobbies: ["coding", "playing Guitar"],
    country: "Spain",
    age: "25",

    //method 
intro: function(){
    var insertText = meObject.hobbies.join(" and ");
    var outpout = "My name is " + meObject.name +
      "  I am  " + meObject.age +
       " years old, " + " I am from  " 
       + meObject.country +  "  my hobbies are  "
        + insertText;
        alert(outpout); 
}
}

// var outpout = "My name is " + meObject.name +  "  I am  " + meObject.age + " years old, " + " I am from  " + meObject.country +  "  my hobbies are  " + meObject.hobbies;
//output one property of the object
 
console.log(meObject.name);
// alert(outpout);


//call the object method
meObject.intro();