package com.qmy.qmybdata.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import java.io.Serializable;
import java.util.Date;
import lombok.Data;

/**
 * 用户表
 * @TableName sys_user
 */
@TableName(value ="sys_user")
@Data
public class SysUser implements Serializable {
    /**
     * 编号
     */
    @TableId(value = "id")
    private String id;

    /**
     * 归属公司
     */
    @TableField(value = "company_id")
    private String company_id;

    /**
     * 归属部门
     */
    @TableField(value = "office_id")
    private String office_id;

    /**
     * 登录名
     */
    @TableField(value = "login_name")
    private String login_name;

    /**
     * 密码
     */
    @TableField(value = "password")
    private String password;

    /**
     * 工号
     */
    @TableField(value = "no")
    private String no;

    /**
     * 姓名
     */
    @TableField(value = "name")
    private String name;

    /**
     * 邮箱
     */
    @TableField(value = "email")
    private String email;

    /**
     * 电话
     */
    @TableField(value = "phone")
    private String phone;

    /**
     * 手机
     */
    @TableField(value = "mobile")
    private String mobile;

    /**
     * 用户头像
     */
    @TableField(value = "photo")
    private String photo;

    /**
     * 最后登陆IP
     */
    @TableField(value = "login_ip")
    private String login_ip;

    /**
     * 最后登陆时间
     */
    @TableField(value = "login_date")
    private Date login_date;

    /**
     * 是否可登录
     */
    @TableField(value = "login_flag")
    private String login_flag;

    /**
     * 创建者
     */
    @TableField(value = "create_by")
    private String create_by;

    /**
     * 创建时间
     */
    @TableField(value = "create_date")
    private Date create_date;

    /**
     * 更新者
     */
    @TableField(value = "update_by")
    private String update_by;

    /**
     * 更新时间
     */
    @TableField(value = "update_date")
    private Date update_date;

    /**
     * 备注信息
     */
    @TableField(value = "remarks")
    private String remarks;

    /**
     * 删除标记
     */
    @TableField(value = "del_flag")
    private String del_flag;

    /**
     * 二维码
     */
    @TableField(value = "qrcode")
    private String qrcode;

    /**
     * 个性签名
     */
    @TableField(value = "sign")
    private String sign;

    @TableField(exist = false)
    private static final long serialVersionUID = 1L;

    @Override
    public boolean equals(Object that) {
        if (this == that) {
            return true;
        }
        if (that == null) {
            return false;
        }
        if (getClass() != that.getClass()) {
            return false;
        }
        SysUser other = (SysUser) that;
        return (this.getId() == null ? other.getId() == null : this.getId().equals(other.getId()))
            && (this.getCompany_id() == null ? other.getCompany_id() == null : this.getCompany_id().equals(other.getCompany_id()))
            && (this.getOffice_id() == null ? other.getOffice_id() == null : this.getOffice_id().equals(other.getOffice_id()))
            && (this.getLogin_name() == null ? other.getLogin_name() == null : this.getLogin_name().equals(other.getLogin_name()))
            && (this.getPassword() == null ? other.getPassword() == null : this.getPassword().equals(other.getPassword()))
            && (this.getNo() == null ? other.getNo() == null : this.getNo().equals(other.getNo()))
            && (this.getName() == null ? other.getName() == null : this.getName().equals(other.getName()))
            && (this.getEmail() == null ? other.getEmail() == null : this.getEmail().equals(other.getEmail()))
            && (this.getPhone() == null ? other.getPhone() == null : this.getPhone().equals(other.getPhone()))
            && (this.getMobile() == null ? other.getMobile() == null : this.getMobile().equals(other.getMobile()))
            && (this.getPhoto() == null ? other.getPhoto() == null : this.getPhoto().equals(other.getPhoto()))
            && (this.getLogin_ip() == null ? other.getLogin_ip() == null : this.getLogin_ip().equals(other.getLogin_ip()))
            && (this.getLogin_date() == null ? other.getLogin_date() == null : this.getLogin_date().equals(other.getLogin_date()))
            && (this.getLogin_flag() == null ? other.getLogin_flag() == null : this.getLogin_flag().equals(other.getLogin_flag()))
            && (this.getCreate_by() == null ? other.getCreate_by() == null : this.getCreate_by().equals(other.getCreate_by()))
            && (this.getCreate_date() == null ? other.getCreate_date() == null : this.getCreate_date().equals(other.getCreate_date()))
            && (this.getUpdate_by() == null ? other.getUpdate_by() == null : this.getUpdate_by().equals(other.getUpdate_by()))
            && (this.getUpdate_date() == null ? other.getUpdate_date() == null : this.getUpdate_date().equals(other.getUpdate_date()))
            && (this.getRemarks() == null ? other.getRemarks() == null : this.getRemarks().equals(other.getRemarks()))
            && (this.getDel_flag() == null ? other.getDel_flag() == null : this.getDel_flag().equals(other.getDel_flag()))
            && (this.getQrcode() == null ? other.getQrcode() == null : this.getQrcode().equals(other.getQrcode()))
            && (this.getSign() == null ? other.getSign() == null : this.getSign().equals(other.getSign()));
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((getId() == null) ? 0 : getId().hashCode());
        result = prime * result + ((getCompany_id() == null) ? 0 : getCompany_id().hashCode());
        result = prime * result + ((getOffice_id() == null) ? 0 : getOffice_id().hashCode());
        result = prime * result + ((getLogin_name() == null) ? 0 : getLogin_name().hashCode());
        result = prime * result + ((getPassword() == null) ? 0 : getPassword().hashCode());
        result = prime * result + ((getNo() == null) ? 0 : getNo().hashCode());
        result = prime * result + ((getName() == null) ? 0 : getName().hashCode());
        result = prime * result + ((getEmail() == null) ? 0 : getEmail().hashCode());
        result = prime * result + ((getPhone() == null) ? 0 : getPhone().hashCode());
        result = prime * result + ((getMobile() == null) ? 0 : getMobile().hashCode());
        result = prime * result + ((getPhoto() == null) ? 0 : getPhoto().hashCode());
        result = prime * result + ((getLogin_ip() == null) ? 0 : getLogin_ip().hashCode());
        result = prime * result + ((getLogin_date() == null) ? 0 : getLogin_date().hashCode());
        result = prime * result + ((getLogin_flag() == null) ? 0 : getLogin_flag().hashCode());
        result = prime * result + ((getCreate_by() == null) ? 0 : getCreate_by().hashCode());
        result = prime * result + ((getCreate_date() == null) ? 0 : getCreate_date().hashCode());
        result = prime * result + ((getUpdate_by() == null) ? 0 : getUpdate_by().hashCode());
        result = prime * result + ((getUpdate_date() == null) ? 0 : getUpdate_date().hashCode());
        result = prime * result + ((getRemarks() == null) ? 0 : getRemarks().hashCode());
        result = prime * result + ((getDel_flag() == null) ? 0 : getDel_flag().hashCode());
        result = prime * result + ((getQrcode() == null) ? 0 : getQrcode().hashCode());
        result = prime * result + ((getSign() == null) ? 0 : getSign().hashCode());
        return result;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", id=").append(id);
        sb.append(", company_id=").append(company_id);
        sb.append(", office_id=").append(office_id);
        sb.append(", login_name=").append(login_name);
        sb.append(", password=").append(password);
        sb.append(", no=").append(no);
        sb.append(", name=").append(name);
        sb.append(", email=").append(email);
        sb.append(", phone=").append(phone);
        sb.append(", mobile=").append(mobile);
        sb.append(", photo=").append(photo);
        sb.append(", login_ip=").append(login_ip);
        sb.append(", login_date=").append(login_date);
        sb.append(", login_flag=").append(login_flag);
        sb.append(", create_by=").append(create_by);
        sb.append(", create_date=").append(create_date);
        sb.append(", update_by=").append(update_by);
        sb.append(", update_date=").append(update_date);
        sb.append(", remarks=").append(remarks);
        sb.append(", del_flag=").append(del_flag);
        sb.append(", qrcode=").append(qrcode);
        sb.append(", sign=").append(sign);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}