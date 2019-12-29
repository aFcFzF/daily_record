1. 变量操作
``` bash
echo $abc -> 'no news is good news'

# 1. 取第一个news之前/之后所有字符  except: no / is good news
# 2. 取第一个news之前/所有所有字符（包含news）  expect: no news / news is good news
# 3. 替换第一个/全部news为message expect: no message is good news / no message is good message
# 4. 取前5个字符
```
2. ls 上两级路径
3. $() `` 、$(()) 、 ${} 区别