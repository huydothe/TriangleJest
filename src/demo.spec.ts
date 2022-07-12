import {TriangleClassifier} from "./demo";

describe("test",()=>{
    let triangle=new TriangleClassifier();
    test("should be a Equilateral Triangle",()=>{
       expect(triangle.equilateralTriangle(2,2,2)).toEqual(true);
    });
    test("should be a Isosceles Triangle",()=>{
        expect(triangle.isoscelesTriangle(2,2,3)).toEqual(true);
    });
    test("should be a Nomal Triangle",()=>{
        expect(triangle.nomalTriangle(3,4,5)).toEqual(true);
    });
    test("should be a nomal Triangle",()=>{
        expect(triangle.isTriangle(-1,2,3)).toEqual(false);
    });
    test("should be a nomal Triangle",()=>{
        expect(triangle.isTriangle(0,2,3)).toEqual(false);
    });
})