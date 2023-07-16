import { Category } from "./category.model";

export class Results {
    [key: string]: any;
    hybrid!: Category;
    mineral!: Category;
    chemical!: Category;
    waterResistant!: Category;
    blueLightProtection!: Category;
    UVA1!: Category;
    UVA2!: Category;
    UVB!: Category;
    UVC!: Category;
    
    constructor(categoryObj: any) {
        Object.keys(categoryObj).forEach(key => {
          this[key] = categoryObj[key];
        });
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

    addWaterResistant(waterResistant: string) {
        this.waterResistant.filters.push(waterResistant);
    }

    addBlueLightProtection(blueLightProtection: string) {
        this.blueLightProtection.filters.push(blueLightProtection);
    }

    getCategoryNames(): string[] {
        return Object.keys(this);
    }
}