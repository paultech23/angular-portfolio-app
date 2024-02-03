import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Portfolio } from '../_models/Portfolio';
import { Tag } from '../_models/Tag';
import { PortfoliosService } from '../_services/portfolios.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit{

  portfolios = {} as Portfolio[];

  isCollapsed: boolean = true;

  constructor(private titleService: Title, private portfolioService: PortfoliosService) {
    this.titleService.setTitle('Paulin Yonga - Portfolio');
  }
  ngOnInit(): void {
    this.portfolios = this.portfolioService.GetPortfolios();
  }

}
