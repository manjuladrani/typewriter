const words = ['4311o', 'th3r3', 'w0r1d'];

console.log(words);
let i = 0;
const fn = () => setTimeout(() => {
    console.log(words[i++]);
    if (i < words.length) {
        fn();
    }
  },1000);

fn();