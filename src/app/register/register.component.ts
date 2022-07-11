import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup
  ageBelow: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      last: ['', [Validators.required]],
      date: ['', [Validators.required]]
    }, {
      // validators:   this.getDateCalculate('date') 
    })
  }
  submitted = false;

  onSubmit(){
    // if (this.registerForm.invalid) {
    //   return;
    // }
    this.submitted = true;
    let date = this.registerForm.value.date
    // console.log(this.registerForm.value)
  }

  get f() {
    return this.registerForm.controls;
  }

  confirmMatch(controlName: string, mathingControlName: string){
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[mathingControlName];
      if(control.value == matchingControl.value){
        matchingControl.setErrors({confirmMatch: true})
      } else {
        matchingControl.setErrors(null)
      }
    }
  }

  getDateCalculate(date: string){
    return (formGroup : FormGroup) => {
      const selectDate = formGroup.controls[date].value;
      // const todayDate = 
      const Time = new Date().getDate() - selectDate.getTime();
      const years = ((Time / (1000 * 3600 * 24)) / 365 );
      if(years > 19) {
        selectDate.setErrors(null)
      } else {
        selectDate.setErrors({dateAbove : true})

      }

    }
  }
   

}

// var date1 = new Date(date);
// var date2 = new Date();
// var Time = date2. getTime() - date1. getTime();
// var years = ((Time / (1000 * 3600 * 24)) / 365);
// // var years = Days/365
// if(years > 18){
//   this.ageBelow = false;
//   console.log("My Age", years)
// } else{
// this.ageBelow = true;

// }