const cels = +prompt("Введите температуру в цельсиях");
const far = (9 / 5) * cels+ 32;
alert(`Цельсий: ${cels}, Фаренгейт: ${far.toFixed(2)}`);