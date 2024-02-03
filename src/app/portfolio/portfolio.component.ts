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
  typescript: boolean = false;
  angular: boolean = false;
  python: boolean = false;
  csharp: boolean = false;
  css: boolean = false;
  nodejs: boolean = false;
  html: boolean = false;
  javascript: boolean = false;
  mysql: boolean = false;

  constructor(private titleService: Title, private portfolioService: PortfoliosService) {
    this.titleService.setTitle('Paulin Yonga - Portfolio');
  }
  ngOnInit(): void {
    this.portfolios = this.portfolioService.GetPortfolios();
  }

  Filter() {
    let filterTags: Tag[] = [];

    if(this.typescript) {
      filterTags.push(Tag.TYPESCRIPT);
    }
    if(this.angular) {
      filterTags.push(Tag.ANGULAR);
    }
    if(this.csharp) {
      filterTags.push(Tag.CSHARP);
    }
    if(this.python) {
      filterTags.push(Tag.PYTHON);
    }
    if(this.css) {
      filterTags.push(Tag.CSS);
    }
    if(this.nodejs) {
      filterTags.push(Tag.NODEJS);
    }
    if(this.html) {
      filterTags.push(Tag.HTML);
    }
    if(this.javascript) {
      filterTags.push(Tag.JAVASCRIPT);
    }
    if(this.mysql) {
      filterTags.push(Tag.MYSQL);
    }

    this.portfolios = this.portfolioService.GetPortfoliosByFilter(filterTags);
  }

}
