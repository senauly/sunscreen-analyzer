export class Filter {
    [key: string]: any;
    name: string;
    INCI: string;
    isChemical: boolean;
    isMineral: boolean;
    isHybrid: boolean;
    isUVA1: boolean;
    isUVA2: boolean;
    isUVB: boolean;
    isUVC: boolean;
    isWaterResistant: boolean;
    isBlueLightProtection: boolean;

    constructor(name: string, INCI:string, isChemical: boolean, isMineral: boolean, isHybrid: boolean, isUVA1: boolean, isUVA2: boolean, isUVB: boolean, isUVC: boolean, isWaterResistant: boolean, isBlueLightProtection: boolean) {
        this.name = name;
        this.INCI = INCI;
        this.isChemical = isChemical;
        this.isMineral = isMineral;
        this.isHybrid = isHybrid;
        this.isUVA1 = isUVA1;
        this.isUVA2 = isUVA2;
        this.isUVB = isUVB;
        this.isUVC = isUVC;
        this.isWaterResistant = isWaterResistant;
        this.isBlueLightProtection = isBlueLightProtection;
    }
}
