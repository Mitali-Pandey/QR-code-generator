import inquirer from 'inquirer';
import qr from 'qr-image'
import fs from 'fs'; 

inquirer
  .prompt([
    /* Pass your questions in here */
    {
      message: "write your URL : ",
      name: "URL"
    }
  ])
  .then((answers) => {
    const url = answers.URL;

    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));

    fs.writeFile("URL.txt", url, (err) =>{
      if(err) throw err;
      console.log("the file has been saved!");
    })

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
