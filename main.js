function media(numerinchos) {
  var n, c, s, media;

  c = 0;
  s = 0;
  n = numerinchos[c];

  while (n != 0) {
    n = numerinchos[c];
    if (n != 0) {
      s = s + n;
      c++;
    }
  }

  if (c > 0) {
    media = s / c;
    console.log(media);
  } else {
    console.log("No datos");
  }
}

media([6,8,10, 0]);
