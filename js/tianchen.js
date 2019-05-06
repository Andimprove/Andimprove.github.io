$(document).ready(function(){
    
    $("#Banner").owlCarousel({
        autoPlay: 2500,
        navigation: false,
        singleItem:true,
        stopOnHover: true,
        transitionStyle: 'fadeUp',

    });
    
    $("#Cert").owlCarousel({
        autoPlay: true,
        navigation: false,
        pagination: false,
        singleItem:true,
        stopOnHover: true,
    });
    
    //顶部导航以及二级菜单鼠标效果
    $('.menu > ul > li').each(function(){
        
        var SubNum    = $(this).find('.submenu').children().length,
            SubHeight = $(this).find('.submenu > li').outerHeight(true);
        
        //鼠标移入
        $(this).hover(function(){
            
            //二级菜单展开高度
            $(this).find('.submenu').css('height', SubNum*SubHeight + (SubNum - 1));

        //鼠标移出
        },function(){
            
            //二级菜单取消高度
            $(this).find('.submenu').css('height', 0);
            
        });
        
    });
    
    //在线客服
    $(".online .left").click(function(){
        
        $(this).parent().parent().toggleClass("online-move");
        
    })
    
    
});

//日期格式化函数
Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};
