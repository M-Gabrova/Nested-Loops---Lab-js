function sumOfTwoNumbers (input){
    let start = Number(input[0]);
    let stop = Number(input[1]);
    let magicNumber = Number(input[2]);
    let counterNumber = 0;
    let isFound = false;

    for (let x = start; x <= stop; x++) {
        for (let y = start; y <= stop; y++) {
            counterNumber++;
            if (x+y === magicNumber) {
                isFound = true;
                console.log(`Combination N:${counterNumber} (${x} + ${y} = ${magicNumber})`)
                break;
            }
            
        }
        if (isFound) {
            break;
        }

    }
    if(!isFound){
    console.log(`${counterNumber} combinations - neither equals ${magicNumber}`);
    }
}
sumOfTwoNumbers (["88", 
"888", 
"2000"])




