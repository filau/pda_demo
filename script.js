function elementFocus(el) {
    if (el.value == el.dataset.defaultValue) el.value = "";
    el.style.color = "black";
    el.addEventListener('focusout', (event) => {
        const el = event.target;
        if (el.value == "") {
            el.style.color = "grey";
            el.value = el.dataset.defaultValue;
        }
    })
}
