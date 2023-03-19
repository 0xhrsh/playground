function checkIfURLParameterExists(param) {
    const url = window.location.href;
    if (url.indexOf('?' + param + '=') != -1)
        return true;
    else if (url.indexOf('&' + param + '=') != -1)
        return true;
    return false
}
function main() {
    const urlParams = new URLSearchParams(window.location.search);
    var modelURL, softness, exposure, envImgURL, skyImgURL;

    var model = "model1";
    if (checkIfURLParameterExists('model')) {
        model = urlParams.get('model');
    }
    var modelURL = "https://0xhrsh.com/hussain-assets/" + model + ".glb";
    document.getElementById("ar_viewer").src = modelURL;

    if (checkIfURLParameterExists('ss')) {
        softness = urlParams.get('ss');
        document.getElementById("ar_viewer").setAttribute("shadow-softness", softness);
    }

    if (checkIfURLParameterExists('env')) {
        const envImg = urlParams.get('env');
        envImgURL = "https://0xhrsh.com/hussain-assets/" + envImg + ".jpg"
        document.getElementById("ar_viewer").setAttribute("environment-image", envImgURL);
    }

    if (checkIfURLParameterExists('exp')) {
        exposure = urlParams.get('exp');
        document.getElementById("ar_viewer").setAttribute("exposure", exposure);
    }

    if (checkIfURLParameterExists('sky')) {
        const skyImg = urlParams.get('sky');
        skyImgURL = "https://0xhrsh.com/hussain-assets/" + skyImg + ".jpg"
        document.getElementById("ar_viewer").setAttribute("skybox-image", skyImgURL);
    }
}