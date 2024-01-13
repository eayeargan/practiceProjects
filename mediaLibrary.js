class Media {
  constructor(title){
    this._title = title,
    this._isCheckedOut = false,
    this._ratings = []
  }
  get title (){
    return this._title;
  }
  get isCheckedOut (){
    return this._isCheckedOut;
  }
  get ratings (){
    return this._ratings;
  }
  toggleCheckOutStatus (){
    this._isCheckedOut? this._isCheckedOut = false : this._isCheckedOut = true;
  }
  getAverageRating (){
    const sumOfRatings = this._ratings.reduce((accumulator, currentValue)=>
      accumulator + currentValue, 0
    );
    const avgRating = sumOfRatings / this._ratings.length;
    return avgRating;
    
  }
  addRating (newRating){
    this._ratings.push(newRating);

  }
  set isCheckedOut (value){
    this._isCheckedOut = true;
  }
};

class Book extends Media {
  constructor(title, author, pages){
    super(title);
    this._author = author,
    this._pages = pages
  }
  get author (){
    return this._author;
  }
  get pages (){
    return this._pages;
  }
}

class Movie extends Media {
  constructor(title, director, runTime){
    super(title);
    this._director = director,
    this._runTime = runTime
  }
  get director (){
    return this._director;
  }
  get runTime (){
    return this._runTime;
  }
}
