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
        "userId": [
          "2ea37912-ce7d-44c0-8816-34be186ad05c",
          "6f324db7-32a5-4437-a451-35cf53269aaf"
        ]
      }
    }
  };
  _url: string = 'user/v1/search';
  private lstStudent: IStudent[] = [];
  private sltStudent: IStudent[] = [];
  private subscription: Subscription;
  private messages = [];
  // public Student = [
  //   {
  //     "userName": "jaswanth",
  //     "emailVerified": "abc@gmail.com",
  //     "firstName": "batch1",
  //     "id": "B1"
  //   },
  //   {
  //     "userName": "sai",
  //     "emailVerified": "def@gmail.com",
  //     "firstName": "batch1",
  //     "id": "B1"
  //   },
  //   {
  //     "userName": "balu",
  //     "emailVerified": "balu@gmail.com",
  //     "firstName": "batch1",
  //     "id": "B1"
  //   },
  //   {
  //     "userName": "jaswanth",
  //     "emailVerified": "stackroute@gmail.com",
  //     "firstName": "batch2",
  //     "id": "B2"
  //   },
  //   {
  //     "userName": "josh",
  //     "emailVerified": "josh@gmail.com",
  //     "firstName": "batch3",
  //     "id": "B3"
  //   },
  //   {
  //     "userName": "josh",
  //     "emailVerified": "josh@gmail.com",
  //     "firstName": "batch3",
  //     "id": "B3"
  //   },
  //   {
  //     "userName": "josh",
  //     "emailVerified": "josh@gmail.com",
  //     "firstName": "batch3",
  //     "id": "B3"
  //   },
  //   {
  //     "userName": "josh",
  //     "emailVerified": "josh@gmail.com",
  //     "firstName": "batch3",
  //     "id": "B3"
  //   },
  //   {
  //     "userName": "josh",
  //     "emailVerified": "josh@gmail.com",
  //     "firstName": "batch3",
  //     "id": "B3"
  //   },
  // ];
  constructor(private _studentService: StudentService, private messageService: MessageService) { }

  ngOnInit() {
    this._studentService.getList(this.students, this._url).subscribe(data => { this.pushList(data); });
    this.subscription = this.messageService.getMessage().subscribe((payload) => {
      this.messages.concat(Object.values(payload.payload));
      console.log("values",Object.values(payload.payload));
      this.subscribe();
    });
  }

  subscribe(){
    // this.subscription = this.messageService.getMessage().subscribe((payload) => {
    //   this.messages.concat(Object.values(payload));
    // });

    this.students = {
      "request": {
        "filters": {
          "userId": [
            this.messages
          ]
        }
      }
    };
    console.log("studentsfromBatch", this.students);
    this.HttpRequest();
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

  HttpRequest() {
    this._studentService.getList(this.students, this._url).subscribe(data => { this.pushList(data); });
  }

  pushList(data: any) {
    console.log("StudentList:", data.result.response.content);
    this.lstStudent = data.result.response.content;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
