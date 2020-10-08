//Create tasks array
var tasks = [];

//priority select element
var priority = document.getElementById("priority");

// Create close button and append it to each list item
var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking the Add button
function newElement() {
    //the actual priority
  var priorityValue = priority.options[priority.selectedIndex].value;
  console.log(priorityValue)


  var li = document.createElement("li");
    //set bg color based on priority
    if (priorityValue == "low") {
        li.setAttribute('class', 'bg-info text-white')  
    }
    if (priorityValue == "medium") {
        li.setAttribute('class', 'bg-warning text-white')  
    }
    if (priorityValue == "high") {
        li.setAttribute('class', 'bg-danger text-white')  
    }
    
  //add new item and set name to the given input
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Input Task Name");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  //Add new task to tasks array
  tasks.push(inputValue);
  console.log(tasks[tasks.length - 1] + " added to tasks");

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}



