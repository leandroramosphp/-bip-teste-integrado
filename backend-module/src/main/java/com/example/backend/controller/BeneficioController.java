package com.example.backend.controller;


import com.example.backend.dto.TransferenciaDTO;
import com.example.backend.entity.BeneficioEntity;
import com.example.backend.service.BeneficioService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import java.util.*;

@RestController
@RequestMapping("/api/v1/beneficios")
public class BeneficioController {

    private final BeneficioService service;

    public BeneficioController(BeneficioService service) {
        this.service = service;
    }

    @GetMapping
    public List<String> list() {
        return Arrays.asList("Beneficio A", "Beneficio B");
    }

    
    @GetMapping("/ativos")
    public List<BeneficioEntity> listar() {
        return service.listarTodos();
    }

    @PostMapping("/transferir")
    public ResponseEntity<Void> transferir(@RequestBody TransferenciaDTO dto) {
        service.transferir(dto);
        return ResponseEntity.ok().build();
    }
}
