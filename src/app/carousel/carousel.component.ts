import { Component, OnInit } from "@angular/core";
import { IBatch } from '../batch';
import { StudentService } from '../student.service';
@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.css"]
})
export class CarouselComponent implements OnInit {
  // public bid = ["B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8"]
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

  push(data:any){
    console.log("BatchList:",data);
    this.lstBatch = data.result.response.content;
  }

  ngOnInit() {
    this._studentService.getList(this.request, this._url).subscribe(data => { this.push(data);});
  }
}
