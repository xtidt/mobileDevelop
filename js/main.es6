document.getElementById('inputTarget').addEventListener('click', function() {
    var inputTextBox = document.getElementById('speakBottom');
    setInterval(function() {
        $('#inputTarget').notInView(1);

        $(window).scrollTop(10000);

        alert(1111);
    }, 1000)
}, true);


//判断元素是否在想要的区域，不在的话返回position；这段代码依赖zepto
$.fn.notInView = function(perc) {
        perc = perc || 0;

        var pos = this[0].getBoundingClientRect(),
            // getBoundingClientRect 是获取定位的，很怪异
            // top: 元素顶部到窗口（可是区域）顶部
            // bottom: 元素底部到窗口顶部
            // left: 元素左侧到窗口左侧
            // right: 元素右侧到窗口左侧
            // width/height 元素宽高

            $window = $(window),
            view = {
                height: $window.height(), //
                width: $window.width()
            },
            minTop = perc * (view.height - pos.height);
        //最小距离，判断元素是否在想要的位置

        if (pos.top < minTop || pos.top > view.height || pos.left < 0 || pos.left > view.width) {
            pos.viewHeight = view.height;
            pos.viewWidth = view.width;
            return pos;
        }
        return false;
    }
    //将元素移动到指定位置 perc百分比布局，0是顶部，1是底部
$.fn.moveToView = function(perc) { //百分比
    var type = this.css('position');
    //普通布局之外的将整个页面滚动到指定位置
    if (type !== 'fixed') {
        var pos = this.notInView(perc);
        if (pos) {
            var $window = $(window),
                oldScrollY = $window.scrollTop(),
                scrollY = oldScrollY + pos.top - perc * (pos.viewHeight - pos.height);

            $(window).scrollTop(scrollY);
        };
    }
    //fixed 布局处理
    else {
        this.css({
            'transform': 'translate3d(0, 0, 0)',
            '-webkit-transform': 'translate3d(0, 0, 0)'
        });
        var pos = this.notInView(perc);
        if (pos) {
            perc = perc || 0;
            var y = perc * (pos.viewHeight - pos.height) - pos.top;
            this.css({
                'transform': 'translate3d(0, ' + y + 'px, 0)',
                '-webkit-transform': 'translate3d(0, ' + y + 'px, 0)'
            });
        }
    }
}