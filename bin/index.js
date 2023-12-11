#!/usr/bin/env node

import Pomodoro from "../src/models/pomodoro.js";
import inquirer from "inquirer";

// list
const choices = [ 'Pomodoro: 25 minute(do) +  5minute(rest)', 'Pomodoro: 50 minute(do) +  10 minute(rest)', 'Custom'];

// converting minute into sec
const minuteDuration = (minute) => {
	minute = minute * 60
	return minute
}

// CLI Selected list
inquirer
  .prompt([
    {
      type: 'list',
      name: 'selectedOption',
      message: 'Select Option:',
      choices: choices,
    },
  ])

  .then((answers) => {
  	const selectedOption = answers.selectedOption
    if (selectedOption === choices[0]) {
    	let minute = minuteDuration(25);
    	const pomodoro = new Pomodoro(minute);
    	pomodoro.start();
    }
    else if (selectedOption === choices[1]) {
    	let minute1 = minuteDuration(50);
    	const pomodoro1 = new Pomodoro(minute1);
    	pomodoro1.start();
    }
    else if (selectedOption === choices[2]) {
    	inquirer
    		.prompt([
    			{
    				type: "input",
    				name: "customPomodoro",
    				message: "create your own pomodoro (minute)",
    			},
    		]).then((customAnswer) => {
    			const custom = customAnswer.customPomodoro;
    			let minute2 = minuteDuration(custom)
    			const pomodoro2 = new Pomodoro(minute2)
    			pomodoro2.start()
    		})
    }
  });














