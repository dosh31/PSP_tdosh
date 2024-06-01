function canTransformArray(arr1, arr2) {
    // Если длины массивов не равны, они не могут быть преобразованы друг в друга
    if (arr1.length !== arr2.length) {
        return false;
    }

    // Функция для подсчета вхождений элементов массива
    function getFrequencyMap(arr) {
        const freqMap = {};
        arr.forEach(num => {
            freqMap[num] = (freqMap[num] || 0) + 1;
        });
        return freqMap;
    }

    // Получаем частотные карты для обоих массивов
    const freqMap1 = getFrequencyMap(arr1);
    const freqMap2 = getFrequencyMap(arr2);

    // Сравниваем частотные карты
    for (let key in freqMap1) {
        if (freqMap1[key] !== freqMap2[key]) {
            return false;
        }
    }

    return true;
}

// Пример использования функции
const arr1 = [1, 2, 3, 8, -2];
const arr2 = [2, 3, 8, 1, -2];
console.log("Can transform:", canTransformArray(arr1, arr2)); // Результат: true
