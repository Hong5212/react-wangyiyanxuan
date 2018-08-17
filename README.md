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

## 底部导航

1. 先`components`和`containers`文件夹里面建好对应的文件

2. 在`index.js`( 入口文件 )引入`main.jsx`文件

3. 在`main.jsx`引入`react-router-dom`库里面的`Switch,Route,Redirect`

4. 在`main.jsx`引入相对应的路由，在默认暴露对象里面定义导航数组

5. 导航数组里面有对应的路由对象，路由对象有`path`，`component`，`icon`，`text`等属性

6. `render(){}`对象应该`return()`，括号里面应该有个根标签

7. `<Switch>`里面只会保存一条路由，其他会被删除

8. ```js
   render() {
     return (
         <div>
           <Switch>
             <Route path='/home' component={Home}/>
             <Route path='/detail' component={Detail}/>
             <Route path='/classify' component={Classify}/>
             <Route path='/shopCart' component={ShopCart}/>
             <Route path='/personal' component={Personal}/>
             <Redirect to='/home'/>{/*重定向*/}
           </Switch>
           <FooterNav navList={this.navList}/>
         </div>
     )
   }
   ```

9. ```js
   // 在FooterNav使用propTypes接受navList
   import PropTypes from 'prop-types'
   static propTypes = {
     navList: PropTypes.array.isRequired
   };
   ```

10. 在`footer-nav.jsx`里面把`<a>`替换成`react-router-dom`的`<NavLink>`

11. `footer-nav.jsx`以`withRouter(FooterNav)`形式暴露

12. ```js
    // 如何在原有的className上添加一个新的class( 类 )
    // 使用字符串模版
    {`原有的类${三元运算符}`} // 字符里面的空格有效
    ```
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