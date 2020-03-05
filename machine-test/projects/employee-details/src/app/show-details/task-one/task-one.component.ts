import { Component, OnInit } from '@angular/core';
import { Employee } from '../../domain';
import { Router } from '@angular/router';
import { DataService } from '../../data-service';

@Component({
  selector: 'app-task-one',
  templateUrl: './task-one.component.html',
  styleUrls: ['./task-one.component.css']
})
export class TaskOneComponent implements OnInit {

 

data : Array<Employee> = [
  { id : 1,name : 'Jhon',phone : 9999999999,
    full_address : [
      { city : 'Pune',add1: 'ABC Road',add2: 'XYZ Building',postal_code : '12455' }
    ]
   },

   { id : 2,name : 'Jacob',phone : Number('AZ99A99PQ9'),
   full_address : [
     { city : 'Pune',add1: 'PQR Road',add2: 'ABC Building',postal_code : '13455' }
   ]
  },

  { id : 3,name : 'Ari',phone : 145458522,
  full_address : [
    { city : 'Mumbai',add1: 'ABC Road',add2: 'XYZ Building',postal_code : '12455' }
  ]
 }
]
my_data : Array<Employee>
  my_array: Employee[];
   constructor(private router : Router,private data_service : DataService) 
   { }

  ngOnInit() {
    this.my_data = this.data
    this.data_service.service_event.emit(this.data[name])
    console.log(this.my_data)
  }
  onClick()
  {
   this.router.navigate(['task_two'])
  }
}
