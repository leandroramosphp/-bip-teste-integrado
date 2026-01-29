package com.example.backend.entity;

import jakarta.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "BENEFICIO")
public class BeneficioEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;

    @Column(name = "NOME", nullable = false, length = 100)
    private String nome;

    @Column(name = "DESCRICAO", length = 255)
    private String descricao;

    @Column(name = "VALOR", nullable = false, precision = 15, scale = 2)
    private BigDecimal valor;

    @Column(name = "ATIVO")
    private Boolean ativo;

    @Version
    @Column(name = "VERSION")
    private Long version;


    // getters e setters

    public BigDecimal getValor() {
        return valor;
    }

    public void setValor(BigDecimal valor) {
        this.valor = valor;
    }    

    public void debitar(BigDecimal valor) {
        this.valor = this.valor.subtract(valor);
    }

    public void creditar(BigDecimal valor) {
        this.valor = this.valor.add(valor);
    }

}
