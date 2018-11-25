## 探索 margin 折叠的意义是什么？并举一个例子说明

### margin 折叠是什么？

margin 折叠是指在两个或多个垂直方向上相邻的普通文档流中的盒子（父子或兄弟元素），在垂直方向上的外边距会发生叠加，这种情况下形成的外边距被称之为 margin 折叠。

### 为什么要设计 margin 折叠？

在设计的最早期就出现了 margin 折叠，这种理念是来源于传统排版的行间距概念，在多数情况下，折叠垂直外边距能更贴近设计师的预期。在 Word 排版中也有类似的概念。

### 为什么要探索 margin 折叠？

熟悉 margin 折叠发生的情况，为了取得预期的效果，也必须知道如何避免 margin 折叠。
例如此时，`p1`和`p2`之间就发生了折叠，实际的段落间距是 20px，若将注释取消，两个元素都成为浮动元素，此时两个元素都脱离了文档流，不再发生折叠，实际段落间距将变为 20+20=40px

```html
<html>
    <head>
        <meta charset="utf-8" />
        <title>homework2</title>
        <style type="text/css">
            p {
                margin: 20px;
                background: black;
                color: white;
                /* width: 100%; */
                /* float: left; */
            }
        </style>
    </head>
    <body>
        <div id="container">
            <p id="p1">Hello</p>
            <p id="p2">World!</p>
        </div>
    </body>
</html>
```
