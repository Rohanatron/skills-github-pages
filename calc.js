const PI = Math.PI;
const TRIANGLE_SUM = 180;
let count = 0;

function getCatArt() {
   return `Here's your friend Jerry. He believes you can use this machine to cheat
⠀⠀⠀⠀⠀⠀⠀⢀⣠⣤⣤⣴⣦⣤⣤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣠⣴⠾⠛⠉⠉⠀⠀⠀⠀⠈⠉⠛⠿⣦⣄⠀⠀⠀⠀⠀
⠀⠀⣠⣾⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⢷⣄⠀⠀⠀
⠀⣰⡟⠁⠀⠀⠀⣀⡤⡀⠀⠀⠀⠀⠀⣠⢄⠀⠀⠀⠀⠻⣧⠀⠀
⣰⡟⠀⠀⠀⠀⢰⣿⣿⣷⠀⠀⠀⠀⣼⣿⣿⡇⠀⠀⠀⠀⢻⣧⠀
⣿⠃⠀⠀⠀⠀⠘⣿⣿⡿⠀⠀⠀⠀⢹⣿⣿⠇⠀⠀⠀⠀⠈⣿⡄
⣿⠀⠀⠀⠀⠀⠀⠈⠉⠀⠀⠀⠀⠀⠀⠉⠉⠀⠀⠀⠀⠀⠀⣿⡇
⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠃
⠹⣧⠀⠀⠀⢳⣤⣄⣀⡀⠀⠀⠀⠀⠀⣀⣀⣤⡾⠀⠀⠀⣸⡟
⠻⣧⡀⠀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠁⠀⠀⣴⡟⠀⠀
⠀⠀⠙⢷⣄⡀⠀⠈⠛⠿⣿⣿⣿⣿⠿⠛⠁⠀⠀⣠⣾⠏⠀⠀
⠀⠀⠀⠀⠙⠻⣶⣤⣀⡀⠀⠀⠀⠀⠀⣀⣤⠶⠛⠋⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠉⠙⠛⠛⠿⠿⠛⠛⠉⠁⠀⠀⠀⠀⠀⠀⠀`;
}

function evaluate_equation() {
   const input = prompt("Enter a math equation (PEMDAS):");
   if (!/^[0-9+\-*/()% .**]+$/.test(input)) {
       return "Error: Invalid characters in input.";
   }
   try {
       const result = eval(input);
       return Number.isFinite(result) ? `Result: ${result}` : "Error: Result is not a finite number.";
   } catch {
       return "Error: Invalid equation.";
   }
}

function missing_side(x, y) {
   const sum = x + y;
   if (isNaN(sum) || x <= 0 || y <= 0) return "Error: Invalid angles.";
   return sum >= TRIANGLE_SUM
       ? "Error: sum of angles exceeds 180°"
       : `Step 1: Add known angles: ${x} + ${y} = ${sum}\nStep 2: Subtract from 180°: 180 - ${sum} = ${TRIANGLE_SUM - sum}`;
}

function pyth(x, y) {
   if (x < 0 || y < 0) return "Error: sides must be non-negative.";
   const a2 = x ** 2;
   const b2 = y ** 2;
   const c2 = a2 + b2;
   const c = Math.sqrt(c2);
   return `Step 1: a² = ${x}² = ${a2}
Step 2: b² = ${y}² = ${b2}
Step 3: a² + b² = ${a2} + ${b2} = ${c2}
Step 4: c = √${c2} = ${c}`;
}

function pyth2(hypotenuse, side) {
   const h2 = hypotenuse ** 2;
   const s2 = side ** 2;
   const diff = h2 - s2;
   if (diff < 0) return "Error: hypotenuse must be larger.";
   const missing = Math.sqrt(diff);
   return `Step 1: hypotenuse² = ${hypotenuse}² = ${h2}
Step 2: side² = ${side}² = ${s2}
Step 3: missing² = ${h2} - ${s2} = ${diff}
Step 4: missing = √${diff} = ${missing}`;
}

function square_root(x) {
   return x < 0 ? "Error: cannot take square root of negative number." : `√${x} = ${Math.sqrt(x)}`;
}

function cube_root(x) {
   return `∛${x} = ${Math.cbrt(x)}`;
}

function square(x) {
   return `Step 1: ${x}² = ${x} × ${x} = ${x * x}`;
}

function cube(x) {
   return `Step 1: ${x}³ = ${x} × ${x} × ${x} = ${x * x * x}`;
}

function area_rectangle(length, width) {
   return `Step 1: Area = length × width = ${length} × ${width} = ${length * width}`;
}

function area_triangle(base, height) {
   const product = base * height;
   const area = product / 2;
   return `Step 1: Area = (base × height) / 2
Step 2: Area = (${base} × ${height}) / 2 = ${product} / 2
Step 3: Area = ${area}`;
}

function area_trapezoid(base1, base2, height) {
   const avgBase = (base1 + base2);
   const area = (avgBase * height) / 2;
   return `Step 1: Area = ((base1 + base2) × height) / 2
Step 2: (${base1} + ${base2}) × ${height} / 2 = ${avgBase} × ${height} / 2
Step 3: Area = ${area}`;
}

function area_circle(radius) {
   if (radius < 0) return "Error: radius must be non-negative.";
   const r2 = radius ** 2;
   return `Step 1: Area = π × r² = π × ${radius}² = π × ${r2}
Step 2: Area = ${PI} × ${r2} = ${PI * r2}`;
}

function circumference(radius) {
   if (radius < 0) return "Error: radius must be non-negative.";
   return `Step 1: Circumference = 2πr = 2 × ${PI} × ${radius} = ${2 * PI * radius}`;
}

function factorial(n) {
   if (n < 0 || !Number.isInteger(n)) return "Error! Only non-negative integers allowed.";
   let result = 1;
   let steps = `Step 1: ${n}! = `;
   for (let i = n; i > 0; i--) {
       result *= i;
       steps += (i !== 1) ? `${i} × ` : `1 = ${result}`;
   }
   return steps;
}

function percentage(part, whole) {
   if (whole === 0) return "Error! Division by zero.";
   return `Step 1: (${part} ÷ ${whole}) × 100 = ${(part / whole) * 100}%`;
}

function volume_rect_prism(length, width, height) {
   return `Step 1: Volume = length × width × height = ${length} × ${width} × ${height} = ${length * width * height}`;
}

function volume_tri_prism(base, height, length) {
   return `Step 1: Volume = (base × height × length) / 2
Step 2: (${base} × ${height} × ${length}) / 2 = ${(base * height * length) / 2}`;
}

function solve_algebra() {
   const input = prompt("Enter an equation to solve for x (e.g., 2x + 3 = 7):");
   let equation = input.replace(/\s+/g, '');
   equation = equation.replace(/(\d+)\/(\d+)/g, (match, p1, p2) => (parseFloat(p1) / parseFloat(p2)));
   const regex = /(-?\d*\.?\d*)x\s*([+\-]\s*\d+)?\s*=\s*(-?\d+)/;
   const match = equation.match(regex);

   if (match) {
       const aRaw = match[1];
       const a = aRaw === '' || aRaw === '+' ? 1 : aRaw === '-' ? -1 : parseFloat(aRaw);
       const b = match[2] ? parseFloat(match[2].replace(/\s+/g, '')) : 0;
       const c = parseFloat(match[3]);

       if (a === 0) {
           if (b === c) return "Infinite solutions exist.";
           else return "No solution exists.";
       }

       const steps = `Step 1: ${a}x + ${b} = ${c}
Step 2: Subtract ${b} from both sides → ${a}x = ${c - b}
Step 3: Divide both sides by ${a} → x = ${(c - b) / a}`;

       return steps;
   } else {
       return "Error: Invalid algebraic equation.";
   }
}

function solve_two_variable_equation() {
   const input = prompt("Enter a linear equation with x and y (e.g., 7x + y = y + 7):");
   if (!input || !input.includes("=")) return "Error: Please enter a valid equation with '='.";

   try {
       const equation = input.replace(/\s+/g, "");
       const [left, right] = equation.split("=");
       const combined = `${left}-(${right})`;

       const expression = combined
           .replace(/([+-]?)(\d*)x/g, (_, sign, num) => `${sign}${num || 1}*x`)
           .replace(/([+-]?)(\d*)y/g, (_, sign, num) => `${sign}${num || 1}*y`);

       const fx = new Function("x", "y", `return ${expression};`);

       for (let y = -10; y <= 10; y++) {
           for (let x = -10; x <= 10; x++) {
               if (Math.abs(fx(x, y)) < 1e-6) {
                   return `One integer solution: x = ${x}, y = ${y}`;
               }
           }
       }

       return "No integer solution found for x and y between -10 and 10.";
   } catch (e) {
       return "Error: Could not parse the equation.";
   }
}

function calculator() {
   const choice = prompt(`Select operation:
1. Evaluate full math equation (PEMDAS)
2. Missing angle of triangle
3. Pythagorean theorem (legs)
4. Pythagorean theorem (with hypotenuse)
5. Square root
6. Cube root
7. Square a number
8. Cube a number
9. Area of rectangle/parallelogram
10. Area of triangle
11. Area of trapezoid
12. Area of circle
13. Circumference of a circle
14. Factorial
15. Percentage
16. Volume of rectangular prism
17. Volume of triangular prism
18. Solve algebraic equation (1 variable)
19. Solve equation with 2 variables
r. Emotional support
x. Exit`);

   let num1, num2, num3;

   switch (choice) {
       case '1':
           alert(evaluate_equation());
           break;
       case '2':
           num1 = parseFloat(prompt("Enter first angle:"));
           num2 = parseFloat(prompt("Enter second angle:"));
           alert(missing_side(num1, num2));
           break;
       case '3':
           num1 = parseFloat(prompt("Enter side A:"));
           num2 = parseFloat(prompt("Enter side B:"));
           alert(pyth(num1, num2));
           break;
       case '4':
           num1 = parseFloat(prompt("Enter hypotenuse:"));
           num2 = parseFloat(prompt("Enter one side:"));
           alert(pyth2(num1, num2));
           break;
       case '5':
           num1 = parseFloat(prompt("Enter a number:"));
           alert(square_root(num1));
           break;
       case '6':
           num1 = parseFloat(prompt("Enter a number:"));
           alert(cube_root(num1));
           break;
       case '7':
           num1 = parseFloat(prompt("Enter a number:"));
           alert(square(num1));
           break;
       case '8':
           num1 = parseFloat(prompt("Enter a number:"));
           alert(cube(num1));
           break;
       case '9':
           num1 = parseFloat(prompt("Enter length:"));
           num2 = parseFloat(prompt("Enter width:"));
           alert(area_rectangle(num1, num2));
           break;
       case '10':
           num1 = parseFloat(prompt("Enter base:"));
           num2 = parseFloat(prompt("Enter height:"));
           alert(area_triangle(num1, num2));
           break;
       case '11':
           num1 = parseFloat(prompt("Enter base 1:"));
           num2 = parseFloat(prompt("Enter base 2:"));
           num3 = parseFloat(prompt("Enter height:"));
           alert(area_trapezoid(num1, num2, num3));
           break;
       case '12':
           num1 = parseFloat(prompt("Enter radius:"));
           alert(area_circle(num1));
           break;
       case '13':
           num1 = parseFloat(prompt("Enter radius:"));
           alert(circumference(num1));
           break;
       case '14':
           num1 = parseInt(prompt("Enter a non-negative integer:"));
           alert(factorial(num1));
           break;
       case '15':
           num1 = parseFloat(prompt("Enter part:"));
           num2 = parseFloat(prompt("Enter whole:"));
           alert(percentage(num1, num2));
           break;
       case '16':
           num1 = parseFloat(prompt("Enter length:"));
           num2 = parseFloat(prompt("Enter width:"));
           num3 = parseFloat(prompt("Enter height:"));
           alert(volume_rect_prism(num1, num2, num3));
           break;
       case '17':
           num1 = parseFloat(prompt("Enter base:"));
           num2 = parseFloat(prompt("Enter height:"));
           num3 = parseFloat(prompt("Enter length:"));
           alert(volume_tri_prism(num1, num2, num3));
           break;
       case '18':
           alert(solve_algebra());
           break;
       case '19':
           alert(solve_two_variable_equation());
           break;
       case 'r':
           alert(getCatArt());
           break;
       case 'x':
           alert("Exiting...");
           count = 1;
           break;
       default:
           alert("Invalid option");
   }
}

while (count === 0) {
   calculator();
}
