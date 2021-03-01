var Jamb_Score = document.getElementById("Jscore");
var PU_Score = document.getElementById("PUscore");
var btn = document.getElementById("button1");
var btn2 = document.getElementById("button2");
var btn3 = document.getElementById("button3");
let numberForm = document.querySelector('#number_form');


document.getElementById('subjdetails').style.visibility = 'hidden';
document.getElementById('btns').style.visibility = 'hidden';


numberForm.addEventListener('submit', (e)=>{
    document.getElementById('subjdetails').style.visibility = 'visible';
    document.getElementById('btns').style.visibility = 'visible';

    e.preventDefault() //This would prevent the default behavior of form submission
    let numberofCourses = parseInt(document.querySelector('#Subjgrade').value)
    document.querySelector('.form').querySelector('.form-group').remove()
    for(let i = 0; i<numberofCourses; i++){
        let formGroup = document.createElement('div');
        var grade = document.createElement('input');
        grade.type = 'text';
        grade.className = 'form-control mb-3';
        grade.placeholder = 'Enter your Waec grade....'
        grade.id = `grade_${i}`;
        let label = document.createElement('h6');
        label.textContent = `Waec Subject grade ${i+1}`;
        label.style.color = 'blanchedalmond';
        formGroup.appendChild(document.createElement('hr'));
        formGroup.append(label)
        formGroup.appendChild(grade);
        document.querySelector('.form').appendChild(formGroup);
    }
})


btn2.addEventListener('click', function(){
    let grade_by_subj;
    let total_grade = 0;
    let Aggre_score, totalJamb_score, totalPU;


    let numberofCourses = (document.querySelector('#Subjgrade').value);
    for(let i = 0; i < numberofCourses; i++){
        let score = (document.querySelector(`#grade_${i}`).value);
         
        if(score == "A1"){
            grade_by_subj = 4.0;
        }else if (score == "B2"){
            grade_by_subj = 3.6;
        }else if(score == "B3"){
            grade_by_subj = 3.2;
        }else if(score == "C4"){
            grade_by_subj = 2.8;
        }else if(score == "C5"){ 
              grade_by_subj = 2.4;
        }else if(score == "C6"){ 
              grade_by_subj = 2.0;
        }else if(score == "D7"){ 
              grade_by_subj = 1.4;
        }else if(score == "E8"){ 
              grade_by_subj = 1.0;
        }else {  grade_by_subj = 0.0;
        }
               
        total_grade +=  grade_by_subj;
  }

          totalJamb_score = Jamb_Score.value / 8;
            totalPU = parseInt(PU_Score.value);
          
          console.log(totalPU);
          console.log(totalJamb_score);
          console.log(total_grade);

        Aggre_score =  totalJamb_score + total_grade + totalPU;
    
    function showMessage() {
    let message = 'Your Aggregate Score is ' + Aggre_score;
    alert(message);
    }

    showMessage();  
});
   

btn3.addEventListener('click', function(){
    location.reload();

    document.getElementById("number_form").reset();
    document.getElementById("formgroup").reset();
})                
