import inquirer from "inquirer";

inquirer
  .prompt([
    {
        type: 'list',
        name: 'CLI',
        message: 'Which Command You want to execute?',
        choices: [
          'Order a pizza',
          'Make a reservation',
          new inquirer.Separator(),
          'Ask for opening hours',          
          'Talk to the receptionist',
        ],
      },
  ])
  .then((answers) => {
    
    if(answers.CLI === 'Ask for opening hours'){
        inquirer.prompt([{
            type:"list",
            name: 'Contact support',
            choices:[
                ">10:00 am",
                "10:00 am to 18:00pm",
                "18:00 am to 00:00am",
            ]            
        }])
    }else{
        console.log(answers);
    }
  })
  .catch((error) => {
    if (error.isTtyError) {
        console.log(error);
    } else {
        console.log(error); 
    }
  });