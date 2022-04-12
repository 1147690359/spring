package com.example.mybatis.service;


import com.example.mybatis.mapper.UserMapper;
import com.example.mybatis.user.User;
import com.example.mybatis.user.Userbean;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class UserServiceimp  {

    @Resource
    private UserMapper userMapper;

    /**
     *  1.userb 获取 userMapper.insert（）方法中的返回的值或对象
     *  2.判断是否为空 如果为空 给map 赋值 map.put("index","null") 并返回给前端
     *  3.如果为不为空空 给map 赋值 map.put("index", "in"); 并返回给前端
     * @param userbean
     * @return
     */
        public Map user(Userbean userbean) {

        String username = userbean.getUsername();
        String password = userbean.getPassword();
           Userbean userb= userMapper.insert(username,password);

           Map map=new HashMap();
           if(userb==null){
               map.put("index","null");
           }else {
                map.put("index", "in");
            }
           return map;
    }

}
