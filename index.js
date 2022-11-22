function introduction(name){
    console.log ("Hi, my name is ${name}.");
}

introduction()

function introductionWithLanguage(name, language){
    console.log("Hi, my name is [name] and I am learning to program in [language].")
}

introductionWithLanguage()

//sample task//

function sayHelloTo(firstName) {
    console.log(`Hello, ${firstName}!`);
  }

  function sayHelloTo(firstName = "User") {
    console.log(`Hello, ${firstName}!`);
  }




//assignment//

function introductionWithLanguageOptional(name, language){
    console.log(`Hi, my name is [name] and I am learning to program in [language].`)
}

function introductionWithLanguageOptional(name, language="JavaScript"){
    return(`Hi, my name is ${name} and I am learning to program in ${language}.`)
}
  
introductionWithLanguageOptional()