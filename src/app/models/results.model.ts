import { Category } from "./category.model";

export class Results {
    [key: string]: any;
    hybrid!: Category;
    mineral!: Category;
    chemical!: Category;
    blueLightProtection!: Category;
    Photostable!: Category;
    UVA1!: Category;
    UVA2!: Category;
    UVB!: Category;
    
    constructor(categoryObj: any) {
        Object.keys(categoryObj).forEach(key => {
          this[key] = categoryObj[key];
        });
    }

    addMineral(mineral: string) {
        this.mineral.filters.push(mineral);
    }

    addChemical(chemical: string) {
        this.chemical.filters.push(chemical);
    }

    addHybrid(hybrid: string) {
        this.hybrid.filters.push(hybrid);
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

    addPhotostable(Photostable: string) {
        this.Photostable.filters.push(Photostable);
    }

    addBlueLightProtection(blueLightProtection: string) {
        this.blueLightProtection.filters.push(blueLightProtection);
    }

    isHybrid(): boolean {
        if (this.mineral.filters.length > 0 && this.chemical.filters.length > 0) {
            this.hybrid.filters.push(" ");
            return true;
        }
        return false;
    }

    getCategoryNames(): string[] {
        return Object.keys(this);
    }
}