# terminal配置
## 安装
1. `brew install zsh`(osx15 就跳过吧)
2. sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
2. vim ~/.zshrc 修改 THEME="maran"
3. cd theme, 去掉主机名
4. autojump
``` bash
brew install autojump
# 之后添加到 plugins
# 之后运行下面
[[ -s $(brew --prefix)/etc/profile.d/autojump.sh ]] && . $(brew --prefix)/etc/profile.d/autojump.sh
```
5. brew install zsh-syntax-highlighting (不用添加plugins)
6. 双击ecs sudo

## vim 相关
1. 快速移动  w 向后，b 向前, 删除d
