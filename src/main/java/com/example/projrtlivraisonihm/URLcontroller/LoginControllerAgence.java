package com.example.projrtlivraisonihm.URLcontroller;

import com.example.projrtlivraisonihm.Entities.*;
import com.example.projrtlivraisonihm.Repesitory.AgenceRepository;
import com.example.projrtlivraisonihm.Services.agence.ServiceAgence;
import com.example.projrtlivraisonihm.Services.client.ServiceClient;
import com.example.projrtlivraisonihm.Services.commande.ServiceCommande;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/loginAgence")
public class LoginControllerAgence {
    private final ServiceAgence serviceagence;
    private final ServiceClient serviceClient;

    private final AgenceRepository agenceRepository;
    private final ServiceCommande serviceCommande;

    public LoginControllerAgence(ServiceAgence serviceagence, ServiceClient serviceClient, AgenceRepository agenceRepository, ServiceCommande serviceCommande) {
        this.serviceagence = serviceagence;
        this.serviceClient = serviceClient;
        this.agenceRepository = agenceRepository;
        this.serviceCommande = serviceCommande;
    }

    @GetMapping
    public String showLoginForm(Model model) {
        model.addAttribute("agence", new agence());
        return "loginAgence";
    }
    @PostMapping("/valid")
    public String processLoginForm(@ModelAttribute("agence") agence agence, Model model) {
        String enteredEmail = agence.getEmail();
        String enteredPassword = agence.getPassword();
        boolean isAuthenticated = serviceagence.authenticate(enteredEmail, enteredPassword);
        if (isAuthenticated) {
            return "agenceAcceuil";
        } else {
            model.addAttribute("error", "Invalid credentials. Please try again.");
            return "loginAgence";
        }
    }

    @GetMapping("/clients")
    public String showLivreursList(Model model) {
        Long id = 1L;
        List<client> listClient = serviceagence.findClientsByAgenceId(id);
        model.addAttribute("listClient", listClient);
        return "agenceClients";
    }
    /*
    @GetMapping("/commandes")
    public String commandesList(Model model) {
        Long id = 1L;
        List<commande> ListCommandes = serviceagence.findCommandeByAgenceId(id);
        model.addAttribute("ListCommandes", ListCommandes);
        return "agenceCommandes";
    }
     */

    @GetMapping("/Affectation")
    public String Affectation(Model model) {
        Long id = 1L;
        List<client> listClient = serviceagence.findClientsByAgenceId(id);
        model.addAttribute("listClient", listClient);
        return "agenceClients";
    }

           /* Commandes
    Affectation*/

}
