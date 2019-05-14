package com.avaliacao.avaliacao.business.cliente;

import com.avaliacao.avaliacao.model.Cliente;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
public class ClienteController {


    @Autowired
    private ClienteRepository clienteRepository;

    @PostMapping("/cliente")
    public Cliente create(@Valid @RequestBody Cliente cliente){
        return clienteRepository.save(cliente);
    }

    @GetMapping("/cliente")
    public List<Cliente> listar(){
        return clienteRepository.findAll();
    }

    @GetMapping("/cliente/{id}")
    public Cliente buscarPorId(@PathVariable Long id){
        return clienteRepository.findById(id).orElse(null);
    }


    @DeleteMapping("/cliente/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletar(@PathVariable Long id){
        clienteRepository.deleteById(id);
    }

    //public Cliente buscar(@PathVariable String coluna, @PathVariable String valor);
}
