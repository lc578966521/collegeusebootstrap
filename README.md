## Bootstrap

##栅格流式布局
> 第一种：通过js的resize事件监听宽度变化
> 第二种：通过媒体查询监听screen宽度
+ @media screen and (max-width:768px){}
+ @media screen and (min-width:768px) and (max-width:992px){}

+ 若只使用一个类名，则在当前类名及以上按照比例划分，以下按照每个子容器100%显示
+ 若有多个不同的类名，
    > 例如：
    > <div class="col-md-4 col-lg-6">1</div>
    > <div class="col-md-4 col-lg-3">2</div>
    > <div class="col-md-4 col-lg-3">3</div>
    > 解释：大超大屏幕下以6,3,3划分，在大屏幕下以4,4,4划分，在小屏幕和超小屏幕下以100%,100%,100%划分

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
 [class^="icon-],
 [class*=" icon-"]{
     font-family: lk;
     font-style: normal;
 }

 + jquery的data()
    - 定义用属性值 data-name="1"来设置
    - 标签传值给jquery，$("div").data("name");
    - jquery传值给标签,$("div").data("name","2");

## 快速查找

+ 单个不涉及到交互的在【全局css样式】中查找
+ 多个不涉及到js交互的在【组件】中查找
+ 涉及到js交互的在【JavaScript插件】中查找
