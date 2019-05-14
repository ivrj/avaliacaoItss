package com.avaliacao.avaliacao.business.veiculo;

import com.avaliacao.avaliacao.model.Veiculo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;

@RestController
public class VeiculoController {

    @Autowired
    private VeiculoRepository veiculoRepository;

    @PostMapping("/veiculo")
    public Veiculo create(@Valid @RequestBody Veiculo veiculo){
        return veiculoRepository.save(veiculo);
    }

    @GetMapping("/veiculo")
    public List<Veiculo> listar(){
        return veiculoRepository.findAll();
    }

    @GetMapping("/veiculo/{id}")
    public Veiculo buscarPorId(@PathVariable Long id){
        return veiculoRepository.findById(id).orElse(null);
    }



    @DeleteMapping("/veiculo/{id}")
    public void deletar(@PathVariable Long id){
        veiculoRepository.deleteById(id);
    }

}
