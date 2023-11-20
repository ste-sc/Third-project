//class ok, but why this.name equas name and not "annie" for ex?
class Hero {
    constructor (name, age, type){
        this.name = name
        this.age = age 
        this.type = type
    }
}
//instance 
const Annie = new Hero("Annie", 479, "warrior"); 
//function
function attack(Hero) {
    let power

    if (Hero.type === "wizard") {
        power = "magia";
      } else if (Hero.type === "warrior") {
        power = "sword";
      } else if (Hero.type === "monk") {
        power = "martial arts";
      } else {
        power = "shuriken";
      }
    
  return "O heroi " + Hero.name + " de tipo " + Hero.type + " atacou usando " + power;   
}

console.log(attack(Annie))