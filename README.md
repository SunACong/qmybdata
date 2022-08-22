# 黔牧云jquery启动教程

<<<<<<< HEAD

## 后台启动
### 第一步修改配置文件generatorConfig.xml
- 将数据库的链接修改为自己的数据库链接，如果数据库版本不对应请修改pom.xml文件中的依赖版本
```xml
<!--数据库链接URL，用户名、密码 -->
<jdbcConnection driverClass="com.mysql.cj.jdbc.Driver" connectionURL="jdbc:mysql://localhost:3307/qmy_sheep?serverTimezone=UTC" userId="root" password="123456">
```
   
### 第二步修改配置文件yml
- 数据库对应的链接修改为自己的数据库就可以了
```yml
   spring: 
     datasource: 
      name: qmybdata
      url: jdbc:mysql://localhost:3307/qmy_sheep?serverTimezone=UTC
      username: root
      password: 123456
      type: com.alibaba.druid.pool.DruidDataSource
      driver-class-name: com.mysql.cj.jdbc.Driver
```
## 前端启动注意事项
- \resources\templates\mainpage.html文件,调试阶段可以配合qmy-ruoyi的本地后台地址来测试
```html
<!--智能生产 -->
<div class="div_link" id="div-mainproduct">
   <a  href="http://qianmuyun.vip:9528" th:href="@{http://qianmuyun.vip:9528}">
       <div style="height:100%;width:100%;"></div>
   </a>
</div>
```
- \resources\static\sheep\js\base.js文件，baseUrl是将所有的有关ruoyi后台请求的请求域名抽取出来了
> var baseUrl = "http://qianmuyun.vip:9528/prod-api"
=======
## base.js存放是新的后台的请求地址 修改前请提前修改好

测试切换账户是否改变

>>>>>>> 1857c59 (测试账户是否切换)
