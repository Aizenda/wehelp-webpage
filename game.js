function play(userChoice) {
    const choices = ['石頭', '布', '剪刀'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result;
    if (userChoice === computerChoice) {
        result = "平手！";
    } else if ((userChoice === '石頭' && computerChoice === '剪刀') ||
               (userChoice === '布' && computerChoice === '石頭') ||
               (userChoice === '剪刀' && computerChoice === '布')) {
        result = "你贏了！";
        showCustomText();
        showCustomText2();
    } else {
        result = "你輸了！";
    }

    document.getElementById("result").textContent = `你出了 ${userChoice}，電腦出了 ${computerChoice}。${result}`;
}

function showCustomText() {
    setTimeout(function() {
        document.getElementById("customText").style.display = "block";
    }, 500); // 這裡的 2000 是延遲的毫秒數，例如 2000 表示延遲 2 秒
}

function showCustomText2() {
    setTimeout(function() {
        document.getElementById("customText2").style.display = "block";
    }, 500); // 這裡的 2000 是延遲的毫秒數，例如 2000 表示延遲 2 秒
}

