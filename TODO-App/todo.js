let ul = document.getElementById('list');
let li;


let addButton = document.getElementById('add')
addButton.addEventListener('click', addItem)

let removeButton = document.getElementById('remove')
removeButton.addEventListener('click', removeItem)

let deleteAllButton = document.getElementById('DeleteAll')
deleteAllButton.addEventListener('click', deleteAll)












function addItem()
{
   var input = document.getElementById('input');
   var item = input.value;
   ul = document.getElementById('list');
   var textNode = document.createTextNode(item);

   if(item === "")
   {
    //    console.log("please enter todo");
            // return false;
       var myElement = document.createElement('p');
       myElement.textContent = "please enter todo";
       document.querySelector('.controls').appendChild(myElement);
   }
   else{
       //create li
       li = document.createElement('li');

       //create input checkbox
       var checkbox = document.createElement('input')
       checkbox.type = 'checkbox';
       checkbox.setAttribute('id', 'check');

        //create label
       var label = document.createElement('label');

       //add these elements in web page
       ul.appendChild(li);
       li.appendChild(checkbox);
       label.appendChild(textNode);
       li.appendChild(label);
       ul.insertBefore(li, ul.childNodes[0]);
        
       setTimeout(() => {
        li.className = 'visual';
       }, 1000);


       input.value = '';
   }

}

function removeItem()
{
    li = ul.children;
    for(let index = 0; index <= li.length; index++){
        while(li[index] && li[index].children[0].checked){
            ul.removeChild(li[index]);
        }

    }
}
function deleteAll()
{
    li = ul.children;
    for(let index = li.length - 1; index >= 0 ; index--){
       
            ul.removeChild(li[index])
            // console.log(li[index])

    }     

}