// const form= document.querySelector('form');
// const org_ans={
//     answer1:"Sachin Tendulkar",
//     answer2:"England",
//     answer3:"Sachin Tendulkar",
//     answer4:"264",
//     answer5:"Anil Kumble"
// };

// form.addEventListener("submit",(event)=>{
//     event.preventDefault();
//     const data=new FormData(form);
//     const ans=Array.from(data.values());
//     let result=0;
//     for(let [key,value] of data.entries()){
//         if(value=== org_ans[key]){
//             result++;
//         }
//     }
//     const out=document.getElementById("out");
//     out.innerText=`You got ${result} out of 5 correct answers.`;
    
// }) 
// const reset= document.getElementById("re");
// reset.addEventListener("click",()=>{
//     form.reset();
//     const out=document.getElementById("out");
//     out.innerText="";
// })





const  cricketQuiz = [
  {
    question: "Which country won the first ICC Cricket World Cup?",
    options: ["India", "West Indies", "Australia", "England"],
    answer: "West Indies"
  },
  {
    question: "Who has scored the most centuries in ODI cricket?",
    options: ["Virat Kohli", "Ricky Ponting", "Sachin Tendulkar", "AB de Villiers"],
    answer: "Sachin Tendulkar"
  },
  {
    question: "In which year was the first T20 World Cup held?",
    options: ["2005", "2007", "2006", "2009"],
    answer: "2007"
  },
  {
    question: "Who was the captain of India in the 2011 World Cup?",
    options: ["Sourav Ganguly", "Virat Kohli", "MS Dhoni", "Rahul Dravid"],
    answer: "MS Dhoni"
  },
  {
    question: "Which bowler has taken the most wickets in Test cricket?",
    options: ["Muttiah Muralitharan", "Shane Warne", "James Anderson", "Anil Kumble"],
    answer: "Muttiah Muralitharan"
  },
  {
    question: "Which country hosted the 2019 Cricket World Cup?",
    options: ["India", "England", "Australia", "South Africa"],
    answer: "England"
  },
  {
    question: "Who hit six sixes in an over in T20 World Cup 2007?",
    options: ["MS Dhoni", "Yuvraj Singh", "Virender Sehwag", "Rohit Sharma"],
    answer: "Yuvraj Singh"
  },
  {
    question: "How many players are there in a cricket team?",
    options: ["9", "10", "11", "12"],
    answer: "11"
  },
  {
    question: "Who is known as the 'Little Master'?",
    options: ["Sachin Tendulkar", "Sunil Gavaskar", "Virat Kohli", "Rahul Dravid"],
    answer: "Sunil Gavaskar"
  },
  {
    question: "What is the maximum number of overs in an ODI match per team?",
    options: ["20", "50", "40", "60"],
    answer: "50"
  },
  {
    question: "Who is the only batsman to score 100 international centuries?",
    options: ["Sachin Tendulkar", "Virat Kohli", "Ricky Ponting", "Steve Smith"],
    answer: "Sachin Tendulkar"
  },
  {
    question: "Who won the 2023 ICC Men's Cricket World Cup?",
    options: ["India", "England", "Australia", "New Zealand"],
    answer: "Australia"
  },
  {
    question: "Which Indian cricketer is nicknamed 'Hitman'?",
    options: ["Virat Kohli", "Shikhar Dhawan", "Rohit Sharma", "KL Rahul"],
    answer: "Rohit Sharma"
  },
  {
    question: "What is the term for scoring zero in cricket?",
    options: ["Duck", "Golden", "Zero", "Out"],
    answer: "Duck"
  },
  {
    question: "Who was the first cricketer to score a double century in ODIs?",
    options: ["Virender Sehwag", "Rohit Sharma", "Sachin Tendulkar", "MS Dhoni"],
    answer: "Sachin Tendulkar"
  },
  {
    question: "Which stadium is known as the 'Home of Cricket'?",
    options: ["Wankhede", "Lords", "Eden Gardens", "MCG"],
    answer: "Lords"
  },
  {
    question: "Which team has won the most ICC Cricket World Cups (as of 2024)?",
    options: ["India", "Australia", "England", "West Indies"],
    answer: "Australia"
  },
  {
    question: "Which player is called 'The Wall' of Indian cricket?",
    options: ["Rahul Dravid", "Anil Kumble", "Sourav Ganguly", "MS Dhoni"],
    answer: "Rahul Dravid"
  },
  {
    question: "Who bowled the fastest recorded delivery in cricket?",
    options: ["Brett Lee", "Shoiab Akhtar", "Mitchell Starc", "Shaun Tait"],
    answer: "Shoiab Akhtar"
  },
  {
    question: "Which cricketer is famous for the 'Helicopter shot'?",
    options: ["MS Dhoni", "Virat Kohli", "Rohit Sharma", "Hardik Pandya"],
    answer: "MS Dhoni"
  },
   {
    question: "Who was the first captain of the Indian national cricket team?",
    options: ["CK Nayudu", "Lala Amarnath", "Kapil Dev", "Sunil Gavaskar"],
    answer: "CK Nayudu"
  },
  {
    question: "Which bowler has the best bowling figures in a single ODI match?",
    options: ["Chaminda Vaas", "Glenn McGrath", "Shahid Afridi", "Stuart Broad"],
    answer: "Chaminda Vaas"
  },
  {
    question: "Which country won the ICC T20 World Cup in 2022?",
    options: ["India", "England", "Australia", "Pakistan"],
    answer: "England"
  },
  {
    question: "Who was the first Indian to take a hat-trick in Test cricket?",
    options: ["Harbhajan Singh", "Anil Kumble", "Kapil Dev", "Jasprit Bumrah"],
    answer: "Harbhajan Singh"
  },
  {
    question: "Which Indian player has the highest individual score in Test cricket?",
    options: ["Virender Sehwag", "Sunil Gavaskar", "VVS Laxman", "Sachin Tendulkar"],
    answer: "Virender Sehwag"
  }
];
const form = document.querySelector('form');
    const ol= document.createElement("ol");

