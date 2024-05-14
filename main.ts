// Q 2 .Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

/*let personName: string = "Eric ";
console.log(`Hello ${personName}, would you like to learn some Python today?`);



 // q 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.


let person_name: string = "Reena khan";
//in lowercase

console.log("lowercase:",person_name.toLowerCase())

//in uppercase
console.log("uppercase:",person_name.toUpperCase())

//in titlecase
console.log( "titlecase :" + person_name.charAt(0).toUpperCase() + person_name.slice(1).toLowerCase());



// q4 .Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:

//Famous Quotes

console.log('adolf hitler once said, "if u want to shine like a sun you have to burn like it."')

                        //////////


//  Q5 . Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

let famous_person : string = "adolf hitler ";

let message : string = "if u want to shine lika a sun you have to burn like it.";

console.log(`${famous_person} once said, "${message}"`)

                       //////////////




//  Q6 - Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

//let personName:string= "Reena\tkhan";
//let personName1:string= "Reena\nkhan";
//console.log(personName)
//console.log(personName1)

                     /////////////////


// Q7 - Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

//let a: number= 10;
//let b: number= 5;

//console.log(a + b)

//console.log(a - b)

//console.log(a * b)

//console.log(a / b)
    
                        ///////////////////

// Q8 - You should create four lines that look like this:

//console.log(5 + 3)

//Your output should simply be four lines with the number 8 appearing once on each line.

// 8
//console.log(5 + 3);
//console.log(10 - 2);
//console.log(4 * 2);
//console.log(16 / 2);

                       /////////////////

// Q9 -Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

//let  num:number = 9;
//console.log(`My favorite number is ${num}`);

                      ////////////////

 // Q10 -Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

// addition program

//let a:number= 10;
//let b: number= 30;
//console.log(`${a}+${b} ${a+b}`);

// substraction program 
//console.log(`${a}+${b} ${a/b}`);

                       ///////////////////

 // Q 11 -Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list,one at a time.

//let  names: string[]= ["areesha", "areeba", "umaima", "saba", "sana"];

//console.log(names[0]);
//console.log(names[1]);
//console.log(names[2]);
//console.log(names[3]);
//console.log(names[4]);
                      
                        ////////////////

  //Q 12 - Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

  //let message:string = "is a student of the IT CLASS at the governor house in sindh.";
  //console.log(names[0] + " "+ message);
  //console.log(names[1] + " "+ message);
  //console.log(names[2] + " "+ message);
  //console.log(names[3] + " "+ message);
  //console.log(names[4] + " "+ message);

                         ////////////////

// Q 13 - Your Own Array: Think of your favorite mode of transportation, such as motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

//let vhicles:string[]= ["car", "bike", "bus", "scooty", "train"];
//vhicles.map( (item)=>console.log(`I would like to own a ${item}.`)
//);

                        //////////////////////

   // Q 14 -Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

   //let guestarr: string[] = ["Ali", "hussain", "benish", "tabish"];
   //guestarr.map( (item)=>console.log(`dear ${item},I would like to invite you to dinner.`)
   //);

                          //////////////

   // Q 15 - Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
   

//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

//• Print a second set of invitation messages, one for each person who is still in your list.

//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner. 
//console.log(guestarr);         

 //let canNotattend:string = "tabish";
 //console.log(canNotattend + "" + " is not make it, for dinner");

 //let newGuest:string = "sunny";

 //guestarr[guestarr.indexOf(canNotattend)] = newGuest;

 //console.log(guestarr);
 //guestarr.map( (item)=>
   //console.log(`dear ${item},I would like to invite you to dinner.`)
 //);

                   //////////////
   
// q 16 - More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

//• Add one new guest to the beginning of your array.

//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.


/*let guestarr: string[] = ["Ali", "hussain", "benish", "tabish",];
let canNotattend:string = "tabish";
let newGuest:string = "sunny";

guestarr[guestarr.indexOf(canNotattend)] = newGuest;
//console.log(guestarr);
guestarr.map( (item)=>
  console.log(`dear ${item},I found a biger dinner table.`)
);

let guestbegin: string = "imran khan";

guestarr.unshift(guestbegin)
//console.log(guestarr);

let middleGuest:string = "muhammad ali";
let middleIndex = guestarr.length/2
guestarr.splice(middleIndex,0,middleGuest);
//console.log(guestarr);

 guestarr.push("ayesha");
 console.log(guestarr);guestarr.map( (item)=>
  console.log(`dear ${item},I would like to invite you to dinner.`)
);
*/

                         //////////////

