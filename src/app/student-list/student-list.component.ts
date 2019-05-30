import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { IStudent } from '../student';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
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
  private lstStudent: IStudent[];
  private sltStudent: IStudent[];
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
  constructor(private _studentService: StudentService) { }

  FieldsChange(student: IStudent, values: any) {
    if (values.currentTarget.checked)
      this.sltStudent.push(student);
    else if (!values.currentTarget.checked) {
      this.sltStudent.filter(function(ele) {
        return ele.id != student.id;
      });
    }
  }

  push(data:any){
    this.lstStudent=data.result.reponse.content;
  }

  ngOnInit() {
    this._studentService.getList(this.students, this._url).subscribe(data => { this.push(data); });
  }
}
