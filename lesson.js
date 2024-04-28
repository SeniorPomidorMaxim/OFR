// Функция для вычисления корней квадратного уравнения
function solveQuadratic(a, b, c) {
    // Вычисляем дискриминант
    var discriminant = b * b - 4 * a * c;
    
    // Если дискриминант меньше нуля, уравнение не имеет действительных корней
    if (discriminant < 0) {
        return "Уравнение не имеет действительных корней";
    }
    
    // Если дискриминант равен нулю, у уравнения один корень
    else if (discriminant === 0) {
        var root = -b / (2 * a);
        return "Уравнение имеет один корень: " + root;
    }
    
    // Если дискриминант больше нуля, у уравнения два корня
    else {
        var root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        var root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return "Уравнение имеет два корня: " + root1 + " и " + root2;
    }
}

// Пример использования функции
var a = 1;
var b = -3;
var c = 2;
var result = solveQuadratic(a, b, c);
console.log(result); // Выводим результат в консоль
