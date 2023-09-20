
// 16. Write a function `removeFalsyValues` that takes an array and removes all falsy values (e.g., `false`, `null`, `0`, `""`, `undefined`, `NaN`).

//     **Example:**
//     ```javascript
//     const input = [0, 1, false, true, "", "hello", undefined];
//     const output = removeFalsyValues(input);
//     console.log(output); // [1, true, "hello"]
//     ```

// **Array Searching and Filtering:**

function removeFalsy(Values){
    return Values
    .filter(value=> !!value);
}
let Values = [0, 1, false, true, "", "hello", undefined];
console.log(removeFalsy(Values));
