class MeleService{
static getMele(){
    return fetch('https://api.le-systeme-solaire.net/rest/bodies')
    .then(res=>res.json())
}
}