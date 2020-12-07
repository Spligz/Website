var sex_button = null;

window.onload = function () {
    sex_button = document.getElementById("sex-button");

    sex_button.onmouseover = function () {
        show_help_bar();
    }

    document.getElementById("comdon-button").onclick = function () {
        //download();
        window.location = "naughty-file.txt";
    }

    document.getElementById("naughty-link").onclick = function () {
        window.location = "repent.html";
    }
}

function show_help_bar() {
    document.getElementById("help-bar").style.display = "block";
}

function download() {
    fetch('./naughty-file.txt')
    .then(resp => resp.blob())
    .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'naughty-file.txt';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
  })
  .catch(() => console.log("Error"));
}
