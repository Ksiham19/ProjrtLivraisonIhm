package com.example.projrtlivraisonihm.URLcontroller;

import com.example.projrtlivraisonihm.Entities.admin;
import com.example.projrtlivraisonihm.Entities.livreur;
import com.example.projrtlivraisonihm.Repesitory.AdminRepository;
import com.example.projrtlivraisonihm.Services.admin.ServiceAdmin;
import com.example.projrtlivraisonihm.Services.agence.ServiceAgence;
import com.example.projrtlivraisonihm.Services.client.ServiceClient;
import com.example.projrtlivraisonihm.Services.commande.ServiceCommande;
import com.example.projrtlivraisonihm.Services.livreur.ServiceLivreur;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/loginAdmin")
public class LoginControllerAdmin {
    private final ServiceAdmin serviceadmin;
    private final AdminRepository adminRepository;
    private final ServiceClient sericeClient;
    private final ServiceCommande serviceCommande;
    private final ServiceAgence serviceAgence;
    private final ServiceClient serviceClient;
    private final ServiceLivreur servicelivreur;

    public LoginControllerAdmin(ServiceAdmin serviceadmin, AdminRepository adminRepository, ServiceClient sericeClient, ServiceCommande serviceCommande, ServiceAgence serviceAgence, ServiceClient serviceClient,ServiceLivreur servicelivreur) {
        this.serviceadmin = serviceadmin;
        this.adminRepository = adminRepository;
        this.serviceCommande = serviceCommande;
        this.sericeClient=sericeClient;
        this.serviceAgence = serviceAgence;
        this.serviceClient = serviceClient;
        this.servicelivreur=servicelivreur;
    }

    @GetMapping
    public String showLoginForm(Model model) {
        model.addAttribute("admin", new admin());
        return "loginAdmin.html";
    }

    @PostMapping("/valid")
    public String processLoginForm(@ModelAttribute("admin") admin admin, Model model) {
        String enteredEmail = admin.getEmail();
        String enteredPassword = admin.getPassword();
        boolean isAuthenticated = serviceadmin.authenticate(enteredEmail, enteredPassword);
        if (isAuthenticated) {
            long nombreCommandes =serviceCommande.countCommande();
            long nombreAgences = serviceAgence.countAgence();
            long nombreClient = serviceClient.countClients();
            model.addAttribute("nombreCommandes", nombreCommandes);
            model.addAttribute("nombreAgences", nombreAgences);
            model.addAttribute("nombreClients", nombreClient);
            return "acceuilAdmin";
        } else {
            model.addAttribute("error", "Invalid credentials. Please try again.");
            return "loginAdmin";
        }
    }

    @GetMapping("/Livreurs")
    public String ShowLivreursList(Model model) {
        List<livreur> listlivreur = servicelivreur.findAllLivreurs();
        model.addAttribute("listeLivreurs", listlivreur);
        return "adminLivreur";
    }
}
