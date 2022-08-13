package com.qmy.qmybdata;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.qmy.qmybdata.mapper")
public class QmybdataApplication {

    public static void main(String[] args) {
        SpringApplication.run(QmybdataApplication.class, args);
        System.out.println("羊只监测系统启动成功！！！");
    }

}
