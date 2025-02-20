const btn = document.getElementById("btn")
btn.addEventListener("click", function() {
    alert("Hello World!")
}, false)   // event propagation: bubbling - capturing set to "false" by default