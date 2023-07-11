package com.dkey.kep.repository;

import com.dkey.kep.model.UserEDP;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserEDPRepository extends JpaRepository<UserEDP, Integer> {
}
