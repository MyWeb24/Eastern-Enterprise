import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../data-service';
import { Employee } from '../../domain';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  form_group_var : FormGroup
  submitted : false

  my_array : Array<Employee>

  constructor(private form_builder : FormBuilder,
              private activated_route : ActivatedRoute,
              private dataService : DataService) {}

  ngOnInit() 
  {
   // this.dataService.service_event.subscribe()
    console.log(this.my_array)

    this.activated_route.params.subscribe(url => console.log(url))

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
