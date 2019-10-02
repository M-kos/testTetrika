let root = document.querySelector('#root');

root.addEventListener('click', (e) => {
    if (e.target.tagName == "DIV") {
        console.log(e.target.style.background);
    }
});