// var tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1',  'p', 'h1', 'ol', 'br'];
// var tagCount = {}
//
// for (let tag of tags){
//     if (tagCount[tag]) {
//         tagCount[tag]++
//     }else{
//         tagCount[tag] = 1
//     }
//     var tagCountArray = Object.entries(tagCount);
//     tagCountArray.sort((a, b) => b[1] - a[1]);
// }
// console.log(tagCountArray);



// function filterBooks(...books) {
//     const booksWithY = [];
//     const otherBooks = [];
//
//     books.forEach(book => {
//         if (book.toLowerCase().includes('у')) {
//             booksWithY.push(book);
//         } else {
//             otherBooks.push(book);
//         }
//     });
//
//     console.log("Книги с буквой 'у':", booksWithY)
//     console.log("Остальные книги:", otherBooks)
// }
//
//
// filterBooks("Утонченный мертвец", "Под куполом", "Оно", "Сияние", "Метро 2033", "Убить пересмешника");



const courses = [
    {
        courseName: 'JavaScript',
        students: [
            { name: 'John', grades: [60, 55, 95] },
            { name: 'Jack', grades: [59, 90, 95] }
        ]
    },
    {
        courseName: 'Python',
        students: [
            { name: 'Mark', grades: [78, 82, 80] },
            { name: 'Alice', grades: [85, 88, 90] }
        ]
    }
];

function calculateAverage(grades) {
    const sum = grades.reduce((acc, curr) => acc + curr, 0);
    return sum / grades.length;
}


const transformedCourses = courses.map(course => {
    const studentsData = course.students.map(student => ({
        name: student.name,
        averageGrade: calculateAverage(student.grades)
    }));
    return {
        courseName: course.courseName,
        students: studentsData
    };
});
console.log(transformedCourses);
