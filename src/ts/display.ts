export function display(id: string, lng: number) {
    var element = document.getElementById(id);
    if(element !== null) {
        if(element.style.width == '0px') {
            if(lng == 0) {
                element.style.width = '25px';
                element.style.height = '25px';
            }
        } else {
                element.style.width = '0px';
                element.style.height = '0px';
        }
    }
}