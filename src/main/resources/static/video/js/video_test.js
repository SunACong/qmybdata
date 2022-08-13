$(function (){
    var tokenInfo = new Object();
    tokenInfo.accessToken = "at.5x9ko2j6b5fk9x2j9ybnfqhg56zve1v4-2ru03e73ir-0ldts4y-aqmd4j4xd";

    var player01 = new EZUIKit.EZUIKitPlayer({
        id: 'ysopen', // 视频容器ID
        accessToken: tokenInfo.accessToken,
        url: 'ezopen://open.ys7.com/D23359911/9.hd.live',
        template: 'simple',
        autoplay: false,
        audio: 0
    });
    /**
     * 开始播放视频
     */
    $("#play").click(function(){
        player01.play(
            'ezopen://open.ys7.com/D23359911/9.hd.live'
        );
    })
    /**
     * 关闭视频
     */
    $("#close").click(function(){
        player01.stop()
            .then(()=>{
                console.log("执行播放成功后其他动作");
            });
    });

    /**
     * 切换视频
     */
    $("#bb").click(function (){
        player01.stop()
            .then(()=>{
                player01.play(
                    'ezopen://open.ys7.com/D23359911/16.hd.live'
                );
            });
    });
})