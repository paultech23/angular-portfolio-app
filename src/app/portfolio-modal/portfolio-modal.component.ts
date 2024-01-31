import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Portfolio } from '../_models/Portfolio';

@Component({
  selector: 'app-portfolio-modal',
  templateUrl: './portfolio-modal.component.html',
  styleUrls: ['./portfolio-modal.component.css']
})
export class PortfolioModalComponent {
  portfolio = {} as Portfolio;

  constructor(public bsModalRef: BsModalRef) {
    
  }

}
