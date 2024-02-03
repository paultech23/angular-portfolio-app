import { Injectable } from '@angular/core';
import { Portfolio } from '../_models/Portfolio';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class PortfoliosService {

  portfolios: Portfolio []= [
    {id: 0, name: "Python Portfolio", pictures: ["../../assets/img1.png","../../assets/img2.png","../../assets/img3.png"], portfolioLink: "//www.github.com", summary: "Python portfolio summary.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ", tags: [Tag.PYTHON]},
    {id: 1, name: "CSS Portfolio", pictures: ["../../assets/img1.png","../../assets/img2.png","../../assets/img3.png"], portfolioLink: "//www.github.com", summary: "CSS portfolio summary.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ", tags: [Tag.CSS]},
    {id: 2, name: "C# Portfolio", pictures: ["../../assets/img1.png","../../assets/img2.png","../../assets/img3.png"], portfolioLink: "//www.github.com", summary: "C# portfolio summary.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ", tags: [Tag.CSHARP, Tag.TYPESCRIPT, Tag.CSS]},
    {id: 3, name: "HTML Portfolio", pictures: ["../../assets/img1.png","../../assets/img2.png","../../assets/img3.png"], portfolioLink: "//www.github.com", summary: "HTML portfolio summary.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ", tags: [Tag.HTML]},
    {id: 4, name: "JavaScript Portfolio", pictures: ["../../assets/img1.png","../../assets/img2.png","../../assets/img3.png"], portfolioLink: "//www.github.com", summary: "JavaScript portfolio summary.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ", tags: [Tag.JAVASCRIPT, Tag.CSS, Tag.HTML]},
    {id: 5, name: "MySQL Portfolio", pictures: ["../../assets/img1.png","../../assets/img2.png","../../assets/img3.png"], portfolioLink: "//www.github.com", summary: "MySQL portfolio summary.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ", tags: [Tag.MYSQL]},
    {id: 6, name: "Node.js Portfolio", pictures: ["../../assets/img1.png","../../assets/img2.png","../../assets/img3.png"], portfolioLink: "//www.github.com", summary: "Node.js portfolio summary.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ", tags: [Tag.NODEJS]},
    {id: 7, name: "TypeScript Portfolio", pictures: ["../../assets/img1.png","../../assets/img2.png","../../assets/img3.png"], portfolioLink: "//www.github.com", summary: "TypeScript portfolio summary.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ", tags: [Tag.TYPESCRIPT, Tag.ANGULAR]},
    {id: 8, name: "Angular Portfolio", pictures: ["../../assets/img1.png","../../assets/img2.png","../../assets/img3.png"], portfolioLink: "//www.github.com", summary: "Angular portfolio summary.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ", tags: [Tag.ANGULAR]},
  ];

  constructor() { }

  GetPortfolios() {
    return this.portfolios;
  }

  GetPortfolioById(id: number) : Portfolio {
    let portfolio = this.portfolios.find((portfolio: { id: number; }) => portfolio.id === id);

    if (portfolio === undefined) {
      throw new TypeError('There is no Portfolio that matches this id:' + id);
    }

    return portfolio;
  }

  GetPortfoliosByFilter(filterTags: Tag[]) {
    let filteredPortfolios: Portfolio[] = [];
    this.portfolios.forEach(function(portfolio) {
      let foundAll = true;

      filterTags.forEach(function (filterTag) {
        if (portfolio.tags.includes(filterTag) == false) {
          foundAll = false;
        }
      });
      
      if (foundAll) {
        filteredPortfolios.push(portfolio);
      }
    });

    return filteredPortfolios;

  }

}
