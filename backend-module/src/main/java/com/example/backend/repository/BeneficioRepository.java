package com.example.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Lock;

import com.example.backend.entity.BeneficioEntity;

import jakarta.persistence.LockModeType;

public interface BeneficioRepository
        extends JpaRepository<BeneficioEntity, Long> {
                
    @Lock(LockModeType.OPTIMISTIC)
    Optional<BeneficioEntity> findWithLockById(Long id);
}
