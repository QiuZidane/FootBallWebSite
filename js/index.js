// 绑定列表点击事件，点击后会传递event给绑定的时间
var navList = document.getElementById('nav-pills');
if (navList) {
    navList.addEventListener('click', navSelect, false);
};
function navSelect(event) {
    var selectedBtn = event.target;             // click事件对象
    var pageUrl = "../pages/"+selectedBtn.getAttribute('urltag');
    console.log(selectedBtn.innerHTML+": 加载:"+pageUrl);
    loadPage(pageUrl,'middleDivDes');
}
//装页面到指定id的div中
function loadPage(pageUrl,divId){
    var ajaxobj = new AJAXRequest; // 创建AJAX对象,类在刚刚那个文件里了
    ajaxobj.method = "GET";   // 设置请求方式为GET
    ajaxobj.url = pageUrl;  // 响应的URL,以后可以改为一些动态处理页,这在页里可以有目的返回不同的数据
    ajaxobj.callback = function(xmlobj) { // 设置回调函数，输出响应内容
         // document.getElementById('middleDivDes').innerHTML = xmlobj.responseText;    
         document.getElementById(divId).innerHTML = xmlobj.responseText; 
    }
    ajaxobj.send();    // 发送请求
}

//加载页面时先load进welcomepage.html
// loadPage("../pages/welcomepage.html",'middleDivDes');
loadPage("../pages/myabbs.html",'middleDivDes');