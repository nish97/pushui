import { Component, OnInit } from "@angular/core";
import { IBatch } from '../batch';
import { StudentService } from '../student.service';
import { MessageService } from '../message.service';

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.css"]
})
export class CarouselComponent implements OnInit {
  // public bid = ["B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8"]
  private lstBatch: IBatch[] = [];
  private participants = {};
  public _url: string = 'course/v1/batch/list';
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

  constructor(private _studentService: StudentService, private _messageService: MessageService) { }

  ngOnInit() {
    this._studentService.getList(this.request, this._url).subscribe(data => { this.push(data); });
  }

  send() {
    this._messageService.broadcast(this.participants);
  }

  push(data: any) {
    this.lstBatch = data.result.response.content;
    console.log("list:", this.lstBatch);
  }

  selectedBatches(batch: IBatch, values: any) {
    if (values.currentTarget.checked && batch.participant != null) {
      this.participants[batch.id] = Object.keys(batch.participant);
      console.log("BatchParticipants:", this.participants);
      this.send();
    }
    else if (!values.currentTarget.checked && batch.participant != null) {
      delete this.participants[batch.id];
      console.log("BatchParticipantsafterDeletion:", this.participants);
      this.send();
    }
  }

}
