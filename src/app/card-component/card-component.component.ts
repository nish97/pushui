import { Component, OnInit, Input } from '@angular/core';
import { StudentService } from '../student.service';
import { IBatch } from '../batch';


@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css']
})
export class CardComponentComponent implements OnInit {

  lstBatch: IBatch[];

  constructor(private _studentService: StudentService) {
  }

  public request: any = {
    "request":
    {
      "filters":
      {
        "createdBy": "6f324db7-32a5-4437-a451-35cf53269aaf",
        "courseId": "do_2127173869113180161668"
      }
    }
  };
  public _url: string = 'course/v1/batch/list';
  ngOnInit() {
    this._studentService.getList(this.request, this._url).subscribe(data => { this.lstBatch = data; });
  }


}
