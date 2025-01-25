function mergeSort(array) {
    // If array has a single value, it is already sorted
    if (array.length === 1) {
        return array;
    } else {
        // Divide array into two halves
        const left = array.slice(0, Math.floor(array.length / 2));
        const right = array.slice(Math.floor(array.length / 2));
        
        // Sort the halves
        const sortedLeft = mergeSort(left);
        const sortedRight = mergeSort(right);

        // Merge the sorted halves
        let sortedArray = []; // Array to be returned

        // Compare first values of two halves, 
        // Remove the smaller value and push on the array to be returned
        while (sortedLeft.length !== 0 && sortedRight.length !== 0) {
            if (sortedLeft[0] < sortedRight[0]) {
                sortedArray.push(sortedLeft.shift());
            } else {
                sortedArray.push(sortedRight.shift());
            }
        }

        // Loop ends once a half is empty
        // When one list becomes empty, copy all values from the remaining array into the sorted array
        if (sortedLeft.length === 0) {
            sortedArray = sortedArray.concat(sortedRight);
        } else if (sortedRight.length === 0) {
            sortedArray = sortedArray.concat(sortedLeft);
        }

        return sortedArray;
    }
}

console.log(mergeSort([5, 3, 6, 2, 1, 7, 4]));
console.log(mergeSort([5, 5, 4, 4, 3, 3, 2, 2, 1, 1]));