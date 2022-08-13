package com.qmy.qmybdata.controller;

import com.qmy.qmybdata.entity.PastureInfo;
import com.qmy.qmybdata.entity.SheepInfo;
import com.qmy.qmybdata.entity.TradeInfo;
import com.qmy.qmybdata.service.sheep.PastureInfoService;
import com.qmy.qmybdata.service.sheep.SheepInfoService;
import com.qmy.qmybdata.service.sheep.TradeInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class SheepController {

    @Autowired
    SheepInfoService sheepInfoService;
    @Autowired
    PastureInfoService pastureInfoService;
    @Autowired
    TradeInfoService tradeInfoService;

    /**
     * 根据条件查询羊只信息
     * @param sheepInfo
     * @return
     */
    @PostMapping("/selectSheepByCondition")
    @ResponseBody
    public List<SheepInfo> selectSheepByCondition(SheepInfo sheepInfo){
        return sheepInfoService.selectSheepByCondition(sheepInfo);
    }
    /**
     * 通过耳标号选择羊只信息
     * @param sheepInfo
     * @return
     */
    @PostMapping("/selectOneSheepByEarNum")
    @ResponseBody
    public SheepInfo selectOneSheepByEarNum(SheepInfo sheepInfo){
        return sheepInfoService.selectOneSheepByEarNum(sheepInfo);
    }

    /**
     * 查询牧场信息
     * @param pastureInfo
     * @return
     */
    @PostMapping("/selectPastureInfoByCondition")
    @ResponseBody
    public List<PastureInfo> selectPastureInfoByCondition(PastureInfo pastureInfo){
        return pastureInfoService.selectPastureInfoByCondition(pastureInfo);
    }

    /**
     * 查询交易信息
     * @param tradeInfo
     * @return
     */
    @PostMapping("/selectTradeInfoByCondition")
    @ResponseBody
    public List<TradeInfo> selectTradeInfoByCondition(TradeInfo tradeInfo){
        return tradeInfoService.selectTradeRecordByCondition(tradeInfo);
    }
    /**
     * 查询所有的区域
     * @return
     */
    @PostMapping("/listAllregion")
    @ResponseBody
    public List<String> listAllregion(){
        return sheepInfoService.listAllregion();
    }

    @PostMapping("/listAllregion1")
    @ResponseBody
    public List<String> listAllregion1(){
        return sheepInfoService.listAllregion1();
    }

    /**
     * 查询所有的圈舍
     * @return
     */
    @PostMapping("/listAllbuilding")
    @ResponseBody
    public List<String> listAllbuilding(){
        return sheepInfoService.listAllbuilding();
    }

    @PostMapping("/listAllbuilding1")
    @ResponseBody
    public List<String> listAllbuilding1(){
        return sheepInfoService.listAllbuilding1();
    }

    /**
     * 查询所有的品种
     * @return
     */
    @PostMapping("/listAllspecies")
    @ResponseBody
    public List<String> listAllspecies(){
        return sheepInfoService.listAllspecies();
    }

    /**
     * 查询所有的类型
     * @return
     */
    @PostMapping("/listAlltype")
    @ResponseBody
    public List<String> listAlltype(){
        return sheepInfoService.listAlltype();
    }

    /**
     * 按照条件查询耳标号
     * @param sheepInfo
     * @return
     */
    @PostMapping("/listEarnumByCondition")
    @ResponseBody
    public List<String> listEarnumByCondition(SheepInfo sheepInfo){
        sheepInfo.setEartagid(null);
//        System.out.println(sheepInfoService.listEarnumByCondition(sheepInfo));
        return sheepInfoService.listEarnumByCondition(sheepInfo);
    }
}
