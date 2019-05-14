package com.avaliacao.avaliacao.business.patio;

import com.avaliacao.avaliacao.business.patio.PatioRepository;
import com.avaliacao.avaliacao.model.Patio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.Option;
import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

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

//    @GetMapping("/patio/{id}")
//    public Patio validarPatio(@PathVariable Patio patio){
//        Patio _patio = null;
//        if(patio != null && patio.getId() != null ){
//            _patio = patioRepository.getOne(patio.getId());
//        }
//
//        return patio;
//    }

    @GetMapping("/patio/{id}")
    public Patio buscarPorId(@PathVariable Long id){
        Optional<Patio> patioSalvo = patioRepository.findById(id);
        if(!patioSalvo.isPresent() ){
            throw new IllegalArgumentException();
        }
        return patioSalvo.get();
    }

    @DeleteMapping("/patio/{id}")
    public void deletar(@PathVariable Long id){
        patioRepository.deleteById(id);
    }

}
