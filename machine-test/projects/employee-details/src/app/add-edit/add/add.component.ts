import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  form_group_var : FormGroup
  submitted : false
  constructor(private form_builder : FormBuilder) 
  { 

  }

  ngOnInit() 
  {
    this.form_group_var = this.form_builder.group({   /// makes d group of all controls in form
      name : this.form_builder.control('',[Validators.required,Validators.minLength(4)]),       ///specifies that name is the control of form builder class
      phone: this.form_builder.control('',[Validators.required,Validators.minLength(10)]),
      address : this.form_builder.control('',Validators.required),
      add2 : this.form_builder.control(''),
      city:this.form_builder.control('',Validators.required),
      postal_code:this.form_builder.control(''),
      
    })
  }
  getValue()
  {
    return this.form_group_var.controls
  }
  onSubmit()
  {
    console.log(this.form_group_var.controls)
   if(this.form_group_var.invalid)
   { return }
   alert('form fields are validated successfully!');
  }
}
