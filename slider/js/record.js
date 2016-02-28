// Instantiate a slider
var mySlider = new Slider("input.slider", {
    // initial options object
    id:"SC",
    min:0,
    max:100,
    step:1

});
 
// Call a method on the slider
var value = mySlider.getValue();
 
// For non-getter methods, you can chain together commands
mySlider
    .setValue(50);
    



var RGBChange = function() {
    // $('#RGB').css('background', 'rgb('+r.getValue()+','+g.getValue()+','+b.getValue()+')')
    console.log("sliding....");
};

var g = $('#G').slider()
        .on('slide', RGBChange)
        .data('slider');

var S = $('#SC').slider()
        .on('slide', RGBChange)
        .data('slider');