document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please Enter a Task")
    }
    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>

                <button class="modify">
                    <i class="fa fa-edit"></i>
                </button>
                <button class="delete">
                    <i class="fa fa-trash-alt"></i>
                </button>

            </div>
             
        `;

        document.querySelector("#newtask input").value = "";

        var current_tasks = document.querySelectorAll(".delete");


        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        var tasks = document.querySelectorAll(".task");
        for(var i=0; i<tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }


        var modify_buttons = document.querySelectorAll(".modify");
        for (var i = 0; i < modify_buttons.length; i++) {
            modify_buttons[i].onclick = function () {
        var taskText = this.parentNode.querySelector("#taskname").textContent;
        var newTaskText = prompt("Modify task:", taskText);

            if (newTaskText !== null) {
            this.parentNode.querySelector("#taskname").textContent = newTaskText;
                }
             };
        }


    
      
   }
}