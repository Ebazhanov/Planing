/**
 * https://ru.hexlet.io/courses/introduction_to_programming/lessons/intro/theory_unit
 */

const factorial = (n) => {
    const iter = (current, acc) => {
        if (current === 0) {
            return acc;
        }
        return iter(current - 1, acc * current);
    };

    return iter(n, 1);
};

console.log(factorial(3));