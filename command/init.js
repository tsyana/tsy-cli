'use strict'
const exec = require('child_process').exec
const co = require('co')
const prompt = require('co-prompt')
const multiline = prompt.multiline
const config = require('../templates')
const confirm = prompt.confirm
const chalk = require('chalk')
const inquirer = require('inquirer')
module.exports = () => {
    co(function*() {
        var cmd = 'git config --get user.name'
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                console.log(error)
                process.exit()
            }
            console.log(stdout)
        process.exit()
    })
        let questions = [{
            type: 'list',
            name: 'frame',
            message: 'select the frame',
            choices: [
                {
                    name:'vue-basic',
                    value:1,
                    sort:1
                },
                {
                    name:'vue-wap-basic',
                    value:2,
                    sort:3
                },
                {
                    name:'vue-mutipage-basic',
                    value:3,
                    sort:3
                }
            ]
        },{
            type:'input',
            name:'projectName',
            message:'Please enter your project name',
            default:'my_project'
        }];
        inquirer.prompt(questions).then(function(answers) {
            // console.log(JSON.stringify(answers, null, ''));
            //
            // var name=exec('git config --get user.name')
            // var email=exec('git config --get user.email')
            // console.log(name);
            // name = name && name.toString().trim()
            // email = email && (' <' + email.toString().trim() + '>')



            let projectName = answers.projectName;
            let gitUrl = 'git@git.kpi.pub:fe-basic/web-single-page-basic.git';
            let cmdStr = `mkdir ${projectName} && cd ${projectName} && git clone ${gitUrl} `
            console.log(chalk.white('\n Start generating...'))
            exec(cmdStr, (error, stdout, stderr) => {
                if (error) {
                    console.log(error)
                    process.exit()
                }
                console.log(chalk.green('\n √ Generation completed!'))
                console.log(`\n cd ${projectName} && npm install \n`)
                process.exit()
            })
        })

    })
}
