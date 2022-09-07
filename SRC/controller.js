'use strict';
const form=document.querySelector(".form");
const title=document.querySelector(".title");
const description=document.querySelector(".description");
const list = document.querySelector(".list")
const teeendok=document.querySelector(".teendok")
class Task{
    constructor(titleV,descriptionV){
        this.titleV=titleV;
        this.descriptionV=descriptionV; 
    }
}
//const button = document.querySelector(".submit")
//const Tasks={}


class App{
    tasks=[];
    constructor(){

        form.addEventListener('submit', this._newTask.bind(this));
        
    }     

    _newTask(e){
        e.preventDefault();
        const titleV=title.value;
        const descriptionV=description.value;
        let task =new Task(titleV,descriptionV);
        this.tasks.push(task);
       // console.log(this.tasks)
        this._createTasks(task)   
    }
    _createTasks(task){
        let html=`
        <div class="item">
            <h1 class="itemTitle">${task.titleV}</h1>
            <p class="itemDescription">${task.descriptionV}</p>
        </div>
        
        `
        console.log(task)
        teeendok.insertAdjacentHTML('afterend', html);
    }

    
    
}
const app = new App();




/*
function log(){
    let x =document.querySelector(".title").value;
    let y =document.querySelector(".description").value;
    console.log(x,y);
    return x,y;
}
button.addEventListener("click",functiona)

function doCreator(x,y){
    const html=`
    <div class="item">
        <h1 class="itemTitle">${x}</h1>
        <p class="itemDescription">${y} </p>
        <button class="end">End</button>
    </div>`;
    const list=document.querySelector(".list")
    list.insertAdjacentHTML("afterbegin",html)
}

function functiona(){
    log();
    doCreator();
}*/