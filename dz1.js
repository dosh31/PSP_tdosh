
function sumOfUniqueElements(nums) {
    // Используем объект для подсчета количества вхождений каждого элемента
    const countMap = {};

    // Проходим по массиву и заполняем countMap
    nums.forEach(num => {
        if (countMap[num] !== undefined) {
            countMap[num]++;
        } else {
            countMap[num] = 1;
        }
    });

    let sum = 0;

    // Проходим по countMap и суммируем элементы, которые встречаются только один раз
    for (let num in countMap) {
        if (countMap[num] === 1) {
            sum += parseInt(num);
        }
    }

    return sum;
}

// Пример использования функции
const nums = [1, 2, 3, 2, 4, 5, 3];
console.log("Sum of unique elements:", sumOfUniqueElements(nums));
