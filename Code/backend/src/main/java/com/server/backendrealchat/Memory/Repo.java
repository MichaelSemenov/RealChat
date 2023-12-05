package com.server.backendrealchat.Memory;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.Map;

@Repository
@Getter
@NoArgsConstructor
public class Repo {
    private final Map<String, String> passwordRepo = new HashMap<>();

    public void saveUniquePassword(String username, String password){
        passwordRepo.put(username, password);
    }
}
