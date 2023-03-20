let form = document.getElementById('form');
let taskList = []

console.log(task.value)


function addTask(){
    form.addEventListener('submit', function(event){
        //evitar que o formulário recarregue após o submit
        event.preventDefault();
        //elemento do input
        let task = document.getElementById('task');
        let inputValue = task.value.trim();
        if(inputValue !== ''){
            // console.log('valor:', inputValue);
            taskList.push(inputValue);
            console.log(taskList)
            task.value = '';
            showList();
        }
    })
}

function showList(){
    // let list = document.getElementsByTagName('ul')[0];
    let list = document.getElementById('lista')
    console.log(list)

    list.innerHTML = ''
    //percorrer cada elemento da lista e imprimir, conferir se está lendo cada task adicionada no array.
    taskList.forEach(function(item, index){
        //console.log(item)

        //criou a tag li para cada elemento da lista
        const li = document.createElement('li');
        li.classList.add('list-group-item');

        //criar o elemento de texto
        const texto = document.createTextNode(item);

        //inserir o texto dentro do li
        li.appendChild(texto)

        //criar o botão para remover
        let button = document.createElement('button');
        button.classList.add('btn', 'btn-danger', 'float-end');
        button.dataset.index = index;

        const x = document.createTextNode('x');
        button.appendChild(x)

        button.addEventListener('click',function(e){
            let index = e.target.dataset.index;
            console.log(index)

            taskList.splice(index, 1);
            showList()
        })

        li.appendChild(button);

        //inserir a lista na ul
        list.appendChild(li)

    })

}



//alert(`Adicionou: ${task.value}`);

//Peguei a lista que é o elemento ul
// let ul = document.getElementById('lista');

//Inserir o que foi digitado no input e colocar no formato
// let li = `<li class="list-group-item">${task.value}</li>`

// ul.innerHTML = li