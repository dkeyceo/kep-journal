package com.dkey.kep.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserEDPDto {
    private Integer acckId;
    private String userPIB;
    private String userResponsiblePIB;
    private LocalDate dateFrom;
    private LocalDate dateTo;
    private String identityZNOK;
}
