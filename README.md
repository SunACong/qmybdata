# 黔牧云jquery启动教程

## 第一步修改配置文件generatorConfig.xml
- 将数据库的链接修改为自己的数据库链接，如果数据库版本不对应请修改pom.xml文件中的依赖版本
>  \<!--数据库链接URL，用户名、密码 -->
   \<jdbcConnection driverClass="com.mysql.cj.jdbc.Driver" connectionURL="jdbc:mysql://localhost:3307/qmy_sheep?serverTimezone=UTC" userId="root" password="123456">
## 第二步修改配置文件yml
- 数据库对应的链接修改为自己的数据库就可以了
> spring:  <br/>
     datasource: <br/>
      name: qmybdata <br/>
      url: jdbc:mysql://localhost:3307/qmy_sheep?serverTimezone=UTC <br/>
      username: root <br/>
      password: 123456 <br/>
      type: com.alibaba.druid.pool.DruidDataSource <br/>
      driver-class-name: com.mysql.cj.jdbc.Driver <br/>
