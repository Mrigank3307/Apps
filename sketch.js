var database , canvas , gameState , teacherButton , studentButton ,y , inputBox , index = 0 , responderCount , hello , video , responde , responder , array = [];
var groupName , responderCoun = [];
var responder1,responder2 , responder3 , responder4
var subject  , clash , x , form;
var studentInput , studentQuestion , studentAnswer , fq;
var questionInput , firstAns , ar;

function setup() {
 canvas =  createCanvas(displayWidth - 2000 , displayHeight - 3000);
  database = firebase.database();
  gameState = "menu";
  y = 50;

  teacherButton = createButton(" I am a teacher");
teacherButton.style ( 'font-size' , '40px') 
teacherButton.style ('background-color' , "black" );
teacherButton.style ('color' , "white" );
teacherButton.style ('size' , "100");

studentButton = createButton(" I am a student");
studentButton.style ( 'font-size' , '40px') 
studentButton.style ('background-color' , "black" );
studentButton.style ('color' , "white" );
studentButton.style ('size' , "100");
groupName = createGroup();
}

function draw() {
  background("white");  
  
 

  if (gameState === "menu") {
teacherButton.position (displayWidth/2 - 100 , displayHeight /2);
studentButton.position (displayWidth/2 - 100 , displayHeight /2 - 100);

teacherButton.mousePressed (() => {
  form = new Form();
  form.display();
  //worksheet = new createWorksheet ();
  gameState = "form"
 
hide();
teacherButton.hide();
studentButton.hide();

});

studentButton.mousePressed (() => {
  hide();

  studentWork = new studentWorksheet();
studentWork.startForm();

gameState = "studentForm"
//studentWork.getWorksheets();
});

}

else if (gameState === "form") {
//form.Checked()

form.buttonSubmit.mousePressed (() => {
  form.Checked();
  worksheet = new createWorksheet ();
form.hi()
  gameState = "teacher";

})
}

else if (gameState === "teacher")  {
  worksheet.display();

   worksheet.submitButton.mousePressed (() => {
    worksheet.readIndex(clash+subject + "Count");
   worksheet.process();
   
})
}
else if (gameState === "studentForm") {
  form.buttonSubmit.mousePressed (() => {
    form.Checked();
    studentAnswer = studentInput.value();
    studentWork = new studentWorksheet();
    studentWork.hide();
  form.hi();
  questionInput = createInput ("Enter answer...");
    gameState = "student";
    form.submit = createButton("Submit Your Answer");
    form.submit.position (10,110)
  })
  
}

else if (gameState === "student") {
 
  studentWork.getQuestion (1 , studentAnswer);
  studentWork.getAnswer (1 , studentAnswer);
 
  form.submit.mousePressed (()=> {
    studentWork.checking();
   // studentWork.check();
    console.log (ar , firstAns) 
  })

 

}

if (true) {
 
} 



 drawSprites();
  }

function write (whatecer , message , hello) {
  var what = whatecer
    database.ref(what).set({
    hello : message
    });
  }

    function hide () {
      studentButton.hide();
  teacherButton.hide()
    }

 

    function writeIndex (count) {
      x = clash+subject + "Count"
      database.ref("count/" + x).update({
       Count:count 
      });   
    }
