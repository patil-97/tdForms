import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  constructor() { }
  @ViewChild('signUp') signUp !: NgForm
  ngOnInit(): void {
  }

  onFormSubmit(){
    if(this.signUp.valid){
      console.log(this.signUp.value)
      this.signUp.reset();
    }
  }

  moc = [
    {
      moCommunication : "Email",
      id : "mocEmail"
    },
    {
      moCommunication : "Phone",
      id : "mocPhone"
    }
  ];

  user ={
    "userInfo": {
        "username": "suresh",
        "email": "sureshpatil.svp@gmail.com"
    },
    "isSubscribed": true,
    "question": "sport",
    "moc" : "Phone",
    "answer": "chess",
    "userId": "1"
}

  onBtnClick(){
    this.signUp.form.patchValue(this.user);
  }

}
