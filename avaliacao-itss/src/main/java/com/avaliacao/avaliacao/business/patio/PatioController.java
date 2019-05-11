package com.avaliacao.avaliacao.business.patio;

import com.avaliacao.avaliacao.business.patio.PatioRepository;
import com.avaliacao.avaliacao.model.Patio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
public class PatioController {


    @Autowired
    private PatioRepository patioRepository;

    @PostMapping("/patio")
    public Patio create(@Valid @RequestBody Patio patio){
        return patioRepository.save(patio);
    }

    @GetMapping("/patio")
    public List<Patio> listar(){
        return patioRepository.findAll();
    }

    @GetMapping("/patio/{id}")
    public Patio buscarPorId(@PathVariable Long id){
        return patioRepository.findById(id).orElse(null);
    }


    @DeleteMapping("/patio/{id}")
    public void deletar(@PathVariable Long id){
        patioRepository.deleteById(id);
    }

}
