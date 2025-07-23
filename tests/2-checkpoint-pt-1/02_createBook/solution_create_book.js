/* eslint-disable no-unused-vars, no-prototype-builtins */
const bookFuncProto = {
    getPrice: function () {
        return Number(this.price);
    },
    getInfo: function(){
        return `${this.title} by ${this.author}`
    },
    addRating: function(rating){
        return this.rating.push(rating);
    },
    getRating: function(){
    let average = 0;
    let sum  = 0;
    for(let i = 0; i < this.rating.length; i++){
        sum += this.rating[i].length
    }
    average = sum / this.rating.length;
    return average;
    },
}
const createBook = (id, title, author, price, rating) => {
    let book = Object.create(bookFuncProto);

    book.id = id;
    book.title = title;
    book.author = author;
    book.price = price;
    book.rating = [];
    return book;
}