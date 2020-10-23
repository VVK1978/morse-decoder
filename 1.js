const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};
function decode(expr) {
  decoder = [];
  morseValue = [];
  morseValue = Object.values(MORSE_TABLE);
  morseKeys = [];
  morseKeys = Object.keys(MORSE_TABLE);
  arr = [];
  for (k = 0; k < expr.length / 10; k++) {
    for (i = 0; i <= 4; i++) {
      if (expr.slice(i * 2 + k * 10, i * 2 + 2 + k * 10) == 10) {
        arr[i] = ".";
      } else if (expr.slice(i * 2 + k * 10, i * 2 + 2 + k * 10) == 11) {
        arr[i] = "-";
      } else if (expr.slice(i * 2 + k * 10, i * 2 + 2 + k * 10) == 00) {
        arr[i] = "00";
      } else if (expr.slice(i * 2 + k * 10, i * 2 + 2 + k * 10) == "**") {
        i = 4;
        decoder[k] = " ";
      }
      arr = arr
        .filter((n) => n !== "00")
        .join("")
        .split(",");
    }
    for (n = 0; n <= 35; n++) {
      if (arr == morseKeys[n]) {
        decoder[k] = morseValue[n];
      }
    }
    arr = [];
  }
  return decoder.join("").toString();
}
expr =
  "00000000100000111010101010111100111011100000001011111110101011111010101010101010";
console.log(decode(expr), typeof expr);
