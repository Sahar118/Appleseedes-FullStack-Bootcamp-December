const bookObj ={
    bookName: 'Harry Potter',
    authorName: 'J. K. Rowling',
    publishingYear: 1997,
    Publisher: 'Bloomsbury Publishing (UK) Scholastic Press (US)'
}

const harryPotter = () => {
// let newBook = bookObj.bookName;
    
    console.log(`The book ${bookObj.bookName} was written by ${bookObj.authorName} in the year${bookObj.publishingYear}`);
}
harryPotter(bookObj);