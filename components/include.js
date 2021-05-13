function include(file) {

    var script = document.createElement('script');
    script.src = "components/" + file;
    script.type = 'text/javascript';
    script.defer = true;

    document.getElementsByTagName('head').item(0).appendChild(script);

}

include('navbar/navbar.js');
include('navbar/navbutton.js');
include('block/block.js');