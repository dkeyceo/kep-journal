package com.dkey.kep.model;

import com.dkey.kep.dto.ACCKDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ACCK {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    @OneToMany(mappedBy = "acck", fetch = FetchType.EAGER)
    private List<KepRecipient> recipients = new ArrayList<>();

    public ACCK(ACCKDto acckDto){
        this.name = acckDto.getName();
    }
}
