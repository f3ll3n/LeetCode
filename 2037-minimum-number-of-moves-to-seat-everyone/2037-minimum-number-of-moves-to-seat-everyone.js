/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
    const sortedSeats = seats.sort((a, b) => a-b);
    const sortedStudents = students.sort((a,b) => a-b);
    let result = 0;
    
    sortedSeats.forEach((seat, idx) => {
        result += Math.abs((seat - sortedStudents[idx]));
    })
    return result
};