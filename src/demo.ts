export class TriangleClassifier {
    equilateralTriangle(side1:number, side2:number, side3:number){
        return side1===side2 && side1===side3;
        }
    isoscelesTriangle(side1:number, side2:number, side3:number){
    return side1===side2 || side1===side3 || side2===side3;
    }
    nomalTriangle(side1:number, side2:number, side3:number){
        return side1 + side2 > side3 && side2+side3>side1 && side1+side3>side2;
    }
    isTriangle(side1:number, side2:number, side3:number){
        return side1>0 && side2>0 && side3 >0;
    }
}