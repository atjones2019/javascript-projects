// Define your Book class here:
class Book {
    constructor(title,author,copyDate,isbn,numPages,numChecked,discarded){
        this.title = title;
        this.author = author;
        this.copyDate = copyDate;
        this.isbn = isbn;
        this.numPages = numPages;
        this.numChecked = numChecked;
        this.discarded = discarded;
    }
    checkout(uses=1){
        this.numChecked = this.numChecked + uses;
    }
}

// Define your Manual and Novel classes here:

class Manual extends Book{
    constructor(title,author,copyDate,isbn,numPages,numChecked,discarded){
        super(title,author,copyDate,isbn,numPages,numChecked,discarded);
    }
   
    discardedStatus(currentYear) {
        if (currentYear - this.copyDate > 5){
            this.discarded = "Yes";
            this.age = currentYear - this.copyDate;
        }
        
    }
}

class Novel extends Book{
    constructor(title,author,copyDate,isbn,numPages,numChecked,discarded){
        super(title,author,copyDate,isbn,numPages,numChecked,discarded);
    }
   
    discardedStatus() {
        if (this.numChecked > 100){
            this.discarded = "Yes";
        }
    }
}

// Declare the objects for exercises 2 and 3 here:

let novel1 = new Novel("Pride and Prejudice","Jane Austen",1813,1111111111111,432,32,"No");

let manual1 = new Manual("Top Secret Shuttle Building Manual","Redacted",2013,'0000000000000',1147,1,"No");

// Code exercises 4 & 5 here:

novel1.checkout(69);
novel1.discardedStatus();

console.log(`${novel1.title} has been checked out ${novel1.numChecked} times. Should it be discarded? ${novel1.discarded}`)

manual1.discardedStatus(2024);

console.log(`${manual1.title} is ${manual1.age} years old. Should it be discarded? ${manual1.discarded}`)