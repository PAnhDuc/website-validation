const { expect } = require('@jest/globals');

describe('Math functions', () => {
    it('should add numbers', () => {
        const sum = 2 + 2;
        expect(sum).toBe(5); // Deliberate mistake for testing
    });
});