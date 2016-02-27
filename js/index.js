//切换网页，装在到指定id的div中
var ajaxobj=new AJAXRequest;    // 创建AJAX对象,类在刚刚那个文件里了
ajaxobj.method="GET";   // 设置请求方式为GET
ajaxobj.url="record.html";  // 响应的URL,以后可以改为一些动态处理页,这在页里可以有目的返回不同的数据
ajaxobj.callback=function(xmlobj) { // 设置回调函数，输出响应内容
     document.getElementById('middleDivDes').innerHTML = xmlobj.responseText;    
}
ajaxobj.send();    // 发送请求