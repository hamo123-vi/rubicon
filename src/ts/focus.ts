export function focus(id: string)  {
    var element = document.getElementById(id);
    if(element !== null) {
        element.focus();
    }
}