import { Tag } from "./Tag";

export interface Portfolio {
    id: number;
    name: string;
    summary: string;
    description: string;
    portfolioLink: string;
    pictures: string[];
    tags: Tag[];
}