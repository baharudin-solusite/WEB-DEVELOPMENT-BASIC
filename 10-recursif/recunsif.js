function countDown(number) {
    console.log("number rekursif", number);
    let nextNumber = number - 1;
  
    if (nextNumber > 0) {
      countDown(nextNumber);
    }
  }
  countDown(5);
  
  for (let number = 5; number > 0; number--) {
    console.log("number looping", number);
  }
  
  function fungsiPangkat(number, pangkat) {
    if (pangkat === 1) {
      return number;
    } else {
      const hasil = number * fungsiPangkat(number, pangkat - 1);
      console.log("dalam rekursif", hasil);
      return hasil;
    }
  }
  console.log("fungsi", fungsiPangkat(2, 5));
  