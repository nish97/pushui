import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { IStudent } from '../student';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  public students:any =
    {
      "request": {
          "filters": {
              "userId": [
                  "2ea37912-ce7d-44c0-8816-34be186ad05c",
                  "6f324db7-32a5-4437-a451-35cf53269aaf"
              ]
          }
      }
    };
  _url:string = 'user/v1/search';
  private lstStudent: IStudent[];
  constructor(private _studentService: StudentService) { }

  push(data: { result: { response: { content: IStudent[]; }; }; }){
    this.lstStudent =data.result.response.content;
    console.log("listStudent : ",this.lstStudent);
  }

  ngOnInit() {
    this._studentService.getStudents(this.students,this._url).subscribe(data=>{this.push(data);});
  }
}
