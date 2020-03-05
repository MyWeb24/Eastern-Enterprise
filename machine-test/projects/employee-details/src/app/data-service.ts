import { Injectable, EventEmitter } from '@angular/core';
import { Employee } from './domain';

@Injectable({providedIn : 'root'})

export class DataService{
    service_event : EventEmitter<Employee> = new EventEmitter()
    constructor()
    {

    }

}