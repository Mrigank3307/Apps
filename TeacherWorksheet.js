class createWorksheet {
    constructor () {
 this.firstQuestion = createElement ('h3');
 this.firstInput = createInput ("Enter question")
 this.firstAnswer = createInput ("Enter correct answer");

 this.submitButton = createButton ("Submit");

 this.note = createElement ('h2');

 //this.secondQuestion = createElement ('h6');
 //this.secondInput = createInput ("Enter question")
 //t/his.secondAnswer = createInput ("Enter correct answer");

 //this.thirdQuestion = createElement ('h6');
 //this.thirdInput = createInput ("Enter question")
 //this.thirdAnswer = createInput ("Enter correct answer");

 this.fQ = null;
 this.fA = null;

    }

   process() {

writeIndex (responderCount);
this.readIndex(clash+subject + "Count");
 this.getAnswers();
this.writeQuestion(1 , this.fQ , this.fA);
this.updateIndex(); 
writeIndex(responderCount);

}

   

  readIndex (testCount) {
    var playerCountRef = database.ref("count/" + testCount + "/Count");
    playerCountRef.on("value",function (data){
      responderCount = data.val();
    }) 
  }

  getAnswers () {
     this.fQ = this.firstInput.value();
     this.fA = this.firstAnswer.value(); 
  }

  //writeIndex (count) {
   // database.ref('/').update({
    //  testCount:count
   // });   
  //}

writeQuestion(no , f , q) {
    video = responderCount + 1;
    var sup = clash + subject
    console.log(video);
    var question = "worksheet/" + clash+subject + "/"  + video + "/" + no;
    database.ref (question).set ({
question : f ,
answer : q
    })
}

updateIndex () {
    responderCount = responderCount + 1
}

hid () {
  this.firstQuestion.hide();
  this.firstInput.hide();
  this.firstAnswer.hide();
  this.submitButton.hide();
}

    display() {
        this.note.html ("Please click the submit button twice after writing all the questions and answers")
this.firstQuestion.html ("Input a question (Fill in the blank)")
this.firstQuestion.position (30,10);
this.firstInput.position (30,60);
this.firstAnswer.position(30,90)
this.submitButton.position (40 , 125)


    }
}