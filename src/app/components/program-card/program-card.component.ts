import { Component, Input, OnInit } from '@angular/core';
import { ProgramCardModel } from 'src/app/model/ProgramCardModel';

@Component({
  selector: 'app-program-card',
  templateUrl: './program-card.component.html',
  styleUrls: ['./program-card.component.scss']
})
export class ProgramCardComponent implements OnInit {
  @Input() programObj:ProgramCardModel;

  constructor() { }

  ngOnInit(): void {
  
  }

}
