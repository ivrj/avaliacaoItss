package com.avaliacao.avaliacao.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.List;

@Entity
@NoArgsConstructor
@Getter
@Setter
@Table(name = "patio")
public class Patio implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @OneToMany(mappedBy = "patio" ,
            orphanRemoval = true,
            cascade = CascadeType.ALL,
            fetch = FetchType.LAZY)
    private List<MovimentoEstacionamento> listaMovimentosEstacionamento;


    @Column(length = 30)
    private String descricao;

    @Column()
    private Integer qtd_vagas;

    @Column(precision = 10, scale = 2)
    private BigDecimal taxa;
}
