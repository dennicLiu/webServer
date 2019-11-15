"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Chance = require("chance");
const next_1 = require("../../src/next");
const chance = new Chance();
describe('Express Next', () => {
    afterEach(() => {
        next_1.next.mockReset();
    });
    test('should be able to assert calls to Next', () => {
        const firstValue = chance.string();
        next_1.next(firstValue);
        expect(next_1.next).toHaveBeenCalledWith(firstValue);
        const secondValue = chance.string();
        next_1.next(secondValue);
        expect(next_1.next).toHaveBeenCalledWith(secondValue);
    });
    test('should be able to reset call count', () => {
        const value = chance.string();
        next_1.next(value);
        next_1.next.mockReset();
        expect(next_1.next).not.toHaveBeenCalled();
    });
});
//# sourceMappingURL=next.test.js.map