let string="";
let buttons = document.querySelectorAll('.button')
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click' , (e)=>{
        if (e.target.innerHTML === '=') {
            string=eval(string);
            document.querySelector('input').value=string
        } else {
            console.log(e.target)
        string=string + e.target.innerHTML;
        document.querySelector('input').value=string
        }

    })
})
let names={
    name:"parez",
    salary:18000,
    job:"Developer",
    shift:"day"
}
let nam=document.getElementById("bbb");

function onc(){
    let btnn=document.getElementById('btn');
    let para=document.getElementById('para');
    if(para.style.display !='none'){
    para.style.display='none'
}
else{
    para.style.display='block'
}
}
