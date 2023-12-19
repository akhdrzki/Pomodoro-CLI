import inquirer from "inquirer"
import {Pomodoro, minuteToSec} from "./pomodoro.js"

const startPomodoro = async (second) => {
  const pomodoro = new Pomodoro(second);
  return pomodoro.start();
}
const restPomodoro = async (second) => {
  let sec = second / 5;
  const rest = new Pomodoro(sec);
  return rest.start();
}


export const cliList = () => {
	const choices = [ 'Pomodoro: 25 minute(do) +  5minute(rest)', 'Pomodoro: 50 minute(do) +  10 minute(rest)', 'Custom' ];
	inquirer
		.prompt([
			{
				type: "list",
				name: "selectedOption",
				message: "Select Option: ",
				choices: choices,
			}
		])
		.then((answers) => {
		const selectedOption = answers.selectedOption;
      
     	 //rest session ask?
      	const restSession = () => {
        return inquirer.prompt([
					{
						type: "confirm",
						name: "continue",
						message: "next to rest session??"
					},
				]);
      	}

			if (selectedOption === choices[0]) {
				let second = minuteToSec(25)
				startPomodoro(second).then(() => 
				  restSession()
				)
				.then((answers) => {
					if (answers) {
						return restPomodoro(second)
					}
				})
			} 

			else if (selectedOption === choices[1]) {
        let second = minuteToSec(50);

        startPomodoro(second).then(() => 
          restSession() 
        )
        .then((answers) => {
            if (answers.continue) {
              return restPomodoro(second);
            }
          })
			}

			else if (selectedOption === choices[2]) {
				inquirer.prompt([
					{
						type: "input",
						name: "customPomodoro",
						message: "create your own pomodoro: "
					}
				])
				.then((answers) => {
					const custom = answers.customPomodoro;
					let second = minuteToSec(custom);
					startPomodoro(second).then(() => 
				  restSession())
              
				  .then((answers) => {
					  if (answers) {
						  return restPomodoro(second);
					  }
			  	})
				})
			}
		})
}
