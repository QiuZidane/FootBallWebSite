/********************************
*
* 下面是Slider的JS，有空在研究JQ...
*
*********************************/

var SLIDERChange = function() {
    // $('#SLIDER').css('background', 'SLIDER('+r.getValue()+','+g.getValue()+','+b.getValue()+')')
    console.log("sliding....");
};
// 身体的SLIDER
var bodeabbs1 = $('#bodeabbs1').slider()
        .on('slide', SLIDERChange)
        .data('slider');
var bodeabbs2 = $('#bodeabbs2').slider()
        .on('slide', SLIDERChange)
        .data('slider');
var bodeabbs3 = $('#bodeabbs3').slider()
        .on('slide', SLIDERChange)
        .data('slider');
var bodeabbs4 = $('#bodeabbs4').slider()
        .on('slide', SLIDERChange)
        .data('slider'); 
       

// 技术的SLIDER
var tech_abbs1 = $('#tech_abbs1').slider()
        .on('slide', SLIDERChange)
        .data('slider');
var tech_abbs2 = $('#tech_abbs2').slider()
        .on('slide', SLIDERChange)
        .data('slider');
var tech_abbs3 = $('#tech_abbs3').slider()
        .on('slide', SLIDERChange)
        .data('slider');
var tech_abbs4 = $('#tech_abbs4').slider()
        .on('slide', SLIDERChange)
        .data('slider');  


// 特殊能力的SLIDER
var spec_abbs1 = $('#spec_abbs1').slider()
        .on('slide', SLIDERChange)
        .data('slider');
var spec_abbs2 = $('#spec_abbs2').slider()
        .on('slide', SLIDERChange)
        .data('slider');
var spec_abbs3 = $('#spec_abbs3').slider()
        .on('slide', SLIDERChange)
        .data('slider');
var spec_abbs4 = $('#spec_abbs4').slider()
        .on('slide', SLIDERChange)
        .data('slider');  

// 进攻能力的SLIDER
var attack_abbs1 = $('#attack_abbs1').slider()
        .on('slide', SLIDERChange)
        .data('slider');
var attack_abbs2 = $('#attack_abbs2').slider()
        .on('slide', SLIDERChange)
        .data('slider');
var attack_abbs3 = $('#attack_abbs3').slider()
        .on('slide', SLIDERChange)
        .data('slider');
var attack_abbs4 = $('#attack_abbs4').slider()
        .on('slide', SLIDERChange)
        .data('slider');          

// 防守能力的SLIDER
var defen__abbs1 = $('#defen__abbs1').slider()
        .on('slide', SLIDERChange)
        .data('slider');
var defen__abbs2 = $('#defen__abbs2').slider()
        .on('slide', SLIDERChange)
        .data('slider');
var defen__abbs3 = $('#defen__abbs3').slider()
        .on('slide', SLIDERChange)
        .data('slider');
var defen__abbs4 = $('#defen__abbs4').slider()
        .on('slide', SLIDERChange)
        .data('slider');          
      

// *************
// g.setValue(51);
console.log(g.getValue());
// var g1 = $('#G').setValue(50);
// alert(1);