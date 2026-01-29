package com.example.backend.service;

import com.example.backend.dto.TransferenciaDTO;
import com.example.backend.entity.*;
import com.example.backend.repository.BeneficioRepository;


import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.List;

@Service
public class BeneficioService {

    private final BeneficioRepository repository;
  //  private final BeneficioEjbService ejb;

    public BeneficioService(BeneficioRepository repository) {
        this.repository = repository;
    //    this.ejb = ejb;
    }

    public List<BeneficioEntity> listar() {
        return repository.findAll();
    }

    public List<BeneficioEntity> listarTodos() {
        return repository.findAll();
    }

    @Transactional(rollbackFor = Exception.class)
    public void transferir(Long origemId, Long destinoId, BigDecimal valor) {

        if (valor == null || valor.compareTo(BigDecimal.ZERO) <= 0) {
            throw new IllegalArgumentException("Valor inválido");
        }

        BeneficioEntity origem = repository.findWithLockById(origemId)
            .orElseThrow(() -> new RuntimeException("Origem não encontrada"));

        BeneficioEntity destino = repository.findWithLockById(destinoId)
            .orElseThrow(() -> new RuntimeException("Destino não encontrado"));

        if (origem.getValor().compareTo(valor) < 0) {
            throw new RuntimeException("Saldo insuficiente");
        }

        origem.debitar(valor);
        destino.creditar(valor);
    }

    @Transactional(rollbackFor = Exception.class)
    public void transferir(TransferenciaDTO dto) {

        if (dto == null) {
            throw new IllegalArgumentException("DTO não pode ser nulo");
        }

        transferir(
            dto.getOrigemId(),
            dto.getDestinoId(),
            dto.getValor()
        );
    }
}
