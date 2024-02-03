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
  filtering:boolean = false

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

    if (this.python || this.angular || this.typescript || this.csharp || this.css || this.html || this.nodejs || this.javascript || this.mysql ) {
      this.filtering = true;
    }
    else {
      this.filtering = false;
    }

    this.portfolios = this.portfolioService.GetPortfoliosByFilter(filterTags);
  }

  ResetFilters() {
    this.angular = false;
    this.python = false;
    this.csharp = false;
    this.javascript = false;
    this.css = false;
    this.html = false;
    this.nodejs = false;
    this.mysql = false;
    this.typescript = false;
    this.filtering = false;

    this.portfolios = this.portfolioService.GetPortfolios();
  }

}