// Q 17 -   Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

//• Print a message to each of the two people still on your list, letting them know they’re still invited.

//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your progra

/*console.log("i can invited only two people");
while(guestarr.length > 2) {
  let removedGuest = guestarr.pop();
  console.log(`Dear ${removedGuest}, sorry you are not invited to dinner.`);
}

guestarr.map((item)=>
  console.log(`Dear ${item}, you are still invited to dinner.`)
);
guestarr.pop();
guestarr.pop();
console.log(guestarr);
*/
                           ///////////////

/*  Q 18 - Seeing the World: Think of at least five places in the world you’d like to visit.
 • Store the locations in a array. Make sure the array is not in alphabetical order.
  • Print your array in its original order.
                           
• Print your array in alphabetical order without modifying the actual list.
 • Show that your array is still in its original order by printing it.
                           
 • Print your array in reverse alphabetical order without changing the order of the original list.
                           
 • Show that your array is still in its original order by printing it again.
                           
 • Reverse the order of your list. Print the array to show that its order has changed.
                           
 • Reverse the order of your list again. Print the list to show it’s back to its original order.
                           
 • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
                           
 • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed. */

 //let places = ["paris", "london", "bangaldesh", "zimbabwe", "argentina"];

 //console.log(places);

 //console.log(places.sort());

 //console.log(places);
 //console.log(places.reverse());
 //console.log(places);
  //let sortarr = [ "paris", "london", "bangaldesh", "zimbabwe", "argentina"];
  //sortarr.sort();
  //console.log(sortarr);

//sortarr.reverse();

  //console.log(sortarr);
  
                            //////////////


   //Q 19 -      Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner. 

   //console.log(` ${guestarr.length}  peoples are invited  to dinner.`);


                             /////////////////

 // Q 20 - Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

 //let proglanguage: string[] = ["java", "typescript", "css", "python", "javascript"];
 //proglanguage.map((item)=>
//console.log(item));

                          /////////////////

  // Q 21 -  They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
  
 // let person: {
 //   name: string;
 //   age: number;
 //   gender: string;
 // }=
 // {
 //   name: "Reena khan",
 //   age: 29,
 //   gender: "female",
//  }
//  console.log(person);

                               ///////////////////

  
  // Q 22 - Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
  
  //let proGraminglanguage: string[] = ["java", "typescript", "css", "python", "javascript"];
 // console.log(proGraminglanguage[5]);
 // console.log(proGraminglanguage[4]);

                           /////////////////
                           
// Q 23 - Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

//let car = 'subaru';

//console.log("Is car == 'subaru'? I predict True.")

//console.log(car == 'subaru')

//• Look closely at your results, and make sure you understand why each line evaluates to True or False.

//• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.


/*let car = 'subaru';

console.log("Is car == 'subaru'? I predict True. ")

console.log(car == 'subaru');
console.log(car ==  'toyota');

let num: any = 24;
console.log("Is num == 24? I predict True. ")

console.log(num === 24);
console.log(num ===  "24");

let  student = "Reena khan";
console.log("Is student == 'Reena khan'? I predict True. ");

console.log(student == 'Reena khan');
console.log(student ==  'Reena');

let  age = 24;
console.log("Is age == 24? I predict True. ");
console.log(age == 24);
console.log(age ==  25);

let  num1 = 134;
console.log("Is number == 134 ? I predict true");
console.log(num1 === 134);
console.log(num1 ===  135);

let  id =  20;
console.log("Is id == 23 ? I predict false");
console.log(id === 20);

let  mycity = "karachi";
console.log("Is mycity == 'sukkur' ? I predict false");
console.log(mycity == 'karachi');
console.log(mycity ==  'sukkur');

let  myname = "Reena";
console.log("Is myname == 'reena' ? I predict false");
console.log(myname === "reena");
console.log(myname ===  "Reena" );

let  ITcourse = "web development";
console.log("Is ITcourse == 'graphic degzining' ? I predict false");
console.log(ITcourse === "web development");
console.log(ITcourse ===  "graphic degzining" );

let  primeminister = "imran khan";
console.log("Is primeminister == 'nawaz' ? I predict false");
console.log(primeminister === "imran khan");
console.log(primeminister ===  "nawaz" );
*/

                       ////////////////
  
  // Q 24     More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:



