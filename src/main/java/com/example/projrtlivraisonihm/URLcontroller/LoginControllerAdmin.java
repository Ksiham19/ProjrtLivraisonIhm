package com.example.projrtlivraisonihm.URLcontroller;

import com.example.projrtlivraisonihm.Entities.*;
import com.example.projrtlivraisonihm.Repesitory.AdminRepository;
import com.example.projrtlivraisonihm.Services.admin.ServiceAdmin;
import com.example.projrtlivraisonihm.Services.agence.ServiceAgence;
import com.example.projrtlivraisonihm.Services.client.ServiceClient;
import com.example.projrtlivraisonihm.Services.commande.ServiceCommande;
import com.example.projrtlivraisonihm.Services.livreur.ServiceLivreur;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import org.slf4j.Logger;

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
    private static final Logger logger = LoggerFactory.getLogger(LoginControllerAdmin.class);

    public LoginControllerAdmin(ServiceAdmin serviceadmin, AdminRepository adminRepository, ServiceClient sericeClient, ServiceCommande serviceCommande, ServiceAgence serviceAgence, ServiceClient serviceClient, ServiceLivreur servicelivreur) {
        this.serviceadmin = serviceadmin;
        this.adminRepository = adminRepository;
        this.serviceCommande = serviceCommande;
        this.sericeClient = sericeClient;
        this.serviceAgence = serviceAgence;
        this.serviceClient = serviceClient;
        this.servicelivreur = servicelivreur;
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
            long nombreCommandes = serviceCommande.countCommande();
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

    @GetMapping("/livreurs")
    public String showLivreursList(Model model) {
        List<livreur> listLivreurs = servicelivreur.findAllLivreurs();
        model.addAttribute("listeLivreurs", listLivreurs);
        return "adminlivreur";
    }

    @GetMapping("/agences")
    public String showAgencesList(Model model) {
        List<agence> listAgences = serviceAgence.findAllAgences();
        model.addAttribute("listAgences", listAgences);
        return "adminAgence";
    }

    @GetMapping("/adminProfil")
    public String showProfilAdmin(Model model) {
        List<admin> admin = serviceadmin.findAllAdmins();
        model.addAttribute("admin", admin);
        return "adminProfil";
    }

    @GetMapping("/adminajoutLivreur")
    public String adminajoutLivreurn(Model model) {
        model.addAttribute("livreur", new livreur());
        return "adminAjoutLivreur";
    }

    @PostMapping("/add")
    public String ajouternouveauLivreur(@ModelAttribute("livreur") livreur livreur, Model model) {
        admin admin = adminRepository.findById(1L).orElseThrow(() -> new RuntimeException("Admin not found"));
        livreur.setAdmin(admin);
        servicelivreur.saveLivreur(livreur);
        model.addAttribute("message", "Un nouveau livreur ajouté");
        return "redirect:/loginAdmin/livreurs";
    }

    @GetMapping("/AjouterAgence")
    public String adminajoutAgence(Model model) {
        model.addAttribute("agence", new agence());
        return "adminAjoutAgence";
    }

    @PostMapping("/addAgence")
    public String ajouternouveauLivreur(@ModelAttribute("agence") agence agence, Model model) {
        admin admin = adminRepository.findById(1L).orElseThrow(() -> new RuntimeException("Admin not found"));
        agence.setAdmin(admin);
        serviceAgence.saveAgence(agence);
        model.addAttribute("message", "Une nouvelle agence ajoutée");
        return "redirect:/loginAdmin/agences";
    }

    @GetMapping("/home")
    public String revenir(Model model) {
        return "redirect:/loginAdmin";
    }

    @GetMapping("/supprimer/{id}")
    public String supprimerLivreur(@PathVariable Long id) {
        servicelivreur.deleteLivreur(id);
        return "redirect:/loginAdmin/livreurs";
    }

    @GetMapping("/supprimerAgence/{id}")
    public String supprimerAgence(@PathVariable Long id) {
        serviceAgence.deleteAgence(id);
        return "redirect:/loginAdmin/agences";
    }

    @GetMapping("/Affectation")
    public String pageAffectation(Model model) {
        List<livreur> listeLivreurs = servicelivreur.findAllLivreurs();
        model.addAttribute("listeLivreurs", listeLivreurs);
        List<commande> listeComandes = serviceCommande.trouverCommandesParAffecte(false);
        model.addAttribute("listeComandes", listeComandes);
        return "adminAffectation.html";
    }

    @GetMapping("/Comandeseffectues")
    public String afficherLesCommandesRealise(Model model) {
        List<commande> listeComandes = serviceCommande.trouverCommandesParAffecte(true);
        model.addAttribute("listeComandes", listeComandes);
        return "CommandeRealises.html";
    }

    @GetMapping("/detailsCommande/{id}")
    public String afficherDetailsCommande(@PathVariable Long id, Model model) {
        commande commande = serviceCommande.trouverCommandeParId(id);
        livreur livreur = commande.getLivreur();
        client client = commande.getClient();
        agence agence = commande.getAgence();
        model.addAttribute("commande", commande);
        model.addAttribute("livreur", livreur);
        model.addAttribute("client", client);
        model.addAttribute("agence", agence);
        return "detailsCommande";
    }


    @PostMapping("/affecterCommande")
    public String affecterCommande(
            @RequestParam("idCommande") Long idCommande,
            @RequestParam("idLivreur") Long idLivreur,
            Model model
    ) {
        // Affecter la commande au livreur
        serviceCommande.affecterCommandeALivreur(idCommande, idLivreur);

        // Modifier la valeur de l'attribut affecte de la commande en 1
        serviceCommande.modifierAffecteCommande(idCommande);

        // Mettre à jour la liste des commandes non encore affectées
        List<commande> listeCommandesNonAffectees = serviceCommande.trouverCommandesParAffecte(false);
        model.addAttribute("listeComandes", listeCommandesNonAffectees);

        return "redirect:/loginAdmin/Affectation";
    }

}
