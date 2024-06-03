package com.example.projrtlivraisonihm.URLcontroller;

import com.example.projrtlivraisonihm.Entities.admin;
import com.example.projrtlivraisonihm.Entities.commande;
import com.example.projrtlivraisonihm.Entities.etat;
import com.example.projrtlivraisonihm.Repesitory.CommandeRepository;
import com.example.projrtlivraisonihm.Services.commande.ServiceCommande;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import com.example.projrtlivraisonihm.Repesitory.LivreurRepository;
import com.example.projrtlivraisonihm.Entities.livreur;
import com.example.projrtlivraisonihm.Services.livreur.ServiceLivreur;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@Controller
@RequestMapping("/loginLivreur")
public class LoginControllerLivreur {
    private final ServiceLivreur servicelivreur;
    private final ServiceCommande servicecommande;
    private final CommandeRepository commandeRepository;

    private final LivreurRepository livreurRepository;

    public LoginControllerLivreur(ServiceLivreur servicelivreur, LivreurRepository livreurRepository, ServiceCommande servicecommande,CommandeRepository commandeRepository) {
        this.servicelivreur = servicelivreur;
        this.livreurRepository = livreurRepository;
        this.servicecommande=servicecommande;
        this.commandeRepository =commandeRepository;
    }

    @GetMapping
    public String showLoginForm(Model model) {
        model.addAttribute("livreur", new livreur());
        return "login.html";
    }

    @GetMapping("/livreurProfil")
    public String showProfilLivreur(Model model) {
        List<livreur> livreur = servicelivreur.findAllLivreurs();
        model.addAttribute("livreur", livreur);
        return "profilLivreur";
    }

    @PostMapping("/valid")
    public String processLoginForm(@ModelAttribute("livreur") livreur livreur, Model model) {
        String enteredEmail = livreur.getEmail();
        String enteredPassword = livreur.getPwd();
        boolean isAuthenticated = servicelivreur.authenticate(enteredEmail, enteredPassword);
        if (isAuthenticated) {
            return "acceuilLivreur.html";
        } else {
            model.addAttribute("error", "Invalid credentials. Please try again.");
            return "login.html";
        }
    }

    @GetMapping("/home")
    public String revenir(Model model) {
        return "redirect:/loginLivreur";
    }


    @GetMapping("/commandes")
    public String showCommandesList(Model model) {
        List<commande> commandes = commandeRepository.findAll();
        model.addAttribute("listeCommandes", commandes);
        return "EtatCde";
    }
    @GetMapping("/demandes")
    public String showDemandesList(Model model) {
        List<commande> commandes = commandeRepository.findAll();
        model.addAttribute("commandes", commandes);
        return "InfoCde.html";
    }

    @PostMapping("/changeStatus/{id}")
    public ResponseEntity<Void> changeStatus(@PathVariable Long id) {
        Optional<commande> optionalCommande = commandeRepository.findById(id);
        if (optionalCommande.isPresent()) {
            commande commande = optionalCommande.get();
            if (commande.getEtat() == "en_attente") {
                commande.setEtat("en_cours");
            } else if (commande.getEtat() == "en_cours") {
                commande.setEtat("terminee");
                commandeRepository.delete(commande);
            }
            commandeRepository.save(commande);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/commandes/{id}")
    public String showCommande(@PathVariable Long id, Model model) {
        Optional<commande> optionalCommande = commandeRepository.findById(id);
        if (optionalCommande.isPresent()) {
            commande commande = optionalCommande.get();
            model.addAttribute("commande", commande);
            return "commande";
        } else {
            return "redirect:/loginLivreur/commandes";
        }
    }


    @GetMapping("/commandes/{id}/annuler")
    public String annulerCommande(@PathVariable Long id) {
        Optional<commande> optionalCommande = commandeRepository.findById(id);
        if (optionalCommande.isPresent()) {
            commande commande = optionalCommande.get();
            commande.setEtat("annulee");
            commandeRepository.save(commande);
        }
        return "redirect:/loginLivreur/commandes";
    }

    @GetMapping("/commandes/{id}/terminer")
    public String terminerCommande(@PathVariable Long id) {
        Optional<commande> optionalCommande = commandeRepository.findById(id);
        if (optionalCommande.isPresent()) {
            commande commande = optionalCommande.get();
            commande.setEtat("terminee");
            commandeRepository.save(commande);
        }
        return "redirect:/loginLivreur/commandes";
    }

    @GetMapping("/commandes/{id}/enCours")
    public String enCoursCommande(@PathVariable Long id) {
        Optional<commande> optionalCommande = commandeRepository.findById(id);
        if (optionalCommande.isPresent()) {
            commande commande = optionalCommande.get();
            commande.setEtat("en_cours");
            commandeRepository.save(commande);
        }
        return "redirect:/loginLivreur/commandes";
    }

    @GetMapping("/commandes/{id}/enAttente")
    public String enAttenteCommande(@PathVariable Long id) {
        Optional<commande> optionalCommande = commandeRepository.findById(id);
        if (optionalCommande.isPresent()) {
            commande commande = optionalCommande.get();
            commande.setEtat("en_attente");
            commandeRepository.save(commande);
        }
        return "redirect:/loginLivreur/commandes";
    }



}