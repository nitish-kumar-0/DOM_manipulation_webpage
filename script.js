
//when btn pressed then this function will activated
 function changeText() {
      document.getElementById('demo-text').textContent = 'The DOM content has been updated!';
    }

function changeStyle(){
    const box = document.getElementById('style-box');
    box.style.backgroundColor='#dbeafe';
    box.style.color= '#1e3a8a';
    box.style.fontWeight = 'bold';

}

function addItem(){
    const li = document.createElement('a'); 
    li.textContent='new list item';
    document.getElementById('item-list').appendChild(a);
    
}

function removeItem(){
const list=document.getElementById('item-list');
    

    if (list.lastElementChild) {   //lastelementChild is a method to find list has element or not
       list.removeChild(list.lastElementChild);
    }
        // item.removeChild(item);
}


document.getElementById('name-input').addEventListener('input',function(){
    document.getElementById('output').textContent = 'hello, '+ this.value;
});

function toggleHighlight() {
      document.getElementById('class-text').classList.toggle('highlight');
    }

