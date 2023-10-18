
const initialFacts = [
    {
      id: 1,
      text: "React is being developed by Meta (formerly facebook)",
      source: "https://opensource.fb.com/",
      category: "technology",
      votesInteresting: 24,
      votesMindblowing: 9,
      votesFalse: 4,
      createdIn: 2021,
    },
    {
      id: 2,
      text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
      source:
        "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
      category: "society",
      votesInteresting: 11,
      votesMindblowing: 2,
      votesFalse: 0,
      createdIn: 2019,
    },
    {
      id: 3,
      text: "Lisbon is the capital of Portugal",
      source: "https://en.wikipedia.org/wiki/Lisbon",
      category: "society",
      votesInteresting: 8,
      votesMindblowing: 3,
      votesFalse: 1,
      createdIn: 2015,
    },
  ];

  const CATEGORIES = [
    { name: "technology", color: "#3b82f6" },
    { name: "science", color: "#16a34a" },
    { name: "finance", color: "#ef4444" },
    { name: "society", color: "#eab308" },
    { name: "entertainment", color: "#db2777" },
    { name: "health", color: "#14b8a6" },
    { name: "history", color: "#f97316" },
    { name: "news", color: "#8b5cf6" },
  ];

  console.log(CATEGORIES.find((cat) => cat.name === 'society').color);
  // selecting DOM Elements

const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

console.log(btn);
console.dir(btn);

//// Create DOM elements: render facts in list
factsList.innerHTML = "";

// Load data from Supabase 

loadFacts();
async function loadFacts() {
 const res = await fetch (
    "https://jvrpasrdzfabgbhjmmqh.supabase.co/rest/v1/facts", {

    headers: {
      apikey: 
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2cnBhc3JkemZhYmdiaGptbXFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEyNDY2NTcsImV4cCI6MjAwNjgyMjY1N30.MeeDkY0GLTIeuC-YxDDI8YHBjbbEce_BmFgXyeExX54",
      authorization: 
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2cnBhc3JkemZhYmdiaGptbXFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEyNDY2NTcsImV4cCI6MjAwNjgyMjY1N30.MeeDkY0GLTIeuC-YxDDI8YHBjbbEce_BmFgXyeExX54",
    },
  
  });
  const data = await res.json()
  // console.log(data);
  createFactsList(data);
  //filtering data
  // const filteredData = data.filter((fact) => fact.category === 'society');
  // console.log(filteredData);
  // createFactsList(filteredData);

}


console.log([7, 64, 6, -23, 11].filter((el)=> el > 10));

console.log([7, 64, 6, -23, 11].find((el)=> el > 10));





// createFactsList(initialFacts);
// createFactsList([{ text: "Raed"}]);

function createFactsList(dataArray) {


  const htmlArr = dataArray.map((fact) => 
    `<li class="fact"> 
        <p>
          ${fact.text}
        <a class="source"
          href="${fact.source}"
          target="_blank">(source) 
        </a>    
        </p>
        <span class="tag" style="background-color: ${CATEGORIES.find((cat) => cat.name === fact.category).color}">
        ${fact.category}</span>
  
    </li>`
  );
  // console.log(htmlArr);
  const html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);

}


// Toggle form visibility
btn.addEventListener("click", function() {

   if(form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
   } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
   }
});



