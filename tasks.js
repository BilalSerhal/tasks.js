
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  if (text === 'quit\n') {
    quit();
  }
  else if (text === 'exit\n') {
    exit();
  }
  else if(text === 'batata\n'){
    batata();
  }
  else if(text === 'help\n'){
    help();
  }
  else{
    unknownCommand(text);
  }
}

var list1;
const fs = require("fs");
try {
  let data = fs.readFileSync(savefile);
  var objList = JSON.parse(data);
}
catch (e) {
  console.log(`this file is not present, we will create it!`)
}
if (objList !== undefined) {
  list1 = objList.list1;
} else {
  objList = { "list1": [] }
  list1 = objList.list1;
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(){
  console.log('hello!')
}
function batata(){
  console.log('batata');
}
const{hello{} batata{} quit{}}
function help(){
  List.forEach(element => console.log('-',element))

console.log('----------')

  };
  console.log('batata');

  const List = [help, quit, hello, batata, exit, add, remove, list, edit, check, uncheck];
  
  
  function onDataReceived(text) {
    text = text.trim();
  
    // Iterate through the List array and call the functions that match the input text
    List.forEach(function(func) {
      if (text.startsWith(func.name)) {
        func(text);
      }
    });
  }
/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}
function exit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

// The following line starts the application
startApp("BilalSerhal")
