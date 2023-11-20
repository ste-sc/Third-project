class Hero {
  constructor (name, age, type, sex) {
    this.name = name
    this.age = age
    this.type = type
    this.sex = sex
  }
}
const Annie = new Hero("Annie", 479, "guerreira", "F");

const Jack = new Hero("Jack", 328, "mago", "M") 

const Red = new Hero("Red", 711, "ninja", "M")

function attack(Hero) {
  let power
  let sexIntro

  if (Hero.type === "mago" || Hero.type === "maga") {
    power = "magia"
  } else if (Hero.type === "guerreiro" || Hero.type === "guerreira" ) {
    power = "espada"
  } else if (Hero.type === "ninja") {
    power = "shuriken"
  } else {
    power = "martial arts"
  }

  if (Hero.sex === "F") {
    sexIntro = "A heroína "
     } else {
    sexIntro = "O herói "
  }

 return sexIntro + Hero.name + ", uma " + Hero.type + " de " + Hero.age + " anos " + "atacou usando " + power + "."
}

 function defend(Hero) {
 return sexIntro + Hero.name + ", uma " + Hero.type + " de " + Hero.age + " anos " + "defendeu usando " + power + "."
}  


console.log(attack(Annie))
console.log(attack(Jack))
console.log("----------------------------------")
console.log(defend(Red))

