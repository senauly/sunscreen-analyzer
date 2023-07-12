import { Category } from "./category.model";

export class Results {
    [key: string]: any;
    hybrid: Category;
    mineral: Category;
    chemical: Category;
    UVA1: Category;
    UVA2: Category;
    UVB: Category;
    UVC: Category;
    
    constructor(hybrid: Category, mineral: Category, chemical: Category, UVA1: Category, UVA2: Category, UVB: Category, UVC: Category) {
        this.hybrid = hybrid;
        this.mineral = mineral;
        this.chemical = chemical;
        this.UVA1 = UVA1;
        this.UVA2 = UVA2;
        this.UVB = UVB;
        this.UVC = UVC;
    }
    
    addHybrid(hybrid: string) {
        this.hybrid.filters.push(hybrid);
    }

    addMineral(mineral: string) {
        this.mineral.filters.push(mineral);
    }

    addChemical(chemical: string) {
        this.chemical.filters.push(chemical);
    }

    addUVA1(UVA1: string) {
        this.UVA1.filters.push(UVA1);
    }

    addUVA2(UVA2: string) {
        this.UVA2.filters.push(UVA2);
    }

    addUVB(UVB: string) {
        this.UVB.filters.push(UVB);
    }

    addUVC(UVC: string) {
        this.UVC.filters.push(UVC);
    }
}