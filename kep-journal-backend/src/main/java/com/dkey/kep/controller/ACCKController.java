package com.dkey.kep.controller;

import com.dkey.kep.dto.ACCKDto;
import com.dkey.kep.dto.Message;
import com.dkey.kep.model.ACCK;
import com.dkey.kep.repository.ACCKRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/accks")
@CrossOrigin(origins = "http://localhost:4200")
public class ACCKController {
    @Autowired
    private ACCKRepository acckRepository;

    @PostMapping
    public ResponseEntity<?> create(@RequestBody ACCKDto acckDto){
        ACCK acck = new ACCK(acckDto);
        return new ResponseEntity(acckRepository.save(acck), HttpStatus.CREATED);
    }
    @GetMapping()
    public ResponseEntity<?> list(){
        List<ACCK> accks = acckRepository.findAll();
        return new ResponseEntity(accks, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getOne(@PathVariable("id") Integer id){
        ACCK acck = acckRepository.findById(id).get();
        return new ResponseEntity(acck, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable("id") Integer id, @RequestBody ACCKDto acckDto){
        ACCK acck = acckRepository.findById(id).get();
        if(acck != null){
            acck.setName(acckDto.getName());
            ACCK udpatedAcck = acckRepository.save(acck);
            return new ResponseEntity(udpatedAcck, HttpStatus.OK);
        }
        return new ResponseEntity("Something wrong with request", HttpStatus.BAD_REQUEST);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Integer id){
        if(!acckRepository.findById(id).isEmpty()){
            acckRepository.deleteById(id);
            return new ResponseEntity(new Message("Deleted successfully"), HttpStatus.OK);
        }
        return new ResponseEntity(new Message("Something wrong with request"), HttpStatus.BAD_REQUEST);
    }
}
