const washing_hands = require('./washing-hands');

test('time and seconds', () => {
    expect(washing_hands(8, 7)).toBe("588 minutes and 0 seconds");
});

test('when input is zero', () => {
    expect(washing_hands(0, 0)).toBe("0 minutes and 0 seconds");
});
test('seconds and  minutes', () => {
    expect(washing_hands(7, 9)).toBe("661 minutes and 30 seconds");

    
});


