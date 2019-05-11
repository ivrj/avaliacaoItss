package com.avaliacao.avaliacao.business.movimentoEstacionamento;

import com.avaliacao.avaliacao.model.MovimentoEstacionamento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MovimentoEstacionamentoRepository  extends JpaRepository<MovimentoEstacionamento, Long> {
}
