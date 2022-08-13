package com.qmy.qmybdata.controller;

import com.qmy.qmybdata.entity.SheepInfo;
import com.qmy.qmybdata.service.sheep.SheepInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class QmyController {

    @Autowired
    SheepInfoService sheepInfoService;

    @ResponseBody
    @GetMapping("/health")
    public String health(){
        return "health";
    }

    @GetMapping("/index")
    public String index(){
        return "index";
    }

    /**
     * 主页面
     * @return
     */
    @GetMapping("/")
    public String mainPage(){
        return "mainpage";
    }

    /**
     * 溯源视频页面
     * @return
     */
    @GetMapping("/qmy")
    public String qmypage(){
        return "qmybdata";
    }

    /**
     * 单只羊只信息页面
     * @return
     */
    @GetMapping("/query")
    public String onesheep(@RequestParam String eartagid, Model model){
        SheepInfo sheepInfo = new SheepInfo();
        sheepInfo.setEartagid(eartagid);
        List<SheepInfo> sheepInfos = sheepInfoService.selectSheepByCondition(sheepInfo);
        model.addAttribute("sheep",sheepInfos.get(0));
        return "query";
    }
    /**
     * 溯源牧场页面
     * @return
     */
    @GetMapping(value= "/deal")
    public String dealpage() {
        return "dealpage";
    }

    /**
     * 智能咨询页面
     * @return
     */
    @GetMapping(value="/bigdata")
    public String bigdataController() {
        return "dataplatform";
    }

    /**
     * 信息页面
     * @return
     */
    @GetMapping(value="/message")
    public String messageController() {
        return "changemessage";
    }
}
