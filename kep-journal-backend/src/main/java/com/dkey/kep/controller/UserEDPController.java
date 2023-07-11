package com.dkey.kep.controller;

import com.dkey.kep.dto.Message;
import com.dkey.kep.dto.UserEDPDto;
import com.dkey.kep.model.ACCK;
import com.dkey.kep.model.UserEDP;
import com.dkey.kep.repository.ACCKRepository;
import com.dkey.kep.repository.UserEDPRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:4200")
public class UserEDPController {
    @Autowired
    private UserEDPRepository userEDPRepository;
    @Autowired
    private ACCKRepository acckRepository;

    @GetMapping
    public ResponseEntity list(){
        List<UserEDP> users = userEDPRepository.findAll();
        return new ResponseEntity(users, HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity findById(@PathVariable("id") Integer id){
        Optional<UserEDP> user = userEDPRepository.findById(id);
        if(user.isPresent()){
            return new ResponseEntity(user, HttpStatus.OK);
        }
        return new ResponseEntity(new Message("Картки користувача з Id " + id +" не знайдено"), HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity create(@RequestBody UserEDPDto dto){
        Optional<ACCK> acck = acckRepository.findById(dto.getAcckId());
        if(!acck.isPresent()){
            return new ResponseEntity(new Message("КНЕДП не існує!"), HttpStatus.BAD_REQUEST);
        }

        UserEDP userEDP = new UserEDP();
        userEDP.setAcck(acck.get());
        userEDP.setUserPIB(dto.getUserPIB());
        userEDP.setUserResponsiblePIB(dto.getUserResponsiblePIB());
        userEDP.setDateFrom(dto.getDateFrom());
        userEDP.setDateTo(dto.getDateTo());
        userEDP.setIdentityZNOK(dto.getIdentityZNOK());
        UserEDP userEDPCreated = userEDPRepository.save(userEDP);
        return new ResponseEntity(userEDPCreated, HttpStatus.OK);
    }

}
