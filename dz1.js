function findMaxLengthOfOnesSequence(sequence) {
    let maxLength = 0;
    let currentLength = 0;

    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] === '1') {
            currentLength++;
            maxLength = Math.max(maxLength, currentLength);
        } else {
            currentLength = 0;
        }
    }

    return maxLength;
}

const sequence = '1000000111100011111010111101111111';
const maxLength = findMaxLengthOfOnesSequence(sequence);
console.log(maxLength); // Выведет: 7
