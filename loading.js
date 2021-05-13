const legacy = false;
function reload(e) { 
    var stringToHTML = function (str) {
        var parser = new DOMParser();
        var doc = parser.parseFromString(str, 'text/html');
        return doc.body;
    };
    function load(text, url) {
        let content = stringToHTML(text).querySelector('#content');
        document.querySelector("#content").innerHTML = content.innerHTML;
        let newurl = url.replace(".html", "");
        history.pushState(null, null, newurl);
    }
    fetch(e)
        .then(function (response) {
            return response.text();
        }).then(function (html) {
            load(html, e);
        }).catch(function (err) {
            console.warn("Couldn't load html", err);
        });
}

document.addEventListener('update', (e) => { reload(e.detail)});
