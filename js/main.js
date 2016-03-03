  var newLetter = prompt('Enter a letter:');

  var i = 0;

  for (b = 0; b < 11; b++) {
    for (i = 0; i < b; i++) {
      document.write(newLetter);
    }
    document.write('<br>');
  }

