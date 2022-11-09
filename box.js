function write(string){
    process.stdout.write(string);
}
import chalk from 'chalk';
import boxen from 'boxen';


write(boxen(chalk.red.bgBlueBright('esimene'), {
    padding: 1, 
    margin: 0.5, 
    borderStyle: 'double'
}));

write(boxen(chalk.blue.bgRed.underline('teine'), {
    padding: 0.5, 
    margin: 1, 
    borderStyle: 'round'
}));
write(boxen(chalk.rgb(123, 45, 67).bgCyan.strikethrough('kolmas'), {
    padding: 2, 
    margin: 0.5, 
    borderStyle: 'classic'
}));
write(boxen(chalk.whiteBright.bgBlackBright('neljas'), {
    padding: 1.5, 
    margin: 2, 
    borderStyle: 'arrow'
}));
write(boxen(chalk.magentaBright.bgGreen('VIIES'), {
    padding: 3, 
    margin: 1, 
    borderStyle: 'singleDouble',
    title: 'viies'
}));
write(boxen(chalk.redBright.bgBlueBright.underline.strikethrough.bold.italic('kuues'), {
    padding: 2.5, 
    margin: 1, 
    borderStyle: 'bold',
    title: 'kuues',
    titleAlignment: 'center'
}));