import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PortfoliosService } from '../_services/portfolios.service';
import { Portfolio } from '../_models/Portfolio';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  featuredPortfolio = {} as Portfolio;

  constructor(private titleService: Title, private portfolioService: PortfoliosService) {
    this.titleService.setTitle('Paulin Yonga - Home');
  }
  ngOnInit(): void {
    this.featuredPortfolio = this.portfolioService.GetPortfolioById(2);
  }

}
