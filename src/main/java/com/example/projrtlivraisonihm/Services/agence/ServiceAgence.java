package com.example.projrtlivraisonihm.Services.agence;

import com.example.projrtlivraisonihm.Entities.agence;
import com.example.projrtlivraisonihm.Entities.client;
import com.example.projrtlivraisonihm.Entities.commande;
import com.example.projrtlivraisonihm.Repesitory.AdminRepository;
import com.example.projrtlivraisonihm.Repesitory.AgenceRepository;
import com.example.projrtlivraisonihm.Repesitory.ClientRespository;
import com.example.projrtlivraisonihm.Repesitory.CommandeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class ServiceAgence {

    private final AgenceRepository agenceRepository;
    private final ClientRespository clientRepository;
    private final AdminRepository adminRepository;
    private final CommandeRepository commandeRepository;

    @Autowired
    public ServiceAgence(AgenceRepository agenceRepository, ClientRespository clientRepository, AdminRepository adminRepository, CommandeRepository commandeRepository) {
        this.agenceRepository = agenceRepository;

        this.clientRepository = clientRepository;
        this.adminRepository = adminRepository;
        this.commandeRepository = commandeRepository;
    }

    public List<agence> findAllAgences() {
        return agenceRepository.findAll();
    }

    public Optional<agence> findAgenceById(Long id) {
        return agenceRepository.findById(id);
    }

    public agence saveAgence(agence Agence) {
        return agenceRepository.save(Agence);
    }

    public void deleteAgence(Long id) {
        agenceRepository.deleteById(id);
    }

    public agence updateAgence(Long id, agence newAgence) {
        return agenceRepository.findById(id)
                .map(agence -> {
                    agence.setNom(newAgence.getNom());
                    agence.setAdresse(newAgence.getAdresse());
                    agence.setTelephone(newAgence.getTelephone());
                    agence.setEmail(newAgence.getEmail());
                    agence.setPassword(newAgence.getPassword());
                    return agenceRepository.save(agence);
                })
                .orElseGet(() -> {
                    newAgence.setIdAgence(id);
                    return agenceRepository.save(newAgence);
                });
    }
    public agence registerAgence(agence newAgence) {
        Optional<agence> existingAgence = agenceRepository.findByEmail(newAgence.getEmail());
        if (existingAgence.isPresent()) {
            throw new IllegalStateException("Email déjà utilisé");
        }
        // Vous pouvez ajouter ici une logique pour hasher le mot de passe avant de l'enregistrer
        return agenceRepository.save(newAgence);
    }

    public Optional<agence> loginAgence(String email, String password) {
        Optional<agence> foundAgence = agenceRepository.findByEmail(email);
        if (foundAgence.isPresent() && checkPassword(password, foundAgence.get().getPassword())) {
            return foundAgence;
        }
        return Optional.empty();
    }

    private boolean checkPassword(String rawPassword, String hashedPassword) {
        // Implémentez votre logique de vérification de mot de passe ici (utiliser bcrypt, par exemple)
        return true;  // Simuler la vérification pour l'exemple
    }


    public long countAgence(){
        return agenceRepository.count();
    }

    public boolean authenticate(String enteredEmail, String enteredPassword) {
        Optional<agence> agence = agenceRepository.findByEmail(enteredEmail);
        return agence.isPresent() && agence.get().getPassword().equals(enteredPassword);
    }

    public List<client> findClientsByAgenceId(Long idAgence) {
        return clientRepository.findByAgenceIdAgence(idAgence);
    }
    /*
    public List<commande> findCommandeByAgenceId(Long idAgence) {
        return commandeRepository.findByAgenceId(idAgence);
    }
     */
}
