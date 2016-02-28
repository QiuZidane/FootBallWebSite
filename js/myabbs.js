/********************************
*
* 下面是Slider的JS，有空在研究JQ...
*
*********************************/

var RGBChange = function() {
    // $('#RGB').css('background', 'rgb('+r.getValue()+','+g.getValue()+','+b.getValue()+')')
    console.log("sliding....");
};
var g = $('#G').slider()
        .on('slide', RGBChange)
        .data('slider');
g.setValue(51);
console.log(g.getValue());
// var g1 = $('#G').setValue(50);
// alert(1);