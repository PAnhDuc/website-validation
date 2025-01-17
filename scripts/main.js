function calculateArea(length, width) {
    if (length || width <= 0) {
        return "Invalid dimensions!";
    }

    let area = length * width;
    return `The area is ${area}`;
}

function findMaxNumber(numbers) {
    let max = 0;
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

function sortDescending(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] < array[j + 1]) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}

// Test the functions
console.log(calculateArea(5, -10)); // Expected: "Invalid dimensions!"
console.log(findMaxNumber([3, 5, 7, 2, 8])); // Expected: 8
console.log(sortDescending([4, 2, 9, 1])); // Expected: [9, 4, 2, 1]
