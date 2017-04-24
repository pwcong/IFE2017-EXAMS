# 正则表达式之入门

## 任务目的
1. 掌握JavaScript正则表达式编写规则
2. 了解JavaScript中的正则表达式的特殊字符
3. 了解JavaScript提供的正则表达式相关方法
4. 能用正则表达式做一些简单文本或者数字校验

## 任务描述
1. 编写一个判断给定数字是否为手机号码的正则表达式，测试用例参照但不限于：
    ```
    18812011232  // 测试结果应该为 true
    18812312     // false
    12345678909  // false
    ```
2. 编写一个判断输入的字符串是否有相邻重复单词的正则表达式，测试用例可以参考但不限于：
    ```
    foo foo bar       // true
    foo bar foo       // false  有重复单词但是不相邻
    foo  barbar bar   // false
    ```

## 任务注意事项
1. 完成任务之后，可以对比别人的实现方案，但不建议未尝试就直接搜索答案
2. 在正则表达式的世界中，一个问题往往不止一种方案，可以尝试多种方法

## 参考资料
1. [MDN Regular Expressions: 了解JavaScript中正则表达式的基本知识](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
2. [正则表达式30分钟入门教程: 30分钟入门](http://deerchao.net/tutorials/regex/regex-1.htm)