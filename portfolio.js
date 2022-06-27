function showPage(page) {
    document.querySelectorAll(".page").forEach(div => {
        div.style.display = 'none';
    });
    document.querySelector(`#${page}`).style.display = 'flex';
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('button').forEach(button => {
        button.onclick = () => {
            const section = button.getAttribute("data-page");

            showPage(section);

            document.querySelector('h3').innerHTML = button.innerHTML;

            window.history.pushState({section: section}, `${section}`, `/${section}`)
        }
    });
});
