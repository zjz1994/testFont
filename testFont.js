function testFont(fontName) {
    var canvasInput = document.createElement("canvas");
    canvasInput.width = 50;
    canvasInput.height = 50;
    var contextInput = canvasInput.getContext('2d');
    var textMetricsInput;
    //画文本
    text = "重";

    function drawTextInput(text) {
        contextInput.font = '30px ' + fontName;
        contextInput.textBaseline = 'middle'; //设置文本的垂直对齐方式
        contextInput.textAlign = 'center'; //设置文本的水平对对齐方式
        textMetricsInput = contextInput.measureText(text);
        contextInput.fillStyle = '#000';
        contextInput.strokeStyle = '#000';
        contextInput.fillText(text, canvasInput.width / 2,
            canvasInput.height / 2);
        contextInput.strokeText(text, canvasInput.width / 2,
            canvasInput.height / 2);
    };
    drawTextInput(text);
    fontInput = canvasInput.toDataURL();

    var canvasCom = document.createElement("canvas");
    canvasCom.width = 50;
    canvasCom.height = 50;
    var contextCom = canvasCom.getContext('2d');
    var textMetricsCom;
    //画文本
    function drawTextCom(text) {
        contextCom.font = '30px ' + '不存在的字体';
        contextCom.textBaseline = 'middle'; //设置文本的垂直对齐方式
        contextCom.textAlign = 'center'; //设置文本的水平对对齐方式
        textMetricsCom = contextCom.measureText(text);
        contextCom.fillStyle = '#000';
        contextCom.strokeStyle = '#000';
        contextCom.fillText(text, canvasCom.width / 2,
            canvasCom.height / 2);
        contextCom.strokeText(text, canvasCom.width / 2,
            canvasCom.height / 2);
    };
    drawTextCom(text);
    fontCom = canvasCom.toDataURL();
    return !(fontInput == fontCom);
}
