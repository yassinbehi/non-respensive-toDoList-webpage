let input = document.getElementById("input");
var btn = document.getElementById("btn");
let container = document.getElementById("container");
let clear = document.querySelector("#clear");
i=1;
let tasks;




if(localStorage.tsk != null){
    tasks = JSON.parse(localStorage.tsk)
    display(tasks);
    btn.onclick = function() { add(tasks); };

}


else{
    tasks = [];
    btn.onclick = function() { add(tasks); };
}

clear.onclick = function(){localStorage.clear()
    container.innerHTML = '';
    tasks = [];
    i=1;
}


//----------------------fonctions------------------------//
    function add(str_tasks){
        let atask = {
            title:input.value,
            sellected:false,
        }
        if (input.value != '') {
            let div = document.createElement("div");
            let task = document.createElement("p");
            let bool = document.createElement("p");
            task.innerHTML = i + '' + '.' + ' ' + input.value;
            bool.innerHTML = "not yet";
            atask.title = input.value;
            container.appendChild(div);
            div.appendChild(task);
            div.appendChild(bool);
            div.classList.add("tas");
            bool.classList.add("booln");
            i++;
            div.addEventListener("click", function () {
                this.classList.remove("tas");
                this.classList.add("taschek");
                bool.classList.remove("booln");
                bool.classList.add("booly");
                bool.innerHTML = 'done';
                atask.sellected = true;
                localStorage.setItem('tsk', JSON.stringify(str_tasks));

            });
            str_tasks.push(atask);
            localStorage.setItem('tsk', JSON.stringify(str_tasks));
            input.value = '';
            return i;
        }
    }

    function display(str_tasks) {
        str_tasks.forEach((taskObj, index) => {
            let div = document.createElement("div");
            let task = document.createElement("p");
            let bool = document.createElement("p");
    
            // Set task title and selection status
            task.innerHTML = (index + 1) + '.' + ' ' + taskObj.title;
            bool.innerHTML = taskObj.sellected ? 'done' : 'not yet';
    
            container.appendChild(div);
            div.appendChild(task);
            div.appendChild(bool);
    
            // Add CSS classes based on task status
            if (taskObj.sellected) {
                div.classList.add("taschek");
                bool.classList.add("booly");
            } else {
                div.classList.add("tas");
                bool.classList.add("booln");
            }
    
            // Click event for task toggle
            div.addEventListener("click", function() {
                if (!taskObj.sellected) {
                    this.classList.remove("tas");
                    this.classList.add("taschek");
                    bool.classList.remove("booln");
                    bool.classList.add("booly");
                    bool.innerHTML = 'done';
                    taskObj.sellected = true;
                    localStorage.setItem('tsk', JSON.stringify(str_tasks));
                }
            });
            i++;
        });
    }

