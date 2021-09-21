const sentence = "hello there from lighthouse labs";

setTimeout(() => {
    let i = 0;
    for (const char of sentence) {
        
        console.log(char + " => " + i + "ms");
        i = i + 50;
        //process.stdout.write(char);
 }}, 50);
