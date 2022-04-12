package com.example.mybatis.mapper;


import com.example.mybatis.user.User;
import com.example.mybatis.user.Userbean;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface UserMapper {

     /**
      * mybatis面向接口编程的两个一致
      *1.映射文件 namespace要和mapper接口的全类名保持一致
      * 2.映射文件中SQL语句的id要和mapper接口中的方法名一致
      */

     /**
      * 根据用户名和密码查询 所有数据
      *
      */
     Userbean insert(String username, String password);


}
