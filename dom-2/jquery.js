window.jquery = function (selector) {
    const elements = document.querySelectorAll(selector)
    return {
        addClass(className) {
            for (let i = 0; i < elements.length; i++) {
                const element = elements[i]
                Element.classList.add(className)
            }
            return this
        },
        find() {

        }
    }
}