package com.qmy.qmybdata.service.sheep;

import com.qmy.qmybdata.entity.TradeInfo;
import com.qmy.qmybdata.mapper.TradeInfoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TradeInfoService {
    @Autowired
    TradeInfoMapper tradeInfoMapper;

    public List<TradeInfo> selectTradeRecordByCondition(TradeInfo tradeInfo){
        return tradeInfoMapper.selectByCondition(tradeInfo);
    }
}
