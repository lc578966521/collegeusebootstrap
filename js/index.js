/*
 * @Author: lichong
 * @Date: 2019-04-17 12:17:14
 * @Last Modified by: lichong
 * @Last Modified time: 2019-04-17 15:43:56
 */
$(function () {
    // 导航点击事件
    let $allLis = $("#navbar-click li");
    $($allLis[0]).on("click",function(){
        $('html,body').animate({scrollTop:$("#about").offset().top},500);
    });
    $($allLis[1]).on("click",function(){
        $('html,body').animate({scrollTop:$("#product").offset().top},500);
    });
    $($allLis[2]).on("click",function(){
        $('html,body').animate({scrollTop:$("#hot").offset().top},500);
    });
    $($allLis[3]).on("click",function(){
        $('html,body').animate({scrollTop:$("#link").offset().top},500);
    });
    $($allLis[4]).on("click",function(){
        $('html,body').animate({scrollTop:$("#hot").offset().top},500);
    });
    $($allLis[5]).on("click",function(){
        $('html,body').animate({scrollTop:$("#footer").offset().top},500);
    });
    routerUrl();
    // 添加窗口更改事件
    $(window).on("resize", routerUrl);
    function routerUrl() {
        let clientW = $(window).width();
        let isShowBigImg = clientW >= 800;
        let $allItem = $(".carousel-inner .item")
        $allItem.each(function (index, item) {
            let src = isShowBigImg ? $(item).data("lg-img") : $(item).data("sm-img");
            let imgUrl = 'url(' + src + ')';
            $(item).css({
                'background-image': imgUrl
            });
            if(!isShowBigImg){
                let $img = '<img src="'+ src + '"/>';
                $(item).empty().append($img);
            }else{
                $(item).empty();
            }
        });
    }
});