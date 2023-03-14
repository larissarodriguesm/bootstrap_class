let task = document.getElementById('task');

console.log(task.value)


function addTask (){
    //alert(`Adicionou: ${task.value}`);
    
    //Peguei a lista que é o elemento ul
    let ul = document.getElementById('lista');

    //Inserir o que foi digitado no input e colocar no formato
    let li = `<li class="list-group-item">${task.value}</li>`

    ul.innerHTML = li
}