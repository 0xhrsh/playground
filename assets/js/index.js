function checkIfURLParameterExists(param) {
    const url = window.location.href;
    if (url.indexOf('?' + param + '=') != -1)
        return true;
    else if (url.indexOf('&' + param + '=') != -1)
        return true;
    return false
}
function main() {
    const BASE_URL = "https://assets.0xhrsh.com/";
    const urlParams = new URLSearchParams(window.location.search);
    var modelURL, softness, exposure, envImgURL, skyImgURL;

    var model = "model1";
    if (checkIfURLParameterExists('model')) {
        model = urlParams.get('model');
    }
    var modelURL = BASE_URL + '3d/' + model + ".glb";
    document.getElementById("ar_viewer").src = modelURL;

    if (checkIfURLParameterExists('ss')) {
        softness = urlParams.get('ss');
        document.getElementById("ar_viewer").setAttribute("shadow-softness", softness);
    }

    if (checkIfURLParameterExists('env')) {
        const envImg = urlParams.get('env');
        envImgURL = BASE_URL + 'img/' + envImg + ".jpg"
        document.getElementById("ar_viewer").setAttribute("environment-image", envImgURL);
    }

    if (checkIfURLParameterExists('exp')) {
        exposure = urlParams.get('exp');
        document.getElementById("ar_viewer").setAttribute("exposure", exposure);
    }

    if (checkIfURLParameterExists('sky')) {
        const skyImg = urlParams.get('sky');
        skyImgURL = BASE_URL + 'img/' + skyImg + ".jpg"
        document.getElementById("ar_viewer").setAttribute("skybox-image", skyImgURL);
    }
}