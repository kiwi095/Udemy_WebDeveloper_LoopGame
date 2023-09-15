

let maximum = parseInt(prompt("최대 숫자를 입력하세요:"));

while (!maximum) {

    maximum = parseInt(prompt("유효한 숫자를 입력하세요:"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;


let guessNum = prompt("랜덤 숫자를 추측하세요: ('q'를 누르면 종료)");


let count = 1;

while (parseInt(guessNum) !== targetNum) {
    if (guessNum === 'q') break;
    guessNum = parseInt(guessNum);
    if (!parseInt(guessNum)) {
        guessNum = (prompt("유효한 랜덤 숫자를 입력하세요: ('q'를 누르면 종료)"))
    } else if (guessNum < targetNum) {
        guessNum = (prompt("숫자가 낮습니다. 다시 입력하세요:"));
        count++;
    } else if (guessNum > targetNum) {
        guessNum = (prompt("숫자가 높습니다. 다시 입력하세요:"));
        count++;
    }

}



if (parseInt(guessNum) == targetNum) {
    console.log(`축하합니다.`)
    console.log(`${count}번의 시도 끝에 맞췄네요.`)
} else if (guessNum === 'q') {
    console.log("ok quitting.");
}