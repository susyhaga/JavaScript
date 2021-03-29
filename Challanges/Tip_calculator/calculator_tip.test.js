const calc = require('./calculator_tip');

test('Teste de conta correta', 
    () => {
        expect(calc(100, 10, 2)).toBe(60);
    }
);