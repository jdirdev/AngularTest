import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student';


@Injectable()
export class StudentsService {


    constructor(private httpClient:HttpClient) {
    }

    getPersons(): Array<any> {

      let persons: Array<any> = [];
      for(let index=0; index<20; index++ ) {
        persons.push({name: "Nombre", lastname: "Apellido", documenttype:"cc", document:"8888", country:"Bogota"});
      }
      for(let index=0; index<30; index++ ) {
        persons.push({name: "Ted", lastname: "Test", documenttype:"cc", document:"8888", country:"Bogota"});
      }
      return persons;
    }

    getStudents(): Observable<Array<Student>> {
        const url: string = "http://localhost:9000/mydrupal/API/formulario";
        return this.httpClient.get<Array<Student>>(url);
    }

}