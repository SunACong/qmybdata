package com.qmy.qmybdata.mapper;

import com.qmy.qmybdata.entity.SysUser;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
* @author lenovo
* @description 针对表【sys_user(用户表)】的数据库操作Mapper
* @createDate 2021-12-26 13:36:13
* @Entity com.qmy.qmybdata.entity.SysUser
*/
@Mapper
public interface SysUserMapper {

    int deleteByPrimaryKey(Long id);

    int insert(SysUser record);

    int insertSelective(SysUser record);

    SysUser selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(SysUser record);

    int updateByPrimaryKey(SysUser record);

    List<SysUser> selectByCondition(SysUser sysUser);
}
