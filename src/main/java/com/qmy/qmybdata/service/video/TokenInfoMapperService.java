package com.qmy.qmybdata.service.video;

import com.qmy.qmybdata.entity.TokenInfo;
import com.qmy.qmybdata.mapper.TokenInfoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Service
public class TokenInfoMapperService {

    @Autowired
    TokenInfoMapper tokenInfoMapper;

    public List<TokenInfo> selectTokenInfoByCondition(TokenInfo tokenInfo){
        return tokenInfoMapper.selectByCondition(tokenInfo);
    }

    public TokenInfo selectTokenInfoByName(String name){
        TokenInfo tokenInfo = tokenInfoMapper.selectByName(name);
        long expireTime = Long.parseLong(tokenInfo.getExpireTime());
        long expireOverTime = expireTime / 1000 - 24*60*60;//快过期的前一天
        long expireCurTime = new Date().getTime() / 1000;//仅仅精确到秒即可，所以除以1000
        if(expireCurTime>=expireOverTime){
            return new TokenInfo(tokenInfo.getId(), tokenInfo.getAppKey(), tokenInfo.getAppSecret(), tokenInfo.getExpireTime(), "expire", tokenInfo.getName());
        }
        return tokenInfo;
    }

    public Boolean updateTokenInfoByCondition(TokenInfo tokenInfo){
        try {
            tokenInfoMapper.updateByCondition(tokenInfo);
        } catch (Exception e) {
            return false;
        }
        return true;
    }

    public Boolean updateTokenInfoByPrimaryKey(TokenInfo tokenInfo){
        try {
            tokenInfoMapper.updateByPrimaryKey(tokenInfo);
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
        return true;
    }

    /**
     * 日期转时间戳
     * @param s
     * @return
     */
    public String dateToStamp(String s) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String res = "";
        if (!"".equals(s)) {
            try {
                res = String.valueOf(sdf.parse(s).getTime()/1000);
            } catch (Exception e) {
                System.out.println("传入了null值");
            }
        }else {
            long time = System.currentTimeMillis();
            res = String.valueOf(time/1000);
        }
        return res;
    }

    /**
     * 时间戳转日期
     * @param time
     * @return
     */
    public String stampToDate(long time) {
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        return format.format(new Date(time * 1000L));
    }
}
