package com.avaliacao.avaliacao.business.cliente;

import com.avaliacao.avaliacao.model.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long> {

    Optional<Cliente> findFirstByNomeContaining(@Param("nome") String nome);


    List<Cliente> findAllByNomeContains(@Param("cpf") String cpf);

}
