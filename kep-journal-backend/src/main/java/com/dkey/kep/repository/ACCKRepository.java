package com.dkey.kep.repository;

import com.dkey.kep.model.ACCK;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ACCKRepository extends JpaRepository<ACCK, Integer> {

}
