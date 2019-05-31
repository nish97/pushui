import { Component, OnInit, OnDestroy } from '@angular/core';
import { StudentService } from '../student.service';
import { IStudent } from '../student';
import { MessageService } from '../message.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit, OnDestroy {
  public students: any = {
    "request": {
      "filters": {
        "userId": [ ]
      }
    }
  };
  _url: string = 'user/v1/search';
  private lstStudent: IStudent[] = [];
  private sltStudent: IStudent[] = [];
  private subscription: Subscription;

  constructor(private _studentService: StudentService, private messageService: MessageService) { }

  ngOnInit() {
    this._studentService.getList(this.students, this._url).subscribe(data => { this.pushList(data); });
    this.subscription = this.messageService.getMessage().subscribe((payload) => {
      console.log("values", Object.values(payload.payload));
      this.subscribe(Object.values(payload.payload));
    });
  }

  subscribe(user) {
    let userList = [];
    let users:string;
      user.map(x => x.forEach(x => userList.push(x)));
      let userObj:any= {
        "request": {
          "filters": {
            "userId":[   ]
          }
        }
      };
      userObj.request.filters.userId = userList;
      console.log("userIds:", userObj);
      this.HttpRequest(userObj);
  }

  FieldsChange(student: IStudent, values: any) {
    if (values.currentTarget.checked) {
      this.sltStudent.push(student);
      console.log(this.sltStudent);
    }
    else if (!values.currentTarget.checked) {
      this.sltStudent = this.sltStudent.filter(ele => ele.id != student.id);
      console.log(this.sltStudent);
    }
  }

  HttpRequest(students:object) {
    this._studentService.getList(students, this._url).subscribe(data => { this.pushList(data); });
  }

  pushList(data: any) {
    console.log("StudentList:", data.result.response.content);
    this.lstStudent = data.result.response.content;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
