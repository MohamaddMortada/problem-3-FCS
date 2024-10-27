function padding(S,target) {
    const pad = '   '.repeat(target);
    return pad + S;
}function cristmass(){
    let r = parseInt(prompt("Enter number of rows"));
    let array='  *';
    console.log(padding(array,r));
    i=0;
    while(i<r-1){
        array=padding('*'+ ' | '.repeat(i*2+1) + '*',r-i);
        console.log(array);
        i++;
    }

}
cristmass();