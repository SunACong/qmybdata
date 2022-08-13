package com.qmy.qmybdata.service.video;

import com.qmy.qmybdata.entity.VideoInfo;
import com.qmy.qmybdata.mapper.VideoInfoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VideoInfoService {

    @Autowired
    VideoInfoMapper videoInfoMapper;

    public List<VideoInfo> selectVideoInfoByCondition(VideoInfo videoInfo){
        return videoInfoMapper.selectByCondition(videoInfo);
    }
}
