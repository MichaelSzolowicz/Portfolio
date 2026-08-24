document.querySelectorAll('[data-copy]').forEach(element => {
    element.addEventListener('click', () => {
        const text = element.getAttribute('data-copy');
        navigator.clipboard.writeText(text);
        alert("Copied to clipboard.");
    });
});