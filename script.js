//your code here
let regexp = /\bthe\b|\ban\b|\ba\b/gi;
// "$ rockey launched $ $ rocket"
// console.log(str.replace(regexp, "$"));

let arr = [
  "The Virupaksha Temple", // "Virupaksha Temple"
  "a Victoria Memorial", //"Victoria Memorial"
  "an Tajmahal", // "Tajmahal"
];

let articleLessArray = [];
/* ["Virupaksha Temple", "Victoria Memorial", "Tajmahal" ]

{
    "Virupaksha Temple": "The Virupaksha Temple",
    "Victoria Memorial": "a Victoria Memorial",
    "Tajmahal": "an Tajmahal"
}
*/
let mp = {};
// {aricleLessItem: ""}

for (let i = 0; i < arr.length; i++) {
  let articleLessItem = arr[i].replace(regexp, "").trim();
  articleLessItem = articleLessItem.replace(/  /g, " "); // remove two spaces with a single space
  articleLessArray.push(articleLessItem);
  mp[articleLessItem] = arr[i];
  // for i = 0 arr[i] = "The Virupaksha Temple", articlLessItem = "Virupaksha Temple"

  // mp = { "Virupaksha Temple": "The Virupaksha Temple" }
}
// articleLessArray = ["Virupaksha Temple",  "Victoria Memorial", "Tajmahal" ]
//
articleLessArray.sort();

let ans = [];

for (let i of articleLessArray) {
  ans.push(mp[i]);
}

console.log(ans);
