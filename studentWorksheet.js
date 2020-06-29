class studentWorksheet{
    constructor () {
this.firstQuestion = createElement('h4');

    }

    startForm () {
        form = new Form ();
        form.display ();
        form.subjectHtml.html ("Please specify the subject of the worksheet you want to attempt");
        form.classHtml.html ("Which class are you in?");
        studentQuestion = createElement();
        studentQuestion.html ("Please write which attempt of yours this is");
        form.buttonSubmit.position (10 , 300)
        studentQuestion.position (10 , 210);
        studentInput = createInput ("1");
        studentInput.position (10,240);
    }

getQuestion(number , studentA) {
 
    questionInput.position (10,60)
    var players = database.ref("worksheet/" + clash+subject + "/" + studentA + "/" + number + "/question");
    players.on("value",function (data){
      fq = data.val();
    }) 
    this.firstQuestion.html (fq)
    this.firstQuestion.position (10,10)
}

getAnswer(number , studentB) {
    var playerCoun = database.ref("worksheet/" + clash+subject + "/" + studentB + "/" + number + "/answer");
    playerCoun.on("value",function (data){
       firstAns = data.val();
    }) 
}

hide () {
    studentQuestion.hide()
    studentInput.hide();
}

checking () {
  //  this.getAnswer (1 , studentAnswer);
    ar = questionInput.value()
    this.check();
    }

check () {
   // prompt ("hello");
   
    if (ar == firstAns) {
        prompt ("You are correct")
    }
    else if (ar !== firstAns) {
    prompt ("You are wrong")
    }
}



    display () {

    }    
}