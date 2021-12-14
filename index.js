let tasks= [];
let i=0;
let fn = function(){

    let input_elem =  document.getElementsByTagName('input')[0];
     let task= input_elem.value;
     tasks.push(task);
     if(task ==""){
         alert("Enter some Task");
         return;
     }
    // console.log(tasks);
    let new_task= document.createElement('li');
   i+=1;
    new_task.id=`task_${i}`;
   
   
    let btn = document.createElement('button');
   
    btn.innerText="Delete";
    btn.id=`delbtn_${i}`;
    btn.addEventListener("click",del);
    btn.style.backgroundColor="red";
    btn.style.marginLeft="20px";
    let chbx = document.createElement('INPUT');
    let str1="Mark a Done";
    chbx.type="checkbox";
    chbx.id="chbx";
    let label = document.createElement('label');
    label.htmlFor="chbx";
    label.style.fontSize="medium";
    label.style.color="black";
    label.appendChild(document.createTextNode(str1));
    
   
    new_task.innerHTML = i +" "+ task;
    new_task.appendChild(btn);
    new_task.appendChild(chbx);
    new_task.appendChild(label);

    let list = document.getElementsByTagName('ul')[0];
    list.appendChild(new_task);
   
}

let del = function(){
    let del_id = this.id;
    let ide= del_id.split("_");
    let j = ide[1];
    let str = `task_${j}`;
   tasks.pop(j);
   console.log(tasks);
    let task_del = document.getElementById(str);
    task_del.remove();
}