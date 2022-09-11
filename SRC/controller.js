'use strict';
const form = document.querySelector(".form");
const title = document.querySelector(".title");
const description = document.querySelector(".description");
const list = document.querySelector(".list")
const ListTitle = document.querySelector(".ListTitle")
class Task {
    constructor(id,titleV, descriptionV) {
        this.id=id;
        this.titleV = titleV;
        this.descriptionV = descriptionV;

          
    }
}


class App {
    tasks = [];
    constructor() {
        //get the data
        this._getLocalStorage()
        //get new data
        form.addEventListener('submit', this._newTask.bind(this));
        list.addEventListener('click', this.removeData.bind(this))
    }
    
    _c(){
        console.log("helo")
    }
    
      _newTask(e) {
        e.preventDefault();
        const titleV = title.value;
        const descriptionV = description.value;
        let date = new Date();
        let id = (Date.now() + '').slice(-10);
        let task = new Task(id,titleV, descriptionV);
        this.tasks.push(task);
        this._renderTasks(task)
        this._clear();
        this._setLocalStorage()

    }
    _renderTasks(task) {
        let html = `
        <div class="item" id='${task.id}' data-id="${task.id}">
            <h1 class="itemTitle">${task.titleV}:</h1>
            <p class="itemDescription">${task.descriptionV}</p>
            <div class=" button">
                <button class="btn finish" "> finish</button>
                <button class="btn edit"> edit</button>
                <button class="btn delete">delete</button    
            </div>
        </div>
        
        `
        ListTitle.insertAdjacentHTML('afterend', html);
    }
    _setLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    _getLocalStorage() {
        const data = JSON.parse(localStorage.getItem('tasks'));
        if (!data) return;

        this.tasks = data;
        this.tasks.forEach(task => {
            this._renderTasks(task);
            
        });
    }
    removeData(e){
        const taksEL = e.target.closest('.item');
        if (!taksEL) return;
        const task = this.tasks.find(
        taks => taks.id ===taksEL.dataset.id
        );
        const indexofTask =this.tasks.indexOf(task);
        this.tasks.splice(indexofTask); 
        const element = document.getElementById(task.id);
        element.remove();
        localStorage.clear();
        this._getLocalStorage();
        

    }
    _clear() {
        title.value = "";
        description.value = '';
    }
}
const app = new App();
