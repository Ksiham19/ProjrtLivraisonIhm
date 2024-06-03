package com.example.projrtlivraisonihm.URLcontroller;

import com.example.projrtlivraisonihm.Entities.admin;
import com.example.projrtlivraisonihm.Entities.client;
import com.example.projrtlivraisonihm.Entities.commande;
import com.example.projrtlivraisonihm.Entities.livreur;
import com.example.projrtlivraisonihm.Repesitory.ClientRespository;
import com.example.projrtlivraisonihm.Repesitory.CommandeRepository;
import com.example.projrtlivraisonihm.Services.client.ServiceClient;
import com.example.projrtlivraisonihm.Services.commande.ServiceCommande;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping("/loginClient")
public class LoginControllerClient {
    private final ServiceClient servicClient;

    private final ClientRespository clientRepository;
    private final CommandeRepository commandeRepository;
    private final ServiceCommande serviceCommande;

    public LoginControllerClient(ServiceClient servicClient, ClientRespository clientRepository, CommandeRepository commandeRepository, ServiceCommande serviceCommande) {
        this.servicClient = servicClient;
        this.clientRepository = clientRepository;
        this.commandeRepository = commandeRepository;
        this.serviceCommande = serviceCommande;
    }

    @GetMapping
    public String showLoginForm(Model model) {
        model.addAttribute("client", new client());
        return "loginClient.html";
    }

    @PostMapping("/valid")
    public String processLoginForm(@ModelAttribute("client") client client, Model model) {
        String enteredEmail = client.getEmail();
        String enteredPassword = client.getPassword();
        boolean isAuthenticated = servicClient.authenticate(enteredEmail, enteredPassword);
        if (isAuthenticated) {
            return "acceuilClient.html";
        } else {
            model.addAttribute("error", "Invalid credentials. Please try again.");
            return "login.html";
        }
    }

    @GetMapping("/profil")
    public String profil() {
            return "profilClient";
    }

    @GetMapping("/logout")
    public String revenirClient(Model model) {
        return "redirect:/loginClient";
    }

    @GetMapping("/confirm")
    public String confirmerReception(Model model) {
        Long id= 1L;
        List<commande> listeCommandes = serviceCommande.trouverCommandesParClientId(id);
        model.addAttribute("listeCommandes",listeCommandes);
        return "Confirm";
    }




    @GetMapping("/confirmerboutton")
    public String confirmerboutton(Model model) {
        return "pageConfirm";
    }
    @GetMapping("/suivi")
    public String suivieDecommande(Model model) {
        Long id= 1L;
        List<commande> listeCommandes = serviceCommande.trouverCommandesParClientId(id);
        model.addAttribute("listeCommandes",listeCommandes);
        return "SuiviCde";
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
        model.addAttribute("listeCommandes", commandes);
        return "InfoCde";
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
    @GetMapping("/clients")
    public String showClients(Model model) {
        List<client> clients = clientRepository.findAll();
        model.addAttribute("clients", clients);
        return "contact"; // Assurez-vous que le nom de votre fichier HTML est "clients.html"
    }
    @GetMapping("/contacterCli/{id}")
    public String contacterClient(@PathVariable("id") Long idClient, Model model) {
        client client = clientRepository.findById(idClient).orElseThrow(() -> new IllegalArgumentException("Invalid client Id:" + idClient));
        model.addAttribute("client", client);
        return "contacterCli";
    }
}
