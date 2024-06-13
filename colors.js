var colors = localStorage.getItem("colors");

if (!colors) {
    localStorage.setItem("darkMode", "no");
    colors = {
        primary: "black",
        secondary: "#dedede",
        bg: "white",
        container: "#F8F8F8",
        button: "#e8e8e8"
    };
    localStorage.setItem("colors", JSON.stringify(colors));
} else {
    colors = JSON.parse(colors);
}

document.documentElement.style.setProperty("--primary", colors.primary);
document.documentElement.style.setProperty("--secondary", colors.secondary);
document.documentElement.style.setProperty("--bg", colors.bg);
document.documentElement.style.setProperty("--container", colors.container);
document.documentElement.style.setProperty("--button", colors.button);
