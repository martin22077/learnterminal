function write(string){
    process.stdout.write(string);
}
write('Hello'); write('\n');
write('\x1B[1m'); write('Hello'); write('\x1B[0m'); write('\n');
//bold
write('\x1B[2m'); write('Hello'); write('\x1B[0m'); write('\n');
//dim/faint
write('\x1B[3m'); write('Hello'); write('\x1B[0m'); write('\n');
//italic
write('\x1B[4m'); write('Hello'); write('\x1B[0m'); write('\n');
//underline
write('\x1B[5m'); write('Hello'); write('\x1B[0m'); write('\n');
//blinking
write('\x1B[7m'); write('Hello'); write('\x1B[0m'); write('\n');
//hidden invisible
write('\x1B[8m'); write('Hello'); write('\x1B[0m'); write('\n');
//strikethrough
write('\x1B[9m'); write('Hello'); write('\x1B[0m'); write('\n');
//bold
for(let i=30; i<40; i++){
    if (i==38) continue;
//colors
write('\x1B[1;'+i+'m'); write('color code number' + i); write('\x1B[0m'); write('\n');
};

for(let i=30; i<40; i++){
    if (i==38) continue;
//colors
write('\x1B[2;'+i+'m'); write('color code number' + i); write('\x1B[0m'); write('\n');
};
/* for(let i=30; i<40; i++){
    for(let j=0; j<16; j++){
        let color = i*j;
    
//colors
write('\x1B[38;5;'+i+'m'); write(color); write('\x1B[0m');
}
write('\n');
} */
for(let i=40; i<50; i++){
    if (i==48) continue;
//colors
write('\x1B[2;'+i+'m'); write('color code number' + i); write('\x1B[0m'); write('\n');
};
console.clear();

let date = new Date().toString();
write(date);
setInterval(()=>{
    write('\x1B['+ date.length + 'D');
    date= new Date().toString();
    write(date)
},10000)


/* write('hello mm21');
setTimeout(()=> {
    write('\x1B[4D');
    write('Martin');
},10000); */


