const grInputs = ["grInput1"];

let grInputCounter = 1;

function addGradeInputs(parentGrInput){
    grInputCounter += 1;

    let parent = document.getElementById(parentGrInput);
    var ok = true;
    if (ok === true) {
        var gradeDiv = document.createElement("div");
        gradeDiv.className = "grade-div";

        const grInput = "grInput" + grInputCounter.toString();
        console.log("Next: " + grInput)

        var inputs = document.createElement("div");
        inputs.className = "inputs"

        var markInput = document.createElement("input");
        var weightInput = document.createElement("input");
        var creditInput = document.createElement("input");
        markInput.type = "text";
        weightInput.type= "text";
        creditInput.type = "text";
        markInput.className = "grade-input";
        weightInput.className = "weight-input";
        creditInput.className = "grade-credit";
        markInput.placeholder = "0-100";
        weightInput.placeholder = "%";
        creditInput.placeholder = "15"

        var addGradeDiv = document.createElement("div");
        var minusGradeDiv = document.createElement("div");
        addGradeDiv.className = "grade-button"
        minusGradeDiv.className = "grade-button"

        addGradeDiv.innerHTML = '<button class="add-grade" onclick=addGradeInputs("'+ grInput +'")><i class="fa-solid fa-plus"></i></button></div>'
        minusGradeDiv.innerHTML = '<button class="minus-grade" onclick=removeGradeInputs("'+ grInput +'")><i class="fa-solid fa-minus"></i></button>'
        
        inputs.appendChild(markInput);
        inputs.appendChild(weightInput);
        inputs.appendChild(creditInput);

        gradeDiv.appendChild(inputs);
        gradeDiv.appendChild(addGradeDiv);
        gradeDiv.appendChild(minusGradeDiv);
        
        gradeDiv.id = grInput;
        console.log("New ID: " + gradeDiv.id)
        
        parent.after(gradeDiv);
        //let gradeContainer = document.getElementById("grades");
        //grades.insertBefore(gradeDiv, parent)
        //insertAfter(gradeDiv, gradeContainer);
    }
};

function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

/*function insertAfter(referenceNode, newNode) {
    referenceNode.previousSibling.insertBefore(newNode, referenceNode.nextSibling);
  }*/

function removeGradeInputs(grInput){
    //deal with all inputs disappearing after minusing them all XD
    let div = document.getElementById(grInput)
    div.remove();
}

function calcGrade(){
    let grades = [];

    gradesLen = document.getElementsByClassName("grade-input").length;
    for (let grade = 0; grade < gradesLen; grade++){
        grades[grade] = Number(document.getElementsByClassName("grade-input")[grade].value);
    };
    console.log(grades);
    const gradeSum = grades.reduce((a, b) => a+b);
    const avg = gradeSum/grades.length;
    document.getElementById("grade-output").innerHTML = "Grade: " + avg;
}
