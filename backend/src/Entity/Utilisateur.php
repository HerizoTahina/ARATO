<?php

namespace App\Entity;

use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Delete;
use Doctrine\ORM\Mapping as ORM;
use App\State\UserPasswordHasher;
use ApiPlatform\Metadata\ApiProperty;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\GetCollection;
use App\Repository\UtilisateurRepository;
use Doctrine\Common\Collections\Collection;
use App\Serializer\PatchedDateTimeNormalizer;
use Symfony\Component\HttpFoundation\File\File;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;
use Vich\UploaderBundle\Mapping\Annotation as Vich;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;

#[Vich\Uploadable]
#[ORM\Entity(repositoryClass: UtilisateurRepository::class)]
#[ApiResource(
    operations:[
        new Get(),
        new GetCollection(),
        new Post(
            inputFormats: ['multipart' => ['multipart/form-data']],
            processor: UserPasswordHasher::class
        ),
        new Patch(
            processor: UserPasswordHasher::class
        ),
        new Delete()
    ],
    normalizationContext: [
        'groups' => 'utilisateur_read'
    ],
    denormalizationContext: [
        'groups' => 'utilisateur_write'
    ]
)]
class Utilisateur implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['utilisateur_read' , 'publicationThematique_read' , 'publicationEvenement_read' , 'domaine_read' , 'commentaireEvenement_read' , 'commentaireThematique_read' , 'voirEvenement_read' , 'voirThematique_read' , 'reagirEvenement_read' , 'reagirThematique_read' , 'actualite_read' , 'axeStrategique_read'])]
    private ?int $id = null;

    #[ORM\Column(length: 180, unique: true)]
    #[Groups(['utilisateur_read' , 'utilisateur_write'])]
    private ?string $email = null;

    #[ORM\Column]
    #[Groups(['utilisateur_write'])]
    private array $roles = [];
    
    /**
     * @var string The hashed password
     */
    #[ORM\Column]
    #[Groups(['utilisateur_write'])]
    private ?string $password = null;

    #[ORM\Column(length: 255)]
    #[Groups(['utilisateur_read' , 'utilisateur_write' , 'publicationThematique_read' , 'publicationEvenement_read' , 'domaine_read' , 'commentaireEvenement_read' , 'commentaireThematique_read' , 'voirEvenement_read' , 'voirThematique_read' , 'reagirEvenement_read' , 'reagirThematique_read' , 'actualite_read' , 'article_read' , 'projet_read' , 'partenaire_read' , 'partenaireProjet_read' , 'feedback_read' , 'axeStrategique_read'])]
    private ?string $nom = null;

    #[ORM\OneToMany(mappedBy: 'utilisateur', targetEntity: PublicationThematique::class)]
    #[Groups(['utilisateur_read'])]
    private Collection $publicationThematiques;

    #[ORM\OneToMany(mappedBy: 'utilisateur', targetEntity: PublicationEvenement::class)]
    #[Groups(['utilisateur_read'])]
    private Collection $publicationEvenements;

    #[ORM\OneToMany(mappedBy: 'utilisateur', targetEntity: ReagirThematique::class)]
    private Collection $reagirThematiques;

    #[ORM\OneToMany(mappedBy: 'utilisateur', targetEntity: ReagirEvenement::class)]
    private Collection $reagirEvenements;

    #[ORM\OneToMany(mappedBy: 'utilisateur', targetEntity: VoirThematique::class)]
    private Collection $voirThematiques;

    #[ORM\OneToMany(mappedBy: 'utilisateur', targetEntity: VoirEvenement::class)]
    private Collection $voirEvenements;

    #[ORM\OneToMany(mappedBy: 'utilisateur', targetEntity: CommentaireThematique::class)]
    private Collection $commentaireThematiques;

    #[ORM\OneToMany(mappedBy: 'utilisateur', targetEntity: CommentaireEvenement::class)]
    private Collection $commentaireEvenements;

    #[ApiProperty(types: ['https://schema.org/contentUrl'])]
    #[Groups(['utilisateur_read' , 'publicationThematique_read' , 'publicationEvenement_read' , 'domaine_read' , 'commentaireEvenement_read' , 'commentaireThematique_read' , 'voirEvenement_read' , 'voirThematique_read' , 'reagirEvenement_read' , 'reagirThematique_read' , 'article_read' , 'projet_read' , 'partenaire_read' , 'partenaireProjet_read' , 'feedback_read'])]
    public ?string $contentUrl = null;

    #[Vich\UploadableField(mapping: "media_object", fileNameProperty: "filePath")]
    #[Groups(['utilisateur_write'])]
    public ?File $file = null;

    #[ORM\OneToMany(mappedBy: 'utilisateur', targetEntity: Partenaire::class)]
    // #[Groups(['utilisateur_read'])]
    private Collection $partenaire;

    #[ORM\OneToMany(mappedBy: 'utilisateur', targetEntity: AxeStrategique::class)]
    private Collection $axeStrategique;

    #[ORM\OneToMany(mappedBy: 'utilisateur', targetEntity: Article::class)]
    // #[Groups(['utilisateur_read'])]
    private Collection $article;

    #[ORM\OneToMany(mappedBy: 'utilisateur', targetEntity: Actualite::class)]
    // #[Groups(['utilisateur_read'])]
    private Collection $actualite;

    #[ORM\OneToMany(mappedBy: 'utilisateur', targetEntity: Projet::class)]
    // #[Groups(['utilisateur_read'])]
    private Collection $projet;

    #[ORM\OneToMany(mappedBy: 'utilisateur', targetEntity: Feedback::class)]
    private Collection $feedback;
    
    #[ORM\Column(nullable: true)] 
    public ?string $filePath = null;

    public function __construct()
    {
        $this->publicationThematiques = new ArrayCollection();
        $this->publicationEvenements = new ArrayCollection();
        $this->reagirThematiques = new ArrayCollection();
        $this->reagirEvenements = new ArrayCollection();
        $this->voirThematiques = new ArrayCollection();
        $this->voirEvenements = new ArrayCollection();
        $this->commentaireThematiques = new ArrayCollection();
        $this->commentaireEvenements = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): static
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): static
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): static
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials(): void
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(string $nom): static
    {
        $this->nom = $nom;

        return $this;
    }

    /**
     * @return Collection<int, PublicationThematique>
     */
    public function getPublicationThematiques(): Collection
    {
        return $this->publicationThematiques;
    }

    public function addPublicationThematique(PublicationThematique $publicationThematique): static
    {
        if (!$this->publicationThematiques->contains($publicationThematique)) {
            $this->publicationThematiques->add($publicationThematique);
            $publicationThematique->setUtilisateur($this);
        }

        return $this;
    }

    public function removePublicationThematique(PublicationThematique $publicationThematique): static
    {
        if ($this->publicationThematiques->removeElement($publicationThematique)) {
            // set the owning side to null (unless already changed)
            if ($publicationThematique->getUtilisateur() === $this) {
                $publicationThematique->setUtilisateur(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, PublicationEvenement>
     */
    public function getPublicationEvenements(): Collection
    {
        return $this->publicationEvenements;
    }

    public function addPublicationEvenement(PublicationEvenement $publicationEvenement): static
    {
        if (!$this->publicationEvenements->contains($publicationEvenement)) {
            $this->publicationEvenements->add($publicationEvenement);
            $publicationEvenement->setUtilisateur($this);
        }

        return $this;
    }

    public function removePublicationEvenement(PublicationEvenement $publicationEvenement): static
    {
        if ($this->publicationEvenements->removeElement($publicationEvenement)) {
            // set the owning side to null (unless already changed)
            if ($publicationEvenement->getUtilisateur() === $this) {
                $publicationEvenement->setUtilisateur(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, ReagirThematique>
     */
    public function getReagirThematiques(): Collection
    {
        return $this->reagirThematiques;
    }

    public function addReagirThematique(ReagirThematique $reagirThematique): static
    {
        if (!$this->reagirThematiques->contains($reagirThematique)) {
            $this->reagirThematiques->add($reagirThematique);
            $reagirThematique->setUtilisateur($this);
        }

        return $this;
    }

    public function removeReagirThematique(ReagirThematique $reagirThematique): static
    {
        if ($this->reagirThematiques->removeElement($reagirThematique)) {
            // set the owning side to null (unless already changed)
            if ($reagirThematique->getUtilisateur() === $this) {
                $reagirThematique->setUtilisateur(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, ReagirEvenement>
     */
    public function getReagirEvenements(): Collection
    {
        return $this->reagirEvenements;
    }

    public function addReagirEvenement(ReagirEvenement $reagirEvenement): static
    {
        if (!$this->reagirEvenements->contains($reagirEvenement)) {
            $this->reagirEvenements->add($reagirEvenement);
            $reagirEvenement->setUtilisateur($this);
        }

        return $this;
    }

    public function removeReagirEvenement(ReagirEvenement $reagirEvenement): static
    {
        if ($this->reagirEvenements->removeElement($reagirEvenement)) {
            // set the owning side to null (unless already changed)
            if ($reagirEvenement->getUtilisateur() === $this) {
                $reagirEvenement->setUtilisateur(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, VoirThematique>
     */
    public function getVoirThematiques(): Collection
    {
        return $this->voirThematiques;
    }

    public function addVoirThematique(VoirThematique $voirThematique): static
    {
        if (!$this->voirThematiques->contains($voirThematique)) {
            $this->voirThematiques->add($voirThematique);
            $voirThematique->setUtilisateur($this);
        }

        return $this;
    }

    public function removeVoirThematique(VoirThematique $voirThematique): static
    {
        if ($this->voirThematiques->removeElement($voirThematique)) {
            // set the owning side to null (unless already changed)
            if ($voirThematique->getUtilisateur() === $this) {
                $voirThematique->setUtilisateur(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, VoirEvenement>
     */
    public function getVoirEvenements(): Collection
    {
        return $this->voirEvenements;
    }

    public function addVoirEvenement(VoirEvenement $voirEvenement): static
    {
        if (!$this->voirEvenements->contains($voirEvenement)) {
            $this->voirEvenements->add($voirEvenement);
            $voirEvenement->setUtilisateur($this);
        }

        return $this;
    }

    public function removeVoirEvenement(VoirEvenement $voirEvenement): static
    {
        if ($this->voirEvenements->removeElement($voirEvenement)) {
            // set the owning side to null (unless already changed)
            if ($voirEvenement->getUtilisateur() === $this) {
                $voirEvenement->setUtilisateur(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, CommentaireThematique>
     */
    public function getCommentaireThematiques(): Collection
    {
        return $this->commentaireThematiques;
    }

    public function addCommentaireThematique(CommentaireThematique $commentaireThematique): static
    {
        if (!$this->commentaireThematiques->contains($commentaireThematique)) {
            $this->commentaireThematiques->add($commentaireThematique);
            $commentaireThematique->setUtilisateur($this);
        }

        return $this;
    }

    public function removeCommentaireThematique(CommentaireThematique $commentaireThematique): static
    {
        if ($this->commentaireThematiques->removeElement($commentaireThematique)) {
            // set the owning side to null (unless already changed)
            if ($commentaireThematique->getUtilisateur() === $this) {
                $commentaireThematique->setUtilisateur(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, CommentaireEvenement>
     */
    public function getCommentaireEvenements(): Collection
    {
        return $this->commentaireEvenements;
    }

    public function addCommentaireEvenement(CommentaireEvenement $commentaireEvenement): static
    {
        if (!$this->commentaireEvenements->contains($commentaireEvenement)) {
            $this->commentaireEvenements->add($commentaireEvenement);
            $commentaireEvenement->setUtilisateur($this);
        }

        return $this;
    }

    public function removeCommentaireEvenement(CommentaireEvenement $commentaireEvenement): static
    {
        if ($this->commentaireEvenements->removeElement($commentaireEvenement)) {
            // set the owning side to null (unless already changed)
            if ($commentaireEvenement->getUtilisateur() === $this) {
                $commentaireEvenement->setUtilisateur(null);
            }
        }

        return $this;
    }

    

    /**
     * @return Collection<int, Partenaire>
     */
    public function getPartenaire(): Collection
    {
        return $this->partenaire;
    }

    public function addPartenaire(Partenaire $partenaire): static
    {
        if (!$this->partenaire->contains($partenaire)) {
            $this->partenaire->add($partenaire);
            $partenaire->setUtilisateur($this);
        }

        return $this;
    }

    public function removePartenaire(Partenaire $partenaire): static
    {
        if ($this->partenaire->removeElement($partenaire)) {
            // set the owning side to null (unless already changed)
            if ($partenaire->getUtilisateur() === $this) {
                $partenaire->setUtilisateur(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, AxeStrategique>
     */
    public function getAxeStrategique(): Collection
    {
        return $this->axeStrategique;
    }

    public function addAxeStrategique(AxeStrategique $axeStrategique): static
    {
        if (!$this->axeStrategique->contains($axeStrategique)) {
            $this->axeStrategique->add($axeStrategique);
            $axeStrategique->setUtilisateur($this);
        }

        return $this;
    }

    public function removeAxeStrategique(AxeStrategique $axeStrategique): static
    {
        if ($this->axeStrategique->removeElement($axeStrategique)) {
            // set the owning side to null (unless already changed)
            if ($axeStrategique->getUtilisateur() === $this) {
                $axeStrategique->setUtilisateur(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Article>
     */
    public function getArticle(): Collection
    {
        return $this->article;
    }

    public function addArticle(Article $article): static
    {
        if (!$this->article->contains($article)) {
            $this->article->add($article);
            $article->setUtilisateur($this);
        }

        return $this;
    }

    public function removeArticle(Article $article): static
    {
        if ($this->article->removeElement($article)) {
            // set the owning side to null (unless already changed)
            if ($article->getUtilisateur() === $this) {
                $article->setUtilisateur(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Actualite>
     */
    public function getActualite(): Collection
    {
        return $this->actualite;
    }

    public function addActualite(Actualite $actualite): static
    {
        if (!$this->actualite->contains($actualite)) {
            $this->actualite->add($actualite);
            $actualite->setUtilisateur($this);
        }

        return $this;
    }

    public function removeActualite(Actualite $actualite): static
    {
        if ($this->actualite->removeElement($actualite)) {
            // set the owning side to null (unless already changed)
            if ($actualite->getUtilisateur() === $this) {
                $actualite->setUtilisateur(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Projet>
     */
    public function getProjet(): Collection
    {
        return $this->projet;
    }

    public function addProjet(Projet $projet): static
    {
        if (!$this->projet->contains($projet)) {
            $this->projet->add($projet);
            $projet->setUtilisateur($this);
        }

        return $this;
    }

    public function removeProjet(Projet $projet): static
    {
        if ($this->projet->removeElement($projet)) {
            // set the owning side to null (unless already changed)
            if ($projet->getUtilisateur() === $this) {
                $projet->setUtilisateur(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Feedback>
     */
    public function getFeedback(): Collection
    {
        return $this->feedback;
    }

    public function addFeedback(Feedback $feedback): static
    {
        if (!$this->feedback->contains($feedback)) {
            $this->feedback->add($feedback);
            $feedback->setUtilisateur($this);
        }

        return $this;
    }

    public function removeFeedback(Feedback $feedback): static
    {
        if ($this->feedback->removeElement($feedback)) {
            // set the owning side to null (unless already changed)
            if ($feedback->getUtilisateur() === $this) {
                $feedback->setUtilisateur(null);
            }
        }

        return $this;
    }
}
