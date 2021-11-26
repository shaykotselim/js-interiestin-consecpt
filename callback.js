function welcomeMessase(name, greethanlar){
    // console.log(name);
    greethanlar(name)
}

function greetMorning (name){
    console.log('Good Morning', name);
}
function greetAfternoon (name){
    console.log('Good Afternoon', name,);
}
function greetEvening (name){
    console.log('Good Evening', name,);
}

welcomeMessase('Bill Gates', greetMorning)
welcomeMessase('Mark Jukarburg', greetAfternoon)
welcomeMessase('Shaykot_selim', greetEvening)

/*
parameater hisabe kno function k pathano holei take call back function bole
 */