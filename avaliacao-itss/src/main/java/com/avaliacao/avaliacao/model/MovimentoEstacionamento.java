package com.avaliacao.avaliacao.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import java.util.Date;

@Entity
@NoArgsConstructor
@Getter
@Setter
@Table(name = "movimento_estacionamento")
public class MovimentoEstacionamento {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY )
    @JoinColumn(name = "patio_id")
    private Patio patio;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "entrada")
    @CreatedDate
    private Date entrada;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "saida")
    @CreatedDate
    private Date saida;

    @Column(name = "id_veiculo")
    private Long id_veiculo;
}
