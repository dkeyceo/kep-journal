package com.dkey.kep.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ACCKDto {
    private String name;

    public ACCKDto(String name) {
        this.name = name;
    }
}
