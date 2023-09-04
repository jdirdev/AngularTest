import { Component } from '@angular/core';
import { StudentsService } from '../../services/students.service';
import { Student } from 'src/app/models/student';
import { Observable } from 'rxjs';
import { SocketService } from '../../services/socket.service';

@Component({
  selector: 'test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css']
})
export class TestListComponent {

  public page: number = 1;
  public pageSize: number = 10;
  public filteredString: string = "";
  public pageSizes: Array<number> = [];

  public students: Array<any> = [];
  public loadStudents: Observable<Student[]>; 

  constructor(private studentsService: StudentsService, private socketService: SocketService) {
    this.pageSizes = [10, 50, 100];
    this.loadStudents = this.studentsService.getStudents();

    this.socketService.connectToServer('changeFilter').subscribe((data) => {
      console.log(data);
    });
  }

  ngAfterViewInit() {

    this.loadStudents.subscribe((resp: Array<any>) => {
      this.students = resp;
    });
  }

  onChangeFilter(event: any) {
    this.filteredString = event.target.value;
    this.socketService.emitToServer('changeFilter', event.target.value);
  }

  onChangePageSize(event: any) {
    this.pageSize = Number(event.target.value);
  }
}
