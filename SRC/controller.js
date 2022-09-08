'use strict';
const form = document.querySelector(".form");
const title = document.querySelector(".title");
const description = document.querySelector(".description");
const list = document.querySelector(".list")
const ListTitle = document.querySelector(".ListTitle")
const finish = document.querySelector(".finish")

class Task {
    constructor(titleV, descriptionV) {
        this.titleV = titleV;
        this.descriptionV = descriptionV;
    }
}
//const button = document.querySelector(".submit")
//const Tasks={}


class App {
    tasks = [];
    constructor() {
        //get the data
        this._getLocalStorage()
        //get new data
        form.addEventListener('submit', this._newTask.bind(this));
    }
//    finish.addEventListener('submit', this._newTask.bind(this));

    reset() {
        localStorage.removeItem('workouts');
        location.reload();
      }
    _newTask(e) {
        e.preventDefault();
        const titleV = title.value;
        const descriptionV = description.value;
        let task = new Task(titleV, descriptionV);
        this.tasks.push(task);
        // console.log(this.tasks)
        this._renderTasks(task)
        this._clear();
        this._setLocalStorage()
    }


    _renderTasks(task) {
        let html = `
        <div class="item">
            <h1 class="itemTitle">${task.titleV}:</h1>
            <p class="itemDescription">${task.descriptionV}</p>
            <div class=" button">
                <button class="btn finish"> finish</button>
                <button class="btn edit"> edit</button>
                <button class="btn delete">delete</button    
            </div>
        </div>
        
        `
        //console.log(task)
        ListTitle.insertAdjacentHTML('afterend', html);
    }
    _clear() {
        title.value = "";
        description.value = '';
    }


    _setLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    _getLocalStorage() {
        const data = JSON.parse(localStorage.getItem('tasks'));
        console.log(data)
        if (!data) return;

        this.tasks = data;
        console.log(data);
        this.tasks.forEach(task => {
            this._renderTasks(task);
            
        });
    }
}



const app = new App();
