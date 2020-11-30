const sentence = "hello there from lighthouse labs";
let interval = 0;

for (let i = 0; i < sentence.length; i++) {
  if (i == sentence.length - 1) {
    setTimeout(() => {
      process.stdout.write(sentence[i] + "\n");
    }, interval) // <= 1s delay to make it noticeable. Can dial it down later.
  } else {
    setTimeout(() => {
      process.stdout.write(sentence[i]);
    }, interval) // <= 1s delay to make it noticeable. Can dial it down later.
    interval += 50;
  }
}