/* 
let votesInteresting = 23;
let votesMindBlowing = 5;
const test = "Lagos is the capital of Nigeria";

votesInteresting = votesInteresting + 1;
votesInteresting++;
console.log(votesInteresting);

let totalUpvotes = votesInteresting + votesMindBlowing;
console.log(totalUpvotes);

let votesFalse = 4;
const isCorrect = votesFalse < totalUpvotes;
console.log(isCorrect);
*/
/*
function calcFactAge(year){
    const currentYear = new Date().getFullYear();
    const Age = currentYear - year;

    if(Age >= 0){
        return Age;
    } else {
        return `Impossible Year. Year need to be less than or equal to ${currentYear}`;
    }

    // return Age;
    // return 2023 - year 
}

const Age1 = calcFactAge(2015);
console.log(Age1);
console.log(calcFactAge(2020));
console.log(calcFactAge(2037)); 

const calcFactAge2 = (year) => year >= new Date().getFullYear() ? 
new Date().getFullYear() - year :
 `impossible year, year need to be less than or equal to ${ new Date().getFullYear()}`;

/*

let votesInteresting = 20;
let votesMindBlowing = 0;

if ( votesInteresting === votesMindBlowing ) {
    alert("this fact is equally interesting and mindblowing");
} else if(votesInteresting > votesMindBlowing ) {
    console.log("interesting fact");
} else if(votesInteresting < votesMindBlowing ) {
    console.log("Mindblowing fact");
}

//falsy values: 0, "", null, undefind
// truthy values: everything else 
if ( votesMindBlowing) {
    console.log("MINDBLOWING FACT!!!");
}else {
    console.log("Not so Special");
}

let votesFalse = 7;
const totalUpvotes = votesInteresting + votesMindBlowing;

const message = totalUpvotes > votesFalse ? "The fact is True" : "Might be False"
// alert(message);

const text = "Lisbone is the capital of Portugal";
const upperText = text.toUpperCase();
console.log(upperText);

const str = `The current fact is "${text}". 
             It is probably ${calcFactAge(2015)} years old. 
             It is probably ${ totalUpvotes > votesFalse ? "correct" : "not true" }.`;
console.log(str)
*/

/*
const fact = ["Lisbon is the capital of Portugal", 2015, true];
console.log(fact[2]);
console.log(fact.length);
console.log(fact[fact.length - 1]);

const [text, createdIn] = fact;
console.log(createdIn);

const newFact = [...fact, "Society"];
console.log(newFact);

[2,4, 6, 8].forEach(function(el){
    console.log(el);
});

 const times10 = [2,4,6,8].map(function(el){
    return el * 10;
});
const times10 = [2,4,6,8].map((el) => el * 10);
console.log(times10);

const CATEGORIES = [
    { name: "technology", color: "#3b82f6" },
    { name: "science", color: "#16a34a" },
    { name: "finance", color: "#ef4444" },
    { name: "society", color: "#eab308" },
    { name: "entertainment", color: "#db2777" },
    { name: "health", color: "#14b8a6" },
    { name: "history", color: "#f97316" },
    { name: "news", color: "#8b5cf6" },
  ];

  const initialFacts = [
    {
      id: 1,
      text: "React is being developed by Meta (formerly facebook)",
      source: "https://opensource.fb.com/",
      category: "technology",
      votesInteresting: 24,
      votesMindblowing: 9,
      votesFalse: 4,
      createdIn: 2021,
    },
    {
      id: 2,
      text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
      source:
        "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
      category: "society",
      votesInteresting: 11,
      votesMindblowing: 2,
      votesFalse: 0,
      createdIn: 2019,
    },
    {
      id: 3,
      text: "Lisbon is the capital of Portugal",
      source: "https://en.wikipedia.org/wiki/Lisbon",
      category: "society",
      votesInteresting: 8,
      votesMindblowing: 3,
      votesFalse: 1,
      createdIn: 2015,
    },
  ];

  function calcFactAge(year){
    const currentYear = new Date().getFullYear();
    const Age = currentYear - year;

    if(Age >= 0){
        return Age;
    } else {
        return `Impossible Year. Year need to be less than or equal to ${currentYear}`;
    }

}
  const factAges = initialFacts.map((el) => calcFactAge(el.createdIn));

console.log(factAges);
  const allCategories = CATEGORIES.map((el) => el.name);
console.log(allCategories);
console.log(factAges.join ("-"));


/*
const factObj = {
    text: "Madrid is the Capital of Spain",
    Category: "Society",
    createdIn: 2015,
    isCorrect: true,
    createSummary: function () {
    return `The fact "${this.text}" is from the category
    ${this.Category.toUpperCase()}`;
    },
    
};
console.log(factObj.text);
console.log(factObj["text"]);
const{category, isCorrect } = factObj;
console.log(category);
console.log(factObj.createSummary());
*/

