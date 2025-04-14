// const coding = ["js", "rb", "java", "py", "cpp"]

// const values = coding.forEach( (item) => {
//     // console.log(item)
//     return item
// } )

// console.log(values)

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4){
//         newNums.push(num)
//     }
// } )


// console.log(newNums)


const books = [
    { title: "Book One", genre: 'Fiction', publish: 1981, edition: 2004},
    { title: "Book Two", genre: 'Non-Fiction', publish: 1953, edition: 2000},
    { title: "Book Three", genre: 'History', publish: 1921, edition: 2002},
    { title: "Book Four", genre: 'Science', publish: 2003, edition: 2014},
    { title: "Book Five", genre: 'Fiction', publish: 1990, edition: 2024},
    { title: "Book Six", genre: 'History', publish: 1978, edition: 2021},
    { title: "Book Seven", genre: 'Horror', publish: 1969, edition: 2004},
    { title: "Book Eight", genre: 'Mystry', publish: 1981, edition: 2003},
];

// const userBooks = books.filter( (bk) => bk.genre === 'History' )

const userBooks = books.filter( (bk) => { 
    return bk.publish >= 1980 && bk.genre == 'Fiction'
} )

console.log(userBooks);

