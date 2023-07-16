export class Filter {
    [key: string]: any;
    name: string;
    INCI: string;
    isHybrid: boolean;
    isChemical: boolean;
    isMineral: boolean;
    isUVA1: boolean;
    isUVA2: boolean;
    isUVB: boolean;
    isBlueLightProtection: boolean;
    isPhotostable: boolean;

    constructor(name: string, INCI:string, isHybrid: boolean, isChemical: boolean, isMineral: boolean, isUVA1: boolean, isUVA2: boolean, isUVB: boolean, isBlueLightProtection: boolean, isPhotostable: boolean) {
        this.name = name;
        this.INCI = INCI;
        this.isHybrid = isHybrid;
        this.isChemical = isChemical;
        this.isMineral = isMineral;
        this.isUVA1 = isUVA1;
        this.isUVA2 = isUVA2;
        this.isUVB = isUVB;
        this.isBlueLightProtection = isBlueLightProtection;
        this.isPhotostable = isPhotostable;
    }
}
