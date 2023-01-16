const library = [
    {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true
    },
    {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true
    },
    {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false
    }
    ];


    // const filterBooks = library.filter(function (b) {

    //     return (b.readingStatus.includes(true));
    // })

    // console.log(filterBooks);


    const filterBooks = library.filter(book =>{
        const readingStatus1= book.readingStatus.toString(' ');

        return readingStatus1.includes('true');
    })

    console.log(filterBooks);