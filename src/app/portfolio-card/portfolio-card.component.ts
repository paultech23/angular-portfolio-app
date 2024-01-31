import { Component, Input } from '@angular/core';
import { Portfolio } from '../_models/Portfolio';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { PortfolioModalComponent } from '../portfolio-modal/portfolio-modal.component';

@Component({
  selector: 'app-portfolio-card',
  templateUrl: './portfolio-card.component.html',
  styleUrls: ['./portfolio-card.component.css']
})
export class PortfolioCardComponent {
  @Input() portfolio = {} as Portfolio;
  bsModalRef?: BsModalRef;

  constructor(private modalService: BsModalService) {

  }

  openPortfolioModal() {
    const modalOptions: ModalOptions = {
      class: "modal-lg",
      initialState: {
        portfolio: this.portfolio
      }
    };
    this.bsModalRef = this.modalService.show(PortfolioModalComponent, modalOptions);
  }
}
