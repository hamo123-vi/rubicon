export function getId() {
    return window.location.href.split('/').slice(-1);
}