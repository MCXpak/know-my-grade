let gradeInputCounter = 1;
let moduleInputCounter = 1;


function addGradeInputs(previousGradeInput){ //function to create new grade input
    gradeInputCounter += 1;

    let parent = document.getElementById(previousGradeInput); 
    
    let gradeDiv = document.createElement("div");
    gradeDiv.className = "grade-div";

    const gradeInput = "gradeInput" + gradeInputCounter.toString();
    console.log("Next: " + gradeInput)

    let inputs = document.createElement("div");
    inputs.className = "inputs"

    let markInput = document.createElement("input");
    let weightInput = document.createElement("input");
    let creditInput = document.createElement("input");
    markInput.type = "text";
    weightInput.type= "text";
    creditInput.type = "text";
    markInput.className = "grade-input";
    weightInput.className = "weight-input";
    creditInput.className = "grade-credit";
    markInput.placeholder = "0-100";
    weightInput.placeholder = "%";
    creditInput.placeholder = "15"

    let addGradeDiv = document.createElement("div");
    let minusGradeDiv = document.createElement("div");
    addGradeDiv.className = "grade-button"
    minusGradeDiv.className = "grade-button"

    addGradeDiv.innerHTML = '<button class="add-grade" onclick=addGradeInputs("'+ gradeInput +'")><i class="fa-solid fa-plus"></i></button></div>'
    minusGradeDiv.innerHTML = '<button class="minus-grade" onclick=removeGradeInputs("'+ gradeInput +'")><i class="fa-solid fa-minus"></i></button>'
    
    inputs.appendChild(markInput);
    inputs.appendChild(weightInput);
    inputs.appendChild(creditInput);

    gradeDiv.appendChild(inputs);
    gradeDiv.appendChild(addGradeDiv);
    gradeDiv.appendChild(minusGradeDiv);
    
    gradeDiv.id = gradeInput;
    console.log("New ID: " + gradeDiv.id)
    
    parent.after(gradeDiv);
    
};

function addModule(previousModuleInput){
    moduleInputCounter = 1;
    let parent = document.getElementById(previousModuleInput);
    let newModule = parent.cloneNode(true);
    newModule.id = "module2"
    parent.after(newModule)
    
}

function removeGradeInputs(gradeInput){
    //deal with all inputs disappearing after minusing them all XD
    let div = document.getElementById(gradeInput)
    div.remove();
}

//Function to calculate grade
function calcGrade(){
    let grades = [];
    let weights = [];
    let weightedSum = 0

    let gradesLen = document.getElementsByClassName("grade-input").length;
    for (let index = 0; index < gradesLen; index++){
        grades[index] = Number(document.getElementsByClassName("grade-input")[index].value);
        weights[index] = Number(document.getElementsByClassName("weight-input")[index].value)/100; //convert weight percentage to decimal for easier calculation
    };

    for(let index = 0; index<gradesLen; index++){
        weightedSum += grades[index]*weights[index]
    }

    //const avg = weightedSum/grades.length;
    //const roundedAvg = Math.round((avg + Number.EPSILON) * 100) / 100; //round to 2dp
    document.getElementById("grade-output").innerHTML = "Grade: " + weightedSum;
}
