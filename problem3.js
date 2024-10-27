
function cristmas2() {
    let r = parseInt(prompt("Input number of rows"));
    const tree=document.createElement('div');
    tree.style.textAlign='center';
    row = document.createElement('div');
    star = document.createElement('star');
    star2 = document.createElement('star2');
    branch = document.createElement('branch');

    star.textContent='*';
    star.style.color = 'red'; 
    star.style.fontSize = '20px';

    row.appendChild(star);
    row.appendChild(branch);

    tree.appendChild(row);
    document.body.appendChild(tree);
    i=0;
    while(i<r-1){  
    
    row = document.createElement('div');
    star = document.createElement('star');

    star2 = document.createElement('star2');

    branch = document.createElement('branch');

    star.textContent='*';
    star.style.color = 'red'; 
    star.style.fontSize = '20px';
    branch.textContent=' | '.repeat(i*2+1);
    branch.style.color = 'green'; 
    branch.style.fontSize = '20px';
    star2.textContent='*';
    star2.style.color = 'red'; 
    star2.style.fontSize = '20px';
    row.appendChild(star);
    row.appendChild(branch);
    row.appendChild(star2);
    tree.appendChild(row);
    document.body.appendChild(tree);
    i++;
    }
}
cristmas2();



////////
function padding(S,target) {
    const pad = '   '.repeat(target);
    return pad + S;
}
//js
function cristmas(){
    let r = parseInt(prompt("Enter number of rows"));
    console.log(r);
    let array='  *';
    console.log(padding(array,r));
    i=0;
    while(i<r-1){
        array=padding('*'+ ' | '.repeat(i*2+1) + '*',r-i);
        console.log(array);
        i++;
    }

}