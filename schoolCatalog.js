class School {
  constructor(name, level, numberOfStudents){
    this._name = name,
    this._level = level,
    this._numberOfStudents = numberOfStudents
  }
  get name(){
    return this._name;
  }
  get level(){
    return this._level;
  }
  get numberOfStudents(){
    return this._numberOfStudents;
  }
  quickFacts(){
    console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`);
  }
  static pickSubstituteTeacher(substituteTeachers){
    return substituteTeachers[Math.floor(Math.random()*substituteTeachers.length -1)];
  }
  set numberOfStudents(numberValue){
    if (typeof numberValue === 'number'){
      this._numberOfStudents = numberValue;
    } else {
      console.log('Invalid input: numberOfStudents must be set to a Number.');
    }
  }
}

class PrimarySchool extends School{
  constructor(name, numberOfStudents, pickupPolicy){
    super(name);
    this._level = 'primary',
    this._numberOfStudents = numberOfStudents,
    this._pickupPolicy = pickupPolicy
  }
  get pickupPolicy(){
    return this._pickupPolicy;
  }
}

class HighSchool extends School{
  constructor(name, numberOfStudents, sportsTeams){
    super(name);
    this._level = 'high school',
    this._numberOfStudents = numberOfStudents,
    this._sportsTeams = sportsTeams
  }
  get sportsTeams(){
    this._sportsTeams.forEach(team => {
      console.log(team);
    });
  }
}