const questionList = randomQuestion();
const org_ans = {};
questionList.forEach((obj,item)=>{
    org_ans[`answer${item+1}`]=obj.answer;
    
    
    const li= document.createElement('li');
    const p= document.createElement("p");
    p.innerHTML =` <b> ${obj.question} </b>`;
    li.appendChild(p);
    const div= document.createElement("div");
    div.className="inner";
   
    li.appendChild(div);
    ol.appendChild(li);
    form.appendChild(ol);
    obj.options.forEach((option)=>{
        const label=document.createElement('label');
        const input=document.createElement("input")
        input.type="radio";
        input.name=`answer${item+1}`
        input.value=option;
        label.appendChild(input);
        const textNode=document.createTextNode(option);
        label.appendChild(textNode)
        div.appendChild(label);
        
        
    })

})

const div2=document.createElement("div");
div2.className="btn";

const button=document.createElement("button");
const reset=document.createElement("button");
reset.type="reset";
reset.id="re";
reset.innerText="Reset";

button.type="submit";
button.className="submit-btn";
button.innerText="Submit";
div2.appendChild(button);
div2.appendChild(reset);
form.appendChild(div2);


function randomQuestion(){
    // const set =new Set();
    // while(set.size!=5){
    //     const randIdx=Math.floor(Math.random()*cricketQuiz.length);
    //     set.add(cricketQuiz[randIdx]);

    // }
    // return [...set];
  const arr=[];
  let length=cricketQuiz.length;
  for(let i=0;i<5;i++){
    const idx=Math.floor(Math.random()*length);
    arr.push(cricketQuiz[idx]);
    [cricketQuiz[idx],cricketQuiz[length-1]]=[cricketQuiz[length-1],cricketQuiz[idx]]
    length--;
  }
  return arr;

}
const out = document.getElementById("out");
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const data=new FormData(form);
    let result=0;
    for(let [key,value] of data.entries()){{
        

        if(value=== org_ans[key]){
            result++;
        }
    }
        out.innerText=`You got ${result} out of ${questionList.length} correct answers.`;
    }
})
// Reset button functionality
const resetButton = document.getElementById("re");
resetButton.addEventListener("click", () => {
    form.reset();
    out.innerText = "";

})


