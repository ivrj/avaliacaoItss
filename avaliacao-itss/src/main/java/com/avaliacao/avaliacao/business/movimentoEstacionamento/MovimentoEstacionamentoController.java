package com.avaliacao.avaliacao.business.movimentoEstacionamento;

import com.avaliacao.avaliacao.model.MovimentoEstacionamento;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
public class MovimentoEstacionamentoController {

    @Autowired
    private MovimentoEstacionamentoRepository movimentoEstacionamentoRepository;

    @PostMapping("/movimentoestacionamento")
    public MovimentoEstacionamento create(@Valid @RequestBody MovimentoEstacionamento movimentoEstacionamento){
        return movimentoEstacionamentoRepository.save(movimentoEstacionamento);
    }

    @GetMapping("/movimentoestacionamento")
    public List<MovimentoEstacionamento> listar(){
        return movimentoEstacionamentoRepository.findAll();
    }

    @GetMapping("/movimentoestacionamento/{id}")
    public MovimentoEstacionamento buscarPorId(@PathVariable Long id){
        return movimentoEstacionamentoRepository.findById(id).orElse(null);
    }


    @DeleteMapping("/movimentoestacionamento/{id}")
    public void deletar(@PathVariable Long id){
        movimentoEstacionamentoRepository.deleteById(id);
    }

    @PutMapping("/movimentoestacionamento/{id}/entrada")
    public ResponseEntity<MovimentoEstacionamento> salvaEntrada(@PathVariable Long id, @Valid @RequestBody MovimentoEstacionamento movimentoEstacionamento){

        MovimentoEstacionamento movimentoEstacionamentoSalvo = movimentoEstacionamentoRepository.findById(id).orElse(null);
        BeanUtils.copyProperties(movimentoEstacionamento, movimentoEstacionamentoSalvo, "id");
        movimentoEstacionamentoRepository.save(movimentoEstacionamentoSalvo);
        return ResponseEntity.ok(movimentoEstacionamentoSalvo);

    }

    @PutMapping("/movimentoestacionamento/{id}/saida")
    public ResponseEntity<MovimentoEstacionamento> salvaSaida (@PathVariable Long id, @Valid @RequestBody MovimentoEstacionamento movimentoEstacionamento){

        MovimentoEstacionamento movimentoEstacionamentoSalvo = movimentoEstacionamentoRepository.findById(id).orElse(null);
        if(movimentoEstacionamentoSalvo == null){
            throw new EmptyResultDataAccessException(1);
        }
        BeanUtils.copyProperties(movimentoEstacionamento, movimentoEstacionamentoSalvo, "id");
        movimentoEstacionamentoRepository.save(movimentoEstacionamentoSalvo);
        return ResponseEntity.ok(movimentoEstacionamentoSalvo);

    }

}
