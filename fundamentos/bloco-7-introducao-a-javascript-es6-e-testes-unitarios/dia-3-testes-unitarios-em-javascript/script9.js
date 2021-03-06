const assert = require('assert');
// escreva a função findTheNeedle aqui

const findTheNeedle = (arr, string) => {
    let indiceString = -1;
    for (let i in arr) {
        if (arr[i] === string) {
            indiceString = parseInt(i);
        }
    }
    return indiceString;
}
findTheNeedle(['plant', 'shelf', 'arrow', 'bird'], 'plat');

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);