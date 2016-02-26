var letter = prompt('Enter a letter');
var i;
var b;

for (i = 0; i < 10; i++) {
  document.write(letter);

  for (b = 0; b < i; b++) {
    document.write(letter)
  }
  document.write('<br>');
}
