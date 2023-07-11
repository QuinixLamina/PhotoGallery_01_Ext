function toggleTheme() {
    var body = document.body;
    if (body.classList.contains("dark")) {
        body.classList.remove("dark");
        body.classList.add("bright");
    } else {
        body.classList.remove("bright");
        body.classList.add("dark");
    }
}
