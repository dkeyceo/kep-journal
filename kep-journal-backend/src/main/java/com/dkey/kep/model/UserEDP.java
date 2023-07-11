package com.dkey.kep.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class UserEDP {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @ManyToOne(optional = false)
    private ACCK acck;

    private String userPIB;
    private String userResponsiblePIB;
    private LocalDate dateFrom;
    private LocalDate dateTo;
    private String identityZNOK;

}
