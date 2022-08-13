package com.qmy.qmybdata.service.sheep;

import com.qmy.qmybdata.entity.SheepInfo;
import com.qmy.qmybdata.mapper.AreaBuildingColumnInfoMapper;
import com.qmy.qmybdata.mapper.SheepInfoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SheepInfoService{

    @Autowired
    SheepInfoMapper sheepInfoMapper;
    @Autowired
    AreaBuildingColumnInfoMapper areaBuildingColumnInfoMapper;

    public List<SheepInfo> selectSheepByCondition(SheepInfo sheepInfo){
        return sheepInfoMapper.selectSheepByCondition(sheepInfo);
    }

    public SheepInfo selectOneSheepByEarNum(SheepInfo sheepInfo){
        return sheepInfoMapper.selectSheepByCondition(sheepInfo).get(0);
    }

    public List<String> listAllregion(){
        return areaBuildingColumnInfoMapper.listAllregion();
    }
    public List<String> listAllregion1(){
        return areaBuildingColumnInfoMapper.listAllregion1();
    }

    public List<String> listAllbuilding(){
        return areaBuildingColumnInfoMapper.listAllbuilding();
    }
    public List<String> listAllbuilding1(){
        return areaBuildingColumnInfoMapper.listAllbuilding1();
    }

    public List<String> listAllspecies(){
        return sheepInfoMapper.listAllspecies();
    }

    public List<String> listAlltype(){
        return sheepInfoMapper.listAlltype();
    }

    public List<String> listEarnumByCondition(SheepInfo sheepInfo){
        return sheepInfoMapper.listEarnumByCondition(sheepInfo);
    }
}
