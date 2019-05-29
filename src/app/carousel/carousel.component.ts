import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.css"]
})
export class CarouselComponent implements OnInit {
  public bid = ["B1", "B2", "B3", "B4", "B5","B6","B7","B8"];
  constructor() {}

  ngOnInit() {
  }
 }

