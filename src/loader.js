function load(url) {
    let script = document.createElement("script");

    script.setAttribute("src", url);
    script.setAttribute("type", "text/javascript");

    document.body.appendChild(script);

    script.addEventListener("load", () => {
        console.log("File loaded")
    });

    script.addEventListener("error", (e) => {
        console.error("error", e);
    });
}

load("http://localhost:8080/main.bundle.js");