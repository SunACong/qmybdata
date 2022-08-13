package com.qmy.qmybdata.service.sheep;

import com.qmy.qmybdata.entity.PastureInfo;
import com.qmy.qmybdata.mapper.PastureInfoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PastureInfoService {

    @Autowired
    PastureInfoMapper pastureInfoMapper;

    public List<PastureInfo> selectPastureInfoByCondition(PastureInfo pastureInfo){
        return pastureInfoMapper.selectPastureInfoByCondition(pastureInfo);
    }
}
