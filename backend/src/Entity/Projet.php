<?php

namespace App\Entity;

use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\Post;
use Doctrine\DBAL\Types\Types;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Delete;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiProperty;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\GetCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;
use App\Repository\ProjetRepository;
use Symfony\Component\Serializer\Annotation\Groups;
use Vich\UploaderBundle\Mapping\Annotation as Vich;
use Symfony\Component\HttpFoundation\File\File;
use App\Serializer\PatchedDateTimeNormalizer;

#[Vich\Uploadable]
#[ORM\Entity(repositoryClass: ProjetRepository::class)]
#[ApiResource(
    operations: [
        new Get(),
        new GetCollection(),
        new Post(
            inputFormats: ['multipart' => ['multipart/form-data']],
            security: "is_granted('ROLE_USER')"
        ),
        new Delete(),
        new Patch()
    ],
    normalizationContext: [
        'groups' => 'projet_read'
    ],
    denormalizationContext: [
        'groups' => 'projet_write'
    ]
)]
class Projet
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['projet_read' , 'utilisateur_read' , 'partenaireProjet_read' , 'feedback_read'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['projet_read' , 'projet_write' , 'utilisateur_read' , 'partenaireProjet_read' , 'feedback_read'])]
    private ?string $titreActvite = null;

    #[ORM\Column(length: 1500)]
    #[Groups(['projet_read' , 'projet_write' , 'utilisateur_read' , 'partenaireProjet_read' , 'feedback_read'])]
    private ?string $descActivite = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    #[Groups(['projet_read' , 'utilisateur_read' , 'partenaireProjet_read' , 'feedback_read'])]
    private ?\DateTimeInterface $dateCreation = null;

    #[ORM\Column(length: 255)]
    #[Groups(['projet_read' , 'projet_write' , 'utilisateur_read' , 'partenaireProjet_read' , 'feedback_read'])]
    private ?string $statutProjet = null;

    #[ORM\Column(length: 255)]
    #[Groups(['projet_read' , 'projet_write' , 'utilisateur_read' , 'partenaireProjet_read' , 'feedback_read'])]
    private ?string $dureeProjet = null;

    #[ORM\ManyToOne(inversedBy: 'projet')]
    #[Groups(['projet_read' , 'partenaireProjet_read' , 'feedback_read'])]
    private ?Utilisateur $utilisateur = null;

    #[ORM\OneToMany(mappedBy: 'projet', targetEntity: Feedback::class)]
    #[Groups(['projet_read' , 'utilisateur_read'])]
    private Collection $feedback;

    #[ORM\OneToMany(mappedBy: 'projet', targetEntity: PartenaireProjet::class)]
    #[Groups(['projet_read' , 'utilisateur_read'])]
    private Collection $partenaireProjets;

   
    #[Vich\UploadableField(mapping: "media_object", fileNameProperty: "filePath")]
    #[Groups(['projet_write'])]
    public ?File $file = null;

    #[ORM\Column(nullable: true)] 
    #[Groups(['projet_read'])]
    public ?string $filePath = null;

    #[ApiProperty(types: ['https://schema.org/contentUrl'])]
    #[Groups(['utilisateur_read','projet_read' , 'publicationThematique_read' , 'publicationEvenement_read' , 'domaine_read' , 'commentaireEvenement_read' , 'commentaireThematique_read' , 'voirEvenement_read' , 'voirThematique_read' , 'reagirEvenement_read' , 'reagirThematique_read' , 'article_read' , 'projet_read' , 'partenaire_read' , 'partenaireProjet_read' , 'feedback_read'])]
    public ?string $contentUrl = null;

    public function __construct()
    {
        $this->feedback = new ArrayCollection();
        $this->partenaireProjets = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitreActvite(): ?string
    {
        return $this->titreActvite;
    }

    public function setTitreActvite(string $titreActvite): static
    {
        $this->titreActvite = $titreActvite;

        return $this;
    }

    public function getDescActivite(): ?string
    {
        return $this->descActivite;
    }

    public function setDescActivite(string $descActivite): static
    {
        $this->descActivite = $descActivite;

        return $this;
    }

    public function getDateCreation(): ?\DateTimeInterface
    {
        return $this->dateCreation;
    }

    public function setDateCreation(\DateTimeInterface $dateCreation): static
    {
        $this->dateCreation = $dateCreation;

        return $this;
    }

    public function getStatutProjet(): ?string
    {
        return $this->statutProjet;
    }

    public function setStatutProjet(string $statutProjet): static
    {
        $this->statutProjet = $statutProjet;

        return $this;
    }

    public function getDureeProjet(): ?string
    {
        return $this->dureeProjet;
    }

    public function setDureeProjet(string $dureeProjet): static
    {
        $this->dureeProjet = $dureeProjet;

        return $this;
    }

    public function getUtilisateur(): ?Utilisateur
    {
        return $this->utilisateur;
    }

    public function setUtilisateur(?Utilisateur $utilisateur): static
    {
        $this->utilisateur = $utilisateur;

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
            $feedback->setProjet($this);
        }

        return $this;
    }

    public function removeFeedback(Feedback $feedback): static
    {
        if ($this->feedback->removeElement($feedback)) {
            // set the owning side to null (unless already changed)
            if ($feedback->getProjet() === $this) {
                $feedback->setProjet(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, PartenaireProjet>
     */
    public function getPartenaireProjets(): Collection
    {
        return $this->partenaireProjets;
    }

    public function addPartenaireProjet(PartenaireProjet $partenaireProjet): static
    {
        if (!$this->partenaireProjets->contains($partenaireProjet)) {
            $this->partenaireProjets->add($partenaireProjet);
            $partenaireProjet->setProjet($this);
        }

        return $this;
    }

    public function removePartenaireProjet(PartenaireProjet $partenaireProjet): static
    {
        if ($this->partenaireProjets->removeElement($partenaireProjet)) {
            // set the owning side to null (unless already changed)
            if ($partenaireProjet->getProjet() === $this) {
                $partenaireProjet->setProjet(null);
            }
        }

        return $this;
    }
}
