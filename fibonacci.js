function fibs(n) {
    if (n < 1 || typeof n !== "number" || !Number.isInteger(n)) {
      console.error("Must be a number above 1");
      return;
    }
  
    let array = [];
  
    for (i = 0; i < n; i++) {
      if (i < 2) {
        array.push(i);
      } else {
        array.push(array[i - 1] + array [i - 2]);
      }
    }
  
    return array;
  }
  
  function fibsRec(n) {
    if (n < 1 || typeof n !== "number" || !Number.isInteger(n)) {
      console.error("Must be a number above 1");
      return;
    } else if (n === 1) {
      return [0];
    } else if (n === 2) {
      return [0, 1];
    } else {
      let array = [];
  
      array = fibsRec(n - 1);
      array.push(array.at(-1) + array.at(-2));
  
      return array;
    }
  }
  
  console.log(fibs(0)); // []
  console.log(fibs(1)); // [0]
  console.log(fibs(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
  
  console.log(fibsRec(0)); // []
  console.log(fibsRec(1)); // [0]
  console.log(fibsRec(8)); // [0, 1, 1, 2, 3, 5, 8, 13]