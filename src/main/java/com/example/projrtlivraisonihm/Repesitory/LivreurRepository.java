package com.example.projrtlivraisonihm.Repesitory;

import com.example.projrtlivraisonihm.Entities.livreur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface LivreurRepository extends JpaRepository<livreur, Long> {
    List<livreur> findByNom(String nom);
    List<livreur> findByVille(String ville);
    List<livreur> findByCin(String cin);
    List<livreur> findByAdresse(String adresse);
    livreur findByEmail(String email);
    List<livreur> findByDateNaissance(Date dateNaissance);
}
