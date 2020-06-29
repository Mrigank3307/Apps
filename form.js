class Form {
    constructor () {
this.subjectButton = createRadio();
this.subjectHtml = createElement('h4');
this.classButton = createSelect() 
this.classHtml = createElement ('h4')
this.buttonSubmit = createButton("Submit");
    }

    Checked () {
        subject = this.subjectButton.value(); 
        clash = this.classButton.value()
        console.log (subject)
        console.log (clash)
     }

display () {
    this.subjectHtml.html ("Please specify the subject of the worksheet");
this.subjectHtml.position (10,10);

    this.subjectButton.option ('Math')
    this.subjectButton.option ("Science");
    this.subjectButton.position (10,60)

this.classHtml.html ("Please specify the class this worksheet is for");
this.classHtml.position (10 , 110);

this.classButton.option ('1-5' , 'Junior');
this.classButton.option ('6-8' , 'Middle');
this.classButton.option ('9-12' , 'Senior');
this.classButton.position (10,160)

this.buttonSubmit.position (10 , 200);


}

hi () {
    this.subjectButton.hide();
    this.subjectHtml.hide();
    this.classButton.hide()
    this.classHtml.hide();
    this.buttonSubmit.hide();
}



}