package com.dkey.kep.repository;

import com.dkey.kep.model.KepRecipient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface KepRecipientRepository extends JpaRepository<KepRecipient, Integer> {
}
