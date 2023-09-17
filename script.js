//your code here
// let regexp = /\bthe\b|\ban\b|\ba\b/gi;
// // "$ rockey launched $ $ rocket"
// // console.log(str.replace(regexp, "$"));

// let arr = [
//   "The Virupaksha Temple", // "Virupaksha Temple"
//   "a Victoria Memorial", //"Victoria Memorial"
//   "an Tajmahal", // "Tajmahal"
// ];

// let articleLessArray = [];
// /* ["Virupaksha Temple", "Victoria Memorial", "Tajmahal" ]

// {
//     "Virupaksha Temple": "The Virupaksha Temple",
//     "Victoria Memorial": "a Victoria Memorial",
//     "Tajmahal": "an Tajmahal"
// }
// */
// let mp = {};
// // {aricleLessItem: ""}

// for (let i = 0; i < arr.length; i++) {
//   let articleLessItem = arr[i].replace(regexp, "").trim();
//   articleLessItem = articleLessItem.replace(/  /g, " "); // remove two spaces with a single space
//   articleLessArray.push(articleLessItem);
//   mp[articleLessItem] = arr[i];
//   // for i = 0 arr[i] = "The Virupaksha Temple", articlLessItem = "Virupaksha Temple"

//   // mp = { "Virupaksha Temple": "The Virupaksha Temple" }
// }
// // articleLessArray = ["Virupaksha Temple",  "Victoria Memorial", "Tajmahal" ]
// //
// articleLessArray.sort();

// let ans = [];

// for (let i of articleLessArray) {
//   ans.push(mp[i]);
// }

// console.log(ans);

//or
let arr = ['Tajmahal', 'Victoria Memorial', 'The Virupaksha Temple'];
let updatedList = arr.map((element) => {
	// ["a", "some", "one"]
	let words = element.split(" ") ;
	let updatedString = words.reduce((prev, current, index) => {
		if(current != "The" && current != "an" && current != "a"){
			return prev + " " + current ;
		}
		return prev ;
	}, "")

	return updatedString ;
}) ;
let mp = {} ; // {"some one" : "a some one"}
updatedList.forEach( (element, index) => {
	mp[element] = arr[index] ;
});
// ["some one" , "mno abc" , "abc kh"]

updatedList.sort(); 

let finalAns = updatedList.map((element) => {
    return mp[element] ;
})

const ul = document.getElementById("band")

finalAns.forEach((item) => {
	const li = document.createElement("li");
	li.innerText = item ;
	ul.append(li);
})
