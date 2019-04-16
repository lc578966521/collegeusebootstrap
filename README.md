## Bootstrap

##栅格流式布局
> 第一种：通过js的resize事件监听宽度变化
> 第二种：通过媒体查询监听screen宽度
+ @media screen and (max-width:768px){}
+ @media screen and (min-width:768px) and (max-width:992px){}

# 
+ 用响应式工具来控制区域显示或隐藏
> visible- 显式 
> hidden-隐藏

# 
+ 后缀对应
> -xs < 768px
> -sm >768px
> -md >=992px
> -lg >=1200

# 
+ 对应的颜色信息后缀名
	- default 幽灵色
	- muted 灰色
	- primary 深蓝色
	- success 绿色
	- info 淡蓝色
	- warning 黄色
	- danger 红色

# 
[BBG](http://blog.koalite.com/bbg/ "bootstrap插件")
> 按钮插件生成原生bootstrap类

+  @font-face{
     font-family: lk;
     src:
        url(../fonts/lk.eot) format('embedded-opentype'),
        url(../fonts/lk.svg) format('svg'),
        url(../fonts/lk.ttf) format('truetype'),
        url(../fonts/lk.woff) format('woff')
 }
 
 /* 全局配置 */
 [class*="icon-"]{
     font-family: lk;
     font-style: normal;
 }