var numbers = [12, 5, 20, 130, 44, 9, 240];

var lessnumbers = numbers.filter(function (number) {
    if (number < 15) {
        return number;
    }
});

console.log(lessnumbers);