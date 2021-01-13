const { flatObjToArray, reverse } = require('./index.js');

// Input:
let inputValue = {
    hired: {
        be: {
            to: {
                deserve: 'I'
            }
        }
    }
};

// Output:
let outputValue = {
    I: {
        deserve: {
            to: {
                be: 'hired'
            }
        }
    }
};

describe('reverse nested test', () => {
    test('flatObjToArray should perform correctly to flat the nested object to an array type', () => {
        const expectedResult = ['hired', 'be', 'to', 'deserve', 'I'];
        const result = flatObjToArray(inputValue);

        expect(result).toEqual(expectedResult);
    });
    test('should perform correctly to reverse the nested object', () => {
        const result = reverse(inputValue);

        expect(result).toEqual(outputValue);
    });
});
