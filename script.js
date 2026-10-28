
function OpeningCeremony(callback) {
    console.log("Sports Day Started!");

    let score = {
        red: 0,
        blue: 0,
        green: 0,
        yellow: 0
    };

    setTimeout(() => {
        console.log("Opening Ceremony Completed");
        callback(score);
    }, 1000);
}

function Race100M(score, callback) {
    setTimeout(() => {
        console.log("100M Race Started");

        let times = {
            red: Math.random() * 5 + 10,
            blue: Math.random() * 5 + 10,
            green: Math.random() * 5 + 10,
            yellow: Math.random() * 5 + 10
        };

        let teams = Object.keys(times);
        teams.sort((a, b) => times[a] - times[b]);

        console.log("Previous scores:", { ...score });

        score[teams[0]] += 50;
        score[teams[1]] += 25;
        score[teams[2]] += 10;

        console.log("Updated scores:", { ...score });

        callback(score);
    }, 3000);
}

function LongJump(score, callback) {
    setTimeout(() => {
        console.log("Long Jump Started");

        let colors = ["red", "blue", "green", "yellow"];
        let winner = colors[Math.floor(Math.random() * colors.length)];

        console.log("Previous scores:", { ...score });

        score[winner] += 150;

        console.log("Long Jump winner:", winner);
        console.log("Updated scores:", { ...score });

        callback(score);
    }, 2000);
}

function HighJump(score, callback) {
    console.log("High Jump Started");

    let color = prompt(
        "Enter the highest-jump color: red, blue, green, or yellow"
    );

    console.log("Previous scores:", { ...score });

    if (color !== null) {
        color = color.trim().toLowerCase();

        if (Object.hasOwn(score, color)) {
            score[color] += 100;
            console.log(color + " gets 100 points!");
        } else {
            console.log("Invalid color. No points awarded.");
        }
    } else {
        console.log("No color entered. No points awarded.");
    }

    console.log("Updated scores:", { ...score });

    callback(score);
}

function AwardCeremony(score) {
    console.log("Final Scores:", score);

    let ranking = Object.entries(score);
    ranking.sort((a, b) => b[1] - a[1]);

    console.log("1st Place:", ranking[0]);
    console.log("2nd Place:", ranking[1]);
    console.log("3rd Place:", ranking[2]);
    console.log("4th Place:", ranking[3]);

    console.log("Sports Day Completed!");
}

// Start the events in order
OpeningCeremony((score) => {
    Race100M(score, (score) => {
        LongJump(score, (score) => {
            HighJump(score, (score) => {
                AwardCeremony(score);
            });
        });
    });
});
