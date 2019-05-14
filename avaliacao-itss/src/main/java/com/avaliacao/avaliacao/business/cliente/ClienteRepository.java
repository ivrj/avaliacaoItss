package com.avaliacao.avaliacao.business.cliente;

import com.avaliacao.avaliacao.model.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long> {

    Optional<Cliente> findClienteByNome(@Param("nome") String nome);


    Optional<Cliente> findClienteByCpf(@Param("cpf") String cpf);

}
