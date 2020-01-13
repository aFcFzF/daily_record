1. 变量操作
``` bash
echo $abc -> 'no news is good news'

# 1. 取第一个news之前/之后所有字符  except: no / is good news
# 2. 取第一个news之前/所有所有字符（包含news）  expect: no news / news is good news
# 3. 替换第一个/全部news为message expect: no message is good news / no message is good message
# 4. 取前5个字符
```
2. ls 上两级路径
3. $() `` 、${}、 $(()) 的区别
    - $() 和 `` 差不多，都是把结果替换成命令，组成新命令；``兼容性更好
    - ${abc} 和 $abc 差不多，区别是前者能确定边界(，例如： a=1;b=2; $ab ${a}b
    - $(()) 有两点：1、能运算整数 2、进制转换 $((2#11)) === 3
