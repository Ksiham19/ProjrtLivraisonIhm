package com.example.projrtlivraisonihm.controller;

import com.example.projrtlivraisonihm.Entities.agence;
import com.example.projrtlivraisonihm.Services.agence.ServiceAgence;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/agences")
public class AgenceController {

    private final ServiceAgence serviceAgence;

    @Autowired
    public AgenceController(ServiceAgence serviceAgence) {
        this.serviceAgence = serviceAgence;
    }

    @GetMapping
    public ResponseEntity<List<agence>> getAllAgences() {
        return ResponseEntity.ok(serviceAgence.findAllAgences());
    }

    @GetMapping("/{idCommande}")
    public ResponseEntity<agence> getAgenceById(@PathVariable Long idCommande) {
        return serviceAgence.findAgenceById(idCommande)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<agence> createAgence(@RequestBody agence Agence) {
        return new ResponseEntity<>(serviceAgence.saveAgence(Agence), HttpStatus.CREATED);
    }

    @PutMapping("/{idCommande}")
    public ResponseEntity<agence> updateAgence(@PathVariable Long idCommande, @RequestBody agence newAgence) {
        return ResponseEntity.ok(serviceAgence.updateAgence(idCommande, newAgence));
    }

    @DeleteMapping("/{idCommande}")
    public ResponseEntity<Void> deleteAgence(@PathVariable Long idCommande) {
        serviceAgence.deleteAgence(idCommande);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/register")
    public ResponseEntity<agence> registerAgence(@RequestBody agence newAgence) {
        try {
            return new ResponseEntity<>(serviceAgence.registerAgence(newAgence), HttpStatus.CREATED);
        } catch (IllegalStateException e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<agence> loginAgence(@RequestParam String email, @RequestParam String password) {
        return serviceAgence.loginAgence(email, password)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(HttpStatus.UNAUTHORIZED).build());
    }

    @GetMapping("/count")
    public ResponseEntity<Long> countAgences() {
        return ResponseEntity.ok(serviceAgence.countAgence());
    }
}
