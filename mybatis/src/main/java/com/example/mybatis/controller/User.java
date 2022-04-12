package com.example.mybatis.controller;


import com.example.mybatis.service.UserServiceimp;
import com.example.mybatis.user.Userbean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.Map;

@CrossOrigin
@RestController
public class User {
    @RequestMapping("/login")
    public String user(String username, String password) {
        if ((username.equals("admin")) && (password.equals("123"))) {
            return "login.html";
        } else {
            return "index.html";
        }
    }

    @Resource
    private UserServiceimp userServiceimp;

    @RequestMapping("/axo")
    public Map axo(@RequestBody User user) {

        Map<Object, Object> map = new HashMap();
        map.put("aaa", "abs");
//        return userServiceimp.user();
        return map;
    }

    /**
     *
     *
     * vue 发来请求index请求
     * @RequestBody 接受vue发来的数据 （form）
     * 接收跨域发来的数据 还要有个注解@CrossOrigin
     * @param userbean
     * @return
     */

    @RequestMapping("/index")
    public Map aaa(@RequestBody Userbean userbean){

//        Map<Object, Object> map =new HashMap();
//
//        map.put("aaa",userbean);
        return userServiceimp.user(userbean);
//        return map;
    }


//    @RequestMapping("/in")
//    public Map  aaa(String username,String password) {
//
////        return userServiceimp.user(userbean);
//
//        Map map=new HashMap();
//        map.put("user",username);
//
//        return map;
//
//    }
}