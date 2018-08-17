##`React`加载`stylus`文件
- 安装`stylus / stylus-loader`
- 使用npm的方式
  ``npm install stylus stylus-loader --save-dev``
- 使用yarn的方式
  ``yarn add stylus stylus-loader --save-dev``
- 在webpack配置依赖
- 先弹射出webpack所有配置(此操作是不可逆的)
- 使用npm的方式
  ``npm run eject``
- 使用yarn的方式
  ``yarn run eject``
- react-cli会询问你是否执行操作，并提示你这个操作是不可逆的
- 在弹射出来的config文件夹下找到`webpack.config.dev.js`
- 在module rules里面添加stylus-loader的规则
- 大概在160行左右
- 把 test: /\.css$/,改成test: /\.(css|styl|stylus)$/,
- 在`use`数组最后面添加一个下面的配置对象
- `{
         loader: "stylus-loader",
         options: {
           sourceMap: true
         }
       },`

## `footer-nav`

- 首先要在`mian.jsx`( 应用主界面路由组件 )里面定义好`navList`( 数组 )，
- 数组有多个对象，每个对象都是一个路由

## `<HashRouter>`

- 里面有且只有一个子元素
- 如果有多个就会抛出`A <Router> may have only one child element `

### `<NavLink>`

- 相当于`<a>`标签

## 数组`.map()`

- 每一次循环遍历，要在回调函数里面写`return`

## `Swiper`

- 不需要满足滑动要求，只需要应用`swiper`相对应的类