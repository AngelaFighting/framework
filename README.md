angela's web framework learning

# 新建项目说明

1. 安装node，使用`node -v`和`npm -v`检查是否安装成功并查看版本

2. 命令行输入`npm init`，一路回车，执行成功后会在目录下生成package.json文件

3. 命令行输入`npm install bower -D`,执行成功后，在package.json会看到devDependencies里多了bower的依赖，目录下多了个node_modules文件夹

4. 命令行输入`bower init`，一路回车，执行成功后会在目录下生成bower.json文件

5. 新建个文本文件，然后重命名为`.bowerrc`，写入内容：`{"directory": "lib"}`，指定bower安装的依赖放在目录的lib文件夹下

6. 命令行输入`bower install bootstrap foundation -S`，执行成功后，在lib下会看到bootstrap和foundation框架库，在bower.json的dependencies中会有bootstrap和foundation的依赖

7. 命令行输入`npm install gulp gulp-pug -D`

8. 新建gulpfile.js，编写相应的gulp任务

9. 命令行输入`npm install semantic-ui`

过一会儿会出现设置 Semantic UI 的提示，按上下箭头可以选择：

```
❯ Automatic (Use defaults locations and all components)
  Express (Set components and output folder)
  Custom (Customize all src/dist values)
```

Automatic：自动配置，一切都用默认的设置。
Express：快速设置，只需要设置组件还有输出的目录。
Custom：自定义，完全自己去定义 src/dist 目录。

选择默认的 Automatic ，回车执行，又会提示：

```
[?] We detected you are using NPM. Nice!

    Is this your project folder?
    /Users/xiaoxue/Desktop/ninghao-semantic (Use arrow keys)
❯ Yes
  No, let me specify
```

问我们桌面上的 ninghao-semantic 这个目录是不是我的项目的目录， **Yes** ，再回车执行一下。 提示：

```
[?] Where should we put Semantic UI inside your project? (semantic/)
```

意思是要把 Semantic UI 放在项目目录的哪个目录的下面，默认这个目录就是 semantic 。回车执行，会完成安装，查看项目目录下面的东西，你会看到：

```
node_modules semantic semantic.json
```

进入到 semantic 这个目录的下面，然后再执行编译的命令。

```
cd semantic
gulp build
```

编译好的 Semantic UI 会放在 dist 这个目录的下面。这个目录有下面这些东西：

```
components  semantic.js  semantic.min.js
semantic.css  semantic.min.css themes
```

components 目录下面是单独的一些组件，如果你只想使用 Semantic UI 里的某些组件，可以在这个目录下面找到这些组件。如果你想使用全部的组件，可以使用 semantic.css 与 semantic.js ，或者使用它们的最小化之后的版本，semanitc.min.css 与 semantic.min.js 。

# 项目运行

1. 安装cnpm

`npm install -g cnpm --registry=https://registry.npm.taobao.org`

2. 安装依赖的模块

`cnpm install`
`bower install`

