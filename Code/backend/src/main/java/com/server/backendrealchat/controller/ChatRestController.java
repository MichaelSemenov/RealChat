package com.server.backendrealchat.controller;


import com.server.backendrealchat.Memory.Repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ChatRestController {

    @Autowired
    private Repo passwordInformation;

    @GetMapping("/end-point")
    public HashMap<String, String> allPasswordInformationUsers(){
        return (HashMap<String, String>) passwordInformation.getPasswordRepo();
    }

    @GetMapping("/save-information/{username}/{password}")
    public String savePasswordInformation(@PathVariable String username, @PathVariable String password){
        passwordInformation.saveUniquePassword(username, password);
        return "Сохранение данных произошла успешно!";
    }
}
