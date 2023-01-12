const bookObj1 ={
    bookName: 'Harry Potter',
    authorName: 'J. K. Rowling',
    publishingYear: 1997,
    Publisher: 'Bloomsbury Publishing (UK) Scholastic Press (US)'
}

const bookObj2 ={
    bookName: 'The Travels of Marco Polo',
    authorName: ' Marco Polo',
    publishingYear: 1871,
    Publisher: 'Bloomsbury Publishing '
}


let bookUtils = {};

bookUtils={
    getFirstPublished(b1,b2){
        return Math.min(b1.year,b2.year);
    },
    setNewEdition(b,num){
        return b.latestEdition=num;
    },
    setLanguage(book,lang){
        return book.language=lang;
    },
    setTranslation(book,language,translation){
        return book.translation={translation,language}
        },
    
    setPublisher(book,name,location){
        return book.Publisher={name,location}
    },

    isSamePublisher(book1,book2){
        if( (book1.Publisher.name)===(book2.Publisher.name)&&(book1.Publisher.location)===(book2.Publisher.location) ){
            return true;
        }
        else{
            return false;
        }
    }
    }