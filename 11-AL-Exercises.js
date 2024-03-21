function modifyText() {
  document.querySelector('js-textbox').innerHTML = 'Good bye';
}

//11b
function getLastValue (array) { 
  console.log(array)
  const lastValue = array[array.length - 1];
  console.log(lastValue)
  document.querySelector('#js-textbox').innerHTML = lastValue;
}

//11c
function arraySwap (array) { 
  if (array.length > 1) {
    [array[0], array[array.length - 1]] = [array[array.length - 1], array[0]];
    console.log(array)
    document.querySelector('#js-textbox').innerHTML = array[0];
  }
}

//11d
for (let i = 0; i <= 10; i += 2) {
//  console.log(i);
}

//11e
for (let i = 5; i >= 0; i -= 1) {
//  console.log(i);
}

//11f
function whileLoopUp () {
let i = 0;
while (i <= 10) {
    console.log(i);
    i += 2;
}
}
function whileLoopDown () {
let i = 5;
while (i >= 0) {
    console.log(i);
    i -= 1;
}
}

//11g
function incrementArrayElements(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i] + 1);
  }
  console.log(newArray);
  return newArray;
}

//11h
function addOne(array) {
  return array.map(function(number) {
    return number + 1;
  }
  )
}

//11i
function addNum(array, _num) {
  return array.map(function(number) {
    return number + _num;
  }
  )
}

//11j
function addArrays(array1, array2) {
  return array1.map((num, index) => num + array2[index]);
}

//11k
function countPositive(nums) {
  return nums.filter(num => num > 0).length;
}

//11l
function minMax(nums) {
  if (nums.length === 0) {
    return {min: null, max: null}
  }
  let min = nums[0];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i];
    }
    if (nums[i] > max) {
      max = nums[i];
    }
  }

    return {min: min, max: max};
}

//11n
function countWords(words) {
  const wordCounts = {};
  for (const word of words) {
    if (wordCounts[word]) {
      wordCounts[word] +=1;
    } else {
      wordCounts[word] = 1;
    }
  }
  return wordCounts;  
}

//11o
function findSearchString(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'search') {
      console.log(i);
      break; // Stop the function after logging the index
    }
  }
  console.log(-1); // Log -1 if 'search' was not found in the loop
}

//p
function findFirstSearchString(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'search') {
      console.log(i);
      break; // Exit the loop after the first 'search' is found
    }
  }
  if (!array.includes('search')) {
    console.log(-1); // Log -1 if 'search' was not found
  }
}

//q
function findFirstWordString(array, word) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) {
      console.log(i);
      break; // Exit the loop after the first 'search' is found
    }
  }
  if (!array.includes('search')) {
    console.log(-1); // Log -1 if 'search' was not found
  }
}

//11r
function removeEgg(foods) {
  const result = [];
  for (const food of foods) {
    if (food === 'egg') {
      continue; // Skip this iteration if the food is 'egg'
    }
    result.push(food); // Add the food to the result if it's not 'egg'
  }
  console.log(result);
}

//11s
function removeEgg(foods) {
  const result = [];
  let eggCount = 0; // Counter for the number of 'egg' strings removed

  for (const food of foods) {
    if (food === 'egg' && eggCount < 2) {
      eggCount++; // Increment the counter
      continue; // Skip to the next iteration
    }
    result.push(food);
  }
  console.log(result);
}

//11t
function removeEgg(foods) {
  // Reverse the array to start from the end
  const reversedFoods = foods.reverse();
  const result = [];
  let eggCount = 0; // Counter for the number of 'egg' strings removed

  for (const food of reversedFoods) {
    if (food === 'egg' && eggCount < 2) {
      eggCount++; // Increment the counter
      continue; // Skip to the next iteration
    }
    result.push(food);
  }
  // Reverse the result array to restore the original order
  return result.reverse();
}

//11u
function removeEgg(foods) {
  // Create a copy of the array and reverse it
  const reversedFoods = foods.slice().reverse();
  const result = [];
  let eggCount = 0; // Counter for the number of 'egg' strings removed

  for (const food of reversedFoods) {
    if (food === 'egg' && eggCount < 2) {
      eggCount++; // Increment the counter
      continue; // Skip to the next iteration
    }
    result.push(food);
  }

  // Reverse the result array to restore the original order
  return result.reverse();
}

//11v
for (let num = 1; num <= 20; num++) {
  let output = '';

  if (num % 3 === 0) {
    output += 'Fizz';
  }
  if (num % 5 === 0) {
    output += 'Buzz';
  } 
  //console.log(output || num);
}

//11w
function unique(array) {
  const uniqueArray = [];

  for (const element of array) {
    // Check if the element is already in the uniqueArray
    const index = uniqueArray.findIndex(item => item === element);
    
    // If the element is not found (findIndex returns -1), add it to uniqueArray
    if (index === -1) {
      uniqueArray.push(element);
    }
  }

  return uniqueArray;
}