//• Tests for equality and inequality with strings

//let  fruitName:string= "apple";
//let  fruitName1:string= "mango";

//console.log(fruitName === fruitName1); // fruitName are not equal

//console.log(fruitName !== fruitName1); // fruitnName are not equal


//.Tests using the lower case function

//const maxiedCasestring: string = "HELLO WORLD";
//console.log(maxiedCasestring.toLowerCase() === "hello world");

 //Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

 // const num1: number = 10;
 // const num2: number = 20;

 // console.log(num1 === num2)
 // console.log(num1 !== num2)
 // console.log(num1 < num2)
//  console.log(num1 > num2)
//  console.log(num1 >=num2)
//  console.log(num1 <= num2)

  //.Tests using "and" and "or" operators
   
 // let condition1 : boolean = true;
 // let condition2 : boolean = false;

 // console.log(condition1 && condition2);
//  console.log(condition1 || condition2);
// .Test whether an item is in a array

//const fruits: string [] = ["apple","mango","orange"];
//console.log(fruits.includes("Apple"));
// console.log(fruits.includes("apple"));


// • Test  an item is not in a array

 //const number6: number[] = [1, 2, 3, 4, 5];
 //console.log(number6.includes(1));
 //console.log(number6.includes(6));

                              /////////////////////////////

   //Q 25 -Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
//• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
//• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)

// version that passes the if test (green alein)
//let alien_color : string = "green";

//if (alien_color == "green"){
//  console.log("You just earned 5 points");
//}

// version that fails the if test (red alein)

//alien_color = "red";
//if (alien_color == "green"){
 // console.log("You just earned 5 points");
//}
                        /////////////////////////////

 // Q 26 - Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

//• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

//• Write one version of this program that runs the if block and another that runs the else block.

//let alien_color: string = "green";
//alien_color = "red";
//if (alien_color == "green"){
 // console.log("You just earned 5 points");
 // }
 // else{

 //   console.log("You just earned 10 points");

 // }
  // version that passes the else condition

 // alien_color = "red";if (alien_color == "green"){
 //   console.log("You just earned 5 points");
 //   }
 //   else{
  
  //    console.log("You just earned 10 points");
  
  //  }

                          /////////////////////

 // Q 27 - Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

//• Write three versions of this program, making sure each message is printed for the appropriate color alien.

//• If the alien is green, print a message that the player earned 5 points.

//let alien_color: string = "green";
//if (alien_color === "green"){
  // console.log("You just earned 5 points");
  //}

  //• If the alien is yellow, print a message that the player earned 10 points.
  
  // else if (alien_color=== "yellow"){
  //  console.log("You just earned 10 points");
  // }
  
   //• If the alien is red, print a message that the player earned 15 points.
  // else if (alien_color === "red"){
  //  console.log("You just earned 15 points");
  //}

 // let alien_color: string = "yellow";
//if (alien_color === "green"){
 //  console.log("You just earned 5 points");
 // }

 //  else if (alien_color=== "yellow"){
 //  console.log("You just earned 10 points");
 // }
  
//  else if (alien_color === "red"){
  //  console.log("You just earned 15 points");
//  }



  //let alien_color: string = "red";
//if (alien_color === "green"){
//  console.log("You just earned 5 points");
// }

 //  else if (alien_color=== "yellow"){
 // console.log("You just earned 10 points");
 // }
  
// else if (alien_color === "red"){
// console.log("You just earned 15 points");
// }

                                 ////////////////////////////

  //  Q 28 - Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
/*



//• If the person is less than 2 years old, print a message that the person is a baby.

let age : number = 2;
if(age >= 2){
  console.log("the person is a baby");  
}

// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

else if(age >=2 && age <4){
  console.log("the person is a toddler")
}
//• If the person is at least 4 years old but less than 13, print a message that the person is a kid.
else if(age >=4 && age <13){
  console.log("the person is a kid")
}
  // • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

  else if(age >=13 && age <20){
    console.log("the person is a teenager")
  }

// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
else if(age >=20 && age <65){
  console.log("the person is an adult") 
}
// • If the person is age 65 or older, print a message that the person is an elder.
else if(age >=65){
  console.log("the person is an elder")
}
*/
                                ////////////////////
  
  // Q 29 - Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits. 
//• Write five if statements. Each should check whether a certain kind of fruit is in your array.

//const favorite_fruits: string[]= ["banana","grapes","mango","orange"]
//if(favorite_fruits.includes("banana")){
//  console.log("you really like banana")
//}
//if(favorite_fruits.includes("grapes")){
//  console.log("you really like grapes")
//}
//if(favorite_fruits.includes("mango")){
//  console.log("you really like mango")
//}
//else{
//  console.log("strwberry are not in your favourite fruit list")
//}
      
                      //////////////////////

  // Q 30 - Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
//• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

//• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.                                              

//  let employee : string[]= ["admin","ali","hussain","ahmed"]
//  for(let i=0; i<employee.length; i++){
//    if(employee[i]==="admin"){
//      console.log("Hello admin, would you like to see a status report?")
//    }
//    else{
//      console.log("Hello "+employee[i])
//    }

                            ////////////////////

  //Q 31 -  No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!

//• Remove all of the usernames from your array, and make sure the correct message is printed.                        

//let username: string[]=["areeba","umaima","areesha","mehek" ];
//if(username.length===0){
//  console.log("We need to find some users!")
//}
//else{
  //for(let i=0;  i < username.length; i++ ){
  //  console.log(username[i])
 // }
//}

//let usernames: string[]=[];
//if(usernames.length===0){
//  console.log("We need to find some users!")
//}
//else{
//  for(let i=0;  i < usernames.length; i++ ){
//    console.log(usernames[i])
//  }
//}

  
                       //////////////////////
          
  // Q 31 -No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• Remove all of the usernames from your array, and make sure the correct message is printed.

//let userName:string[]=["Ali","Hussain","sunny","tabish","areeba"];
//if(userName.length===0){
//  console.log("We need to find some users!")
//}
//else{
//   userName =[];
 //   console.log("all users name have been removed. " + userName.length)
 // }


                             //////////////////////////

  // Q 32 - •  Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//• Make a list of five or more usernames called current_users.

//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

//• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.    
  
  //let current_users:string[]=["john","marry","boby","susain"];

//let new_users:string[]=["alic","John","marry","boby","peter","susaN"];

//for(let new_users of current_users){
//  let isavailable = true;
//  for(let current_users of new_users){
 //   if(new_users.toLowerCase() === current_users.toLowerCase()){
  //    console.log(" username"+ new_users +  "is already taken.please choose a diffent name");
  //    isavailable = false;
  //    break;
  //  }
  //  }
  //  if(isavailable){
   //   console.log("username" + new_users  +  "is available");
   // }

//}

                       /////////////////////////////////

   // Q 33 -                  

   /*Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
   • Store the numbers 1 through 9 in a array.
   
   • Loop through the array.
   
   • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.*/

   //let numbers:number[] = [1,2,3,4,5,6,7,8,9];

   //for(let i = 0; i < numbers.length; i++)

   // if(numbers[i] === 1){
   //   console.log(numbers[i] + "st");
  //  }
  //  else if(numbers[i] === 2){
  //    console.log(numbers[i] + "nd");
  //  }
  //  else if(numbers[i] === 3){
  //    console.log(numbers[i] + "rd");
  //  }
  //  else{
  //    console.log(numbers[i] + "th");
  //  }
   
   

                             //////////////////////////

    // Q 34 -Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
//• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

//• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!  

//let favourite_pizza:string[]=["arabian ","tikka ", "pepperoni " ]

//for(let i = 0; i < favourite_pizza.length; i++){

//  console.log("I like " + favourite_pizza[i] + "pizza");
//}
//console.log("I really love pizza");

                         /////////////////////////////////////

  // Q 35 -  Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

 // let animals:string[]=["dog ","cat ","rabbit "]

//  for(let i = 0; i< animals.length; i++){

//    console.log("A " + animals[i] + " would make a great pet");
//  }
// console.log("any of these animal would make a wonderfull campanion!")

                          ////////////////////////////////


 // Q 36 - T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function. 
 
 //function make_shirt(size:string,message : string ):void{
 // console.log("I am making a " + size + " T shirt with message " + message)
  
// }
//make_shirt("M " ,"I love typescript")


                     /////////////////////////////////////
// Q 37 _ Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

//function make_shirt(size ="L",message = "I love a typescript" ):void{

//  console.log("I am making a " + size + " T shirt with message " + message)
//}
//make_shirt()
//make_shirt("L")
//make_shirt("M")
//make_shirt("sm", "i am a coder")

                            /////////////////////////////////

  // Q 38 -Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
  
  
  //function describe_city(city:string, message = " pakistan"):void{
  //  console.log( city +" is in" + message)


 // }
 // describe_city("karachi")
 // describe_city("lahore")
 // describe_city("islamabad")

//  describe_city(  "tokyo "," japan ")

                    /////////////////////////////////

 // Q 39 - City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

//"Lahore, Pakistan"

//Call your function with at least three city-country pairs, and print the value that’s returned. 


//function  city_country(city: string,country:string):void{

//  console.log(`"${city},${country}"`)
//}
//city_country("karachi ", "pakistan");
//city_country("mumbai ", "india");
//city_country("london ", "united kingdom ");

                         /////////////////////////////////

 // Q 40 - Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
 
 //function make_album(artist:string,title:string):{artist:String,title:string}{
  // const dectionaries = {
  //  artist:artist.charAt(0).toUpperCase()+ artist.slice(1),
  //  title:title.charAt(0).toUpperCase()+  title.slice(1)
 //  };
 //  return dectionaries;
// }
// let album =make_album("ali","light")
// console.log(album);
// let album1 =make_album("sunny","red wave")
// console.log(album1);
// let album3 = make_album("hussain","open heart")
// console.log(album3);

                    ////////////////////////////////////////

 // Q 41 -   Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
 
 //let magician: string[]=["Harry potter","Hermoine ganger","Ron weasley","albus dumbuldore"]
 
 //function show_magicians(magician:string[]){
 //for(let i=0;i<magician.length;i++){
 //   console.log(magician[i]);
 // }
 //}
 //show_magicians(magician);

                        //////////////////////////////

  // Q 42 -  Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

  //let magician: string[]=["Harry potter","Hermoine ganger","Ron weasley","albus dumbuldore"];

//function  make_great(magicianarray:string[]){
//  for(let i=0; i<magicianarray.length;i++){
//     magician[i] = "the great " + magicianarray[i]
//  }
//};

// function show_magicians(magician:string[]){
//  magician.forEach(element =>{
//    console.log(element)
 // })
  
 // }
 
// make_great(magician);
// show_magicians(magician);

               ////////////////////////////////////////////

  // Q 43 -    Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

 // let magician: string[]=["Harry potter","Hermoine ganger","Ron weasley","albus dumbuldore"];

//  function copy_array(arr:string[]){
//    return [...arr]
//  }

//  function  make_great(magicianarray:string[]){
//    for(let i=0; i<magicianarray.length;i++){

//      magicianarray[i] = "the great " + magicianarray[i]
//    }
//  };
  
//   function show_magicians(magician:string[]){
//    magician.forEach(element =>{
//      console.log(element)
//    })
    
//    }
//    const copyMagicianArray = copy_array(magician)
    
//    make_great(copyMagicianArray);

//  console.log("\n\nthis is my origional array");
//  show_magicians(magician);

//  console.log("\n\nthis is my modified copy of the array");
//  show_magicians(copyMagicianArray);

  
                  ////////////////////////////////////////

 // Q 44 - Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
 
 
 //function makeSandwich(item:string[]){
 // console.log("\nmaking your sandwich with.");
 // item.forEach(element => console.log("-" + element));

 // console.log("enjoy your sandwich!\n");
 // }
 

// makeSandwich(["hum","cheese","lettuse"])

// makeSandwich(["turkey","bacon"])

// makeSandwich(["peanut butter","jelly"])

              /////////////////////////////////////

 // Q 45 - Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
 
 function storeCarInfo(manufacturer:string,model:string, ...extraOption:{[key:string]:any}[]):
 object{
  const carInfo = {
    manufacturer,
    model,
    ...Object.assign({},...extraOption)
  }
  return carInfo
 
};

  let answers= storeCarInfo("toyota","corolla",{color:"red"},{features:["navigation","power window"]})
  console.log(answers)

  
  



  
  

                         





   



  
   




















                       







 























 




 


    




                    











          
