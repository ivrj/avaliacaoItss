package com.avaliacao.avaliacao.business.patio;

import com.avaliacao.avaliacao.model.Patio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PatioRepository extends JpaRepository<Patio, Long> {
}
