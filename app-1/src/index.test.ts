import {describe,it,expect, test} from "@jest/globals"
import { sum } from "."

describe("Sum", ()=>{
    test("1 + 2 equals 3",()=>{
        expect(sum(1,2)).toBe(3);
    });

    test("0 + 0 equals 0",()=>{
        expect(sum(0,0)).toBe(0);
    })
})