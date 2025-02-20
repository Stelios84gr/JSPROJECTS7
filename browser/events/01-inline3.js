const btn = document.getElementById("btn")
btn.addEventListener("click", function() {
    alert("Hello World!")
}, false)   // useCapture: false (default) - handler executed in bubbling phase