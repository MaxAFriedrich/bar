function make() {
    try {
        height = Math.min(document.getElementById("wrap").clientHeight, document.getElementById("wrap").clientWidth);
        document.getElementById("wrap").innerHTML = new QRCode({
            msg: document.getElementById("inp").value
            , dim: height
            , pad: 4
            , mtx: -1
            , ecl: "H"
            , ecb: 1
            , pal: [document.getElementById("color").value, "#ffffff"]
            , vrb: 0

        }).outerHTML;

    }
    catch {

    }
}

function print() {
    var html_string = "<script>window.print();</script>" + document.getElementById("wrap").innerHTML;
    document.getElementById('printer').src = "data:text/html;charset=utf-8," + escape(html_string);
}

function down() {

    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    v = canvg.Canvg.fromString(ctx, document.getElementById("wrap").innerHTML);
    v.start();
    //var canvas = document.getElementById("mycanvas");
    var img = canvas.toDataURL("image/png");
    //document.getElementById("downer").innerHTML = '<img src="'+img+'"/>';

    var element = document.createElement('a');
    element.setAttribute('href', img);
    element.setAttribute('download', "bar.png");

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}