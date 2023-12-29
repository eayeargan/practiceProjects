const menuMaker = (meal, price) => {
  return {
    _meal: meal,
    _price: price,
    get mealAndPrice(){
      if (this._meal && this._price){
        return `The special is ${this._meal} for ${this._price} dollars!`
      } else {
        return `Meal or price was not set correctly!`
      }
    },
    set meal(mealToCheck){
      if (typeof mealToCheck === 'string'){
        this._meal = mealToCheck;
        return this._meal;
      }
    },
    set price(priceToCheck){
      if (typeof priceToCheck === 'number'){
        this._price = priceToCheck;
        return this._price;
      }
    }
  }
}
