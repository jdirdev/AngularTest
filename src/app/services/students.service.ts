import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student';


@Injectable()
export class StudentsService {


    constructor(private httpClient:HttpClient) {
    }

    getStudents(): Observable<Array<Student>> {
        const url: string = "http://localhost:9000/mydrupal/API/formulario";
        return this.httpClient.get<Array<Student>>(url);
    }

}
