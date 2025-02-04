//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate {
    constructor(name, mass, scores){
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }

    addScore(newScore){
        this.scores.push(newScore);
    }
    average(){
        let sum = 0;
        for (let i = 0; i < this.scores.length; i++){
            sum += this.scores[i];
        }
        let avg = sum/this.scores.length
        let roundAvg = (Math.round(avg*10)/10)
    
        return roundAvg;
    }
    status(){
        if (this.average() > 90){
            return "Accepted";
        } else if ((this.average() < 90) && (this.average() >= 80)){
            return "Reserve";
        } else if ((this.average() < 80) && (this.average() >= 70)){
            return "Probationary";
        } else {
            return "Rejected";
        }
    }
}

let bear = new CrewCandidate("Bubba Bear",135,[88,85,90]);

let dog = new CrewCandidate("Merry Maltese",1.5,[93,88,97]);

let gator = new CrewCandidate("Glad Gator", 225, [75,78,62]);


//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

bear.addScore(83);

// console.log(`${bear.name} earned an average test score of ${bear.average()}% and has a status of ${bear.status()}.`);

// console.log(`${dog.name} earned an average test score of ${dog.average()}% and has a status of ${dog.status()}.`);

// console.log(`${gator.name} earned an average test score of ${gator.average()}% and has a status of ${gator.status()}.`);

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.

gator.addScore(100);

gator.addScore(100);

gator.addScore(100);

gator.addScore(100);

gator.addScore(100);

gator.addScore(100);

console.log(`${gator.name} earned an average test score of ${gator.average()}% and has a status of ${gator.status()}.`);