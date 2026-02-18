let phoneBook = [
  { name: "Jasmine", phone: "4165559999", city: "Detroit" },
  { name: "Dan", phone: "6475551234", city: "Calgary" },
  { name: "Cory", phone: "9051112222", city: "Caledonia" },
  { name: "Wilmer", phone: "4378887777", city: "Wilmington" },
  { name: "Ava", phone: "6045552367", city: "Vancouver" },
  { name: "Liam", phone: "7785558901", city: "Surrey" },
  { name: "Chloe", phone: "4035557812", city: "Edmonton" },
  { name: "Noah", phone: "6135559823", city: "Ottawa" },
  { name: "Sophia", phone: "4165554455", city: "Toronto" },
  { name: "Ethan", phone: "3065557724", city: "Saskatoon" },
  { name: "Olivia", phone: "5875551333", city: "Calgary" },
  { name: "Mason", phone: "2505554456", city: "Kelowna" },
  { name: "Isabella", phone: "9025556677", city: "Halifax" },
  { name: "Lucas", phone: "4315559876", city: "Winnipeg" },
  { name: "Harper", phone: "7095554444", city: "St. John’s" },
  { name: "James", phone: "8675552221", city: "Whitehorse" },
  { name: "Ella", phone: "8195555532", city: "Gatineau" },
  { name: "Benjamin", phone: "8075554488", city: "Thunder Bay" },
  { name: "Amelia", phone: "2265559100", city: "London" },
  { name: "Owen", phone: "7785556632", city: "Richmond" },
  { name: "Emily", phone: "4165553329", city: "Markham" },
  { name: "Jack", phone: "6045559182", city: "Burnaby" },
  { name: "Grace", phone: "5145557712", city: "Montreal" },
  { name: "Henry", phone: "4035552255", city: "Red Deer" },
];

// 1. Adds a new entry to the array
const addEntry = (book, entry) => {
    // Create a new array to store the original contents and adding 1 to its length.
    let newBook = new Array(book.length + 1);

    // Iterate through the original book and store it one-by-one to the newBook array.
    for (let i = 0; i < book.length;  i++){
        newBook[i] = book[i];
    }

    // Store the entry object into the last index (end of the array) of the newBook.
    newBook[book.length] = entry;

    // Erase the old contents of the original list.
    book.length = 0;
    
    // Iterate again to store the contents of newBook to the original list (book).
    for (let i = 0; i < newBook.length; i++){
        book[i] = newBook[i];
    }
};

// const newEntry = {
//     name: "Sam",
//     phone: "2508855495",
//     city: "Surrey"
// }

// addEntry(phoneBook, newEntry);
// console.log(phoneBook);

// 2. Find name using loop and update relevant fields.
const updateEntry = (book, person, newData) => {
    // Iterate through the entire phoneBook array.
    for (let i = 0; i < book.length; i++){
        // If phoneBook[i] matches the input in person parameter replace the phoneBook[i]'s object with the newData object.
        if (book[i].name === person){
            // Save the newData object on the object of the index that matched.
            book[i] = newData;
        }
    }
};

// const newData = {
//     name: "Jasmine",
//     phone: "6523234",
//     city: "Vancouver"
// };

// updateEntry(phoneBook, "Jasmine", newData);
// console.log(phoneBook);

// 3. Remove using splice and stop loop once found.
const deleteEntry = (book, person) => {
    // Iterate through the whole phoneBook.
    for (let i = 0; i < book.length; i++){
        // If the current phoneBook's current index matches the person, remove that index only.
        if (book[i].name === person){
            book.splice(i, 1);
        }
    }
};

// deleteEntry(phoneBook, "Grace");
// console.log(phoneBook);

// PART A - Bubble Sort by Name (Ascending)
const bubbleSortByName = book => {
    // The loop that iterates through the whole list so that each object in the list can be compared.
    for (let i = 0; i < book.length - 1; i++)
        // The inner loop's logic is to have it stop at the indexes of the already compared objects and to provide the indexes to be compared.
        for (let j = 0; j < book.length - 1 - i; j++){
            // Compares the object's name property to the one after it and swaps it if it is greater.
            if (book[j].name > book[j + 1].name){
                let temp = book[j];
                book[j] = book[j + 1];
                book[j + 1] = temp;
            }
        }

};

// bubbleSortByName(phoneBook);
// console.log(phoneBook);

//Part B - Selection Sort by Phone (Ascending)
const selectionSortByPhone = book => {
  for (let i = 0; i < book.length - 1; i++) {
    // A variable to keep track of the minimum index.
    let minIndex = i;  
    
    // Optimizes the search so that you stop looking at the sorted portion of the array.
    for (let j = i + 1; j < book.length; j++) {
      const phone1 = Number(book[minIndex].phone);
      const phone2 = Number(book[j].phone);
      // If the number at [minIndex] is less that the number at index [j], store the jth index as the new minIndex.
      if (phone2 < phone1) {
        minIndex = j;
      }
    }
    
    // If the book at [minIndex] no longer eual to the original minIndex (which is i), 
    // proceed to swap their positions.
    if (minIndex !== i) {
      let temp = book[i];
      book[i] = book[minIndex];
      book[minIndex] = temp;
    }
  }
}

// selectionSortByPhone(phoneBook);
// console.log(phoneBook);

//PART C - Merge Sort by Name.
const mergeSortByName = (book) => {
  // Base case: 0 or 1 elements already sorted
  if (book.length <= 1) {
    return book;
  }
  
  // Divide into halves
  const mid = Math.floor(book.length / 2);
  const left = book.slice(0, mid);
  const right = book.slice(mid);
  
  // Recursively sort halves
  const sortedLeft = mergeSortByName(left);
  const sortedRight = mergeSortByName(right);
  
  // Merge sorted halves
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  let result = [];
  let i = 0, j = 0;
  
  // Compare and merge in sorted order
  while (i < left.length && j < right.length) {
    if (left[i].name <= right[j].name) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }
  
  // Add remaining elements
  return result.concat(left.slice(i)).concat(right.slice(j));
}

// let sortedBook = mergeSortByName(phoneBook);
// console.log(sortedBook); 
// console.log(phoneBook);   

/*
Reflection Questions:
1. The easiest to implement were the CRUD functions, they were a lot simpler compared to the 
    the rest of the items that we had to do. They were, for me, easier to understand and I grasped
    the logic a lot quicker.
2. The hardest to understand was the merge sort algorithm and selection sort algorithm, which I'll admit I had to ask to the help of
    AI for. With the selection sort, I have sort of gotten a grasp of it by drawing it out on a piece of paper.
    However, the merge sort with recurrsion has been really challenging to understand. I do understand recursions when they 
    apply to simple logic, but it combined with the merge sort was really hard to grasp.
3. The algorithms that modify the original array are:
    - Bubble sort
    - Selection sort
    - CRUD operations
4. The alogrithm that returns a new array is:
    - Merge sort algorithm.
5. Merge sort sort of deals the problem with a divide and conquer approach wherein it deals with a small
    chunk of the problem at a time.
*/
