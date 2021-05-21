// Tennis Game

function count(input) {
    const score = {
        "playerA": {
            score: 0, 
            game : 0
        }, 
        "playerB": {
            score: 0, 
            game: 0
        }
    };

    for (let i = 0; i < input.length; i++) {
        let point = input[i];

        if (point === "A") {
            score.playerA.score += 1;
        }
        else {
            score.playerB.score += 1;
        }

        for (let i in score) {
            if (score[i].score == 4) {
                score[i].game += 1;
                score["playerA"].score = 0;
                score["playerB"].score = 0;
            }
        }
    }

    for (let j in score) {
        if (score[j].score === 0) {
            score[j].score = "love";
        }
        if (score[j].score === 1) {
            score[j].score = "15";
        }
        if (score[j].score === 2) {
            score[j].score = "30";
        }
        if (score[j].score === 3) {
            score[j].score = "40";
        }
    }

    console.log(input, score);
}


count("")
count("A")
count("BBB")
count("ABAB")
count("AAAA")
count("ABBBBBBBBBBBB")
count("BABBBA")
