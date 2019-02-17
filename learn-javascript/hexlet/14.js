/**
 * Реализуйте функцию finalGrade, которая вычисляет итоговую оценку студента на основе двух параметров:
 * оценки за экзамен и количества законченных проектов.
 *
 * Функция принимает два аргумента:
 * exam — оценка за экзамен, число от 0 до 100;
 * projects — количество проектов, число от 0 и выше.
 *
 * Функция возвращает: число (итоговую оценку).
 * Есть четыре возможных итоговых оценки:
 *
 * 100, если оценка за экзамен выше 90 или есть больше 10 проектов
 * 90, если оценка за экзамен выше 75 и есть как минимум 5 проектов
 * 75, если оценка за экзамен выше 50 и есть как минимум 2 проекта
 * 0 в любом другом случае
 *
 * Вот как должна работать ваша функция:
 *
 * что должна вернуть функция при таком вызове
 *
 */

const finalGrade = (exam, projects) => {
    if (exam > 90 || projects > 10) {
        return 100;
    }
    if (exam > 75 && projects > 5) {
        return 90;
    }
    if (exam > 50 && projects >= 2) {
        return 75;
    }
    return 0;
};

console.log(finalGrade(100, 12));  // 100
console.log(finalGrade(99, 0));    // 100
console.log(finalGrade(10, 15));   // 100
console.log(finalGrade(85, 5));    // 90
console.log(finalGrade(55, 3));    // 75
console.log(finalGrade(55, 0));    // 0
console.log(finalGrade(20, 2));    // 0

console.log(finalGrade(10, 15)); //toBe(100);
console.log(finalGrade(85, 5));  //toBe(90);
console.log(finalGrade(85, 4));  //toBe(75);

console.log(finalGrade(75, 5));  //toBe(75);
console.log(finalGrade(55, 3));  //toBe(75);
console.log(finalGrade(55, 2));  //toBe(75);
