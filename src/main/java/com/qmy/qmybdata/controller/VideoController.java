package com.qmy.qmybdata.controller;

import com.qmy.qmybdata.entity.TokenInfo;
import com.qmy.qmybdata.entity.VideoInfo;
import com.qmy.qmybdata.service.video.TokenInfoMapperService;
import com.qmy.qmybdata.service.video.VideoInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping(value = "/video")
public class VideoController {
    @Autowired
    TokenInfoMapperService tokenInfoMapperService;
    @Autowired
    VideoInfoService videoInfoService;

    @GetMapping("/updateTokenInfoByCondition")
    @ResponseBody
    public Boolean updateTokenInfoByCondition(TokenInfo tokenInfo){
        return tokenInfoMapperService.updateTokenInfoByCondition(tokenInfo);
    }

    @GetMapping("/updateTokenInfoByPrimaryKey")
    @ResponseBody
    public Boolean updateTokenInfoByPrimaryKey(TokenInfo tokenInfo){
        return tokenInfoMapperService.updateTokenInfoByPrimaryKey(tokenInfo);
    }

    @PostMapping("/selectTokenInfoByName")
    @ResponseBody
    public TokenInfo selectTokenInfoByName(TokenInfo tokenInfo){
        if(tokenInfo.getName()==null){
            return new TokenInfo();
        }
        return tokenInfoMapperService.selectTokenInfoByName(tokenInfo.getName());
    }

    @PostMapping("/selectTokenInfoByCondition")
    @ResponseBody
    public List<TokenInfo> selectTokenInfoByCondition(TokenInfo tokenInfo){
        return tokenInfoMapperService.selectTokenInfoByCondition(tokenInfo);
    }

    @PostMapping("/selectVideoInfoByCondition")
    @ResponseBody
    public List<VideoInfo> selectVideoInfoByCondition(VideoInfo videoInfo){
        System.out.println(videoInfoService.selectVideoInfoByCondition(videoInfo));
        return videoInfoService.selectVideoInfoByCondition(videoInfo);
    }
}
