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
use App\Serializer\PatchedDateTimeNormalizer;
use Symfony\Component\HttpFoundation\File\File;
use Doctrine\Common\Collections\ArrayCollection;
use App\Repository\PublicationThematiqueRepository;
use Symfony\Component\Serializer\Annotation\Groups;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

#[Vich\Uploadable]
#[ORM\Entity(repositoryClass: PublicationThematiqueRepository::class)]
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
        'groups' => 'publicationThematique_read'
    ],
    denormalizationContext: [
        'groups' => 'publicationThematique_write'
    ]
)]
class PublicationThematique
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['publicationThematique_read' , 'utilisateur_read' , 'domaine_read' , 'commentaireThematique_read' , 'voirThematique_read' , 'reagirThematique_read'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['publicationThematique_read' , 'publicationThematique_write' , 'utilisateur_read' , 'domaine_read' , 'commentaireThematique_read' , 'voirThematique_read' , 'reagirThematique_read'])]
    private ?string $titre = null;

    #[ORM\Column(length: 255)]
    #[Groups(['publicationThematique_read' , 'publicationThematique_write' , 'utilisateur_read' , 'domaine_read' , 'commentaireThematique_read' , 'voirThematique_read' , 'reagirThematique_read'])]
    private ?string $description = null;

    #[ORM\Column(length: 255)]
    #[Groups(['publicationThematique_read' , 'publicationThematique_write' , 'utilisateur_read' , 'domaine_read' , 'commentaireThematique_read' , 'voirThematique_read' , 'reagirThematique_read'])]
    private ?string $slogan = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    #[Groups(['publicationThematique_read' , 'utilisateur_read' , 'domaine_read' , 'commentaireThematique_read' , 'voirThematique_read' , 'reagirThematique_read'])]
    private ?\DateTimeInterface $datePublication = null;

    #[ORM\ManyToOne(inversedBy: 'publicationThematiques')]
    #[Groups(['publicationThematique_read' , 'domaine_read'])]
    private ?Utilisateur $utilisateur = null;

    #[ORM\ManyToOne(inversedBy: 'publicationThematiques')]
    #[Groups(['publicationThematique_read' , 'publicationThematique_write' , 'utilisateur_read'])]
    private ?Domaine $domaine = null;

    #[ORM\OneToMany(mappedBy: 'publicationThematique', targetEntity: ReagirThematique::class)]    
    #[Groups(['publicationThematique_read'])]
    private Collection $reagirThematiques;

    #[ORM\OneToMany(mappedBy: 'publicationThematique', targetEntity: VoirThematique::class)]
    #[Groups(['publicationThematique_read'])]
    private Collection $voirThematiques;

    #[ORM\OneToMany(mappedBy: 'publicationThematique', targetEntity: CommentaireThematique::class)]
    #[Groups(['publicationThematique_read'])]
    private Collection $commentaireThematiques;

    #[ApiProperty(types: ['https://schema.org/contentUrl'])]
    #[Groups(['publicationThematique_read' , 'domaine_read' , 'commentaireThematique_read' , 'voirThematique_read' , 'reagirThematique_read'])]
    public ?string $contentUrl = null;

    #[Vich\UploadableField(mapping: "media_object", fileNameProperty: "filePath")]
    #[Groups(['publicationThematique_write'])]
    public ?File $file = null;
    
    #[ORM\Column(nullable: true)] 
    public ?string $filePath = null;

    public function __construct()
    {
        $this->reagirThematiques = new ArrayCollection();
        $this->voirThematiques = new ArrayCollection();
        $this->commentaireThematiques = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitre(): ?string
    {
        return $this->titre;
    }

    public function setTitre(string $titre): static
    {
        $this->titre = $titre;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function getDatePublication(): ?\DateTimeInterface
    {
        return $this->datePublication;
    }

    public function setDatePublication(\DateTimeInterface $datePublication): static
    {
        $this->datePublication = $datePublication;

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

    public function getDomaine(): ?Domaine
    {
        return $this->domaine;
    }

    public function setDomaine(?Domaine $domaine): static
    {
        $this->domaine = $domaine;

        return $this;
    }

    public function getSlogan(): ?string
    {
        return $this->slogan;
    }

    public function setSlogan(string $slogan): static
    {
        $this->slogan = $slogan;

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
            $reagirThematique->setPublicationThematique($this);
        }

        return $this;
    }

    public function removeReagirThematique(ReagirThematique $reagirThematique): static
    {
        if ($this->reagirThematiques->removeElement($reagirThematique)) {
            // set the owning side to null (unless already changed)
            if ($reagirThematique->getPublicationThematique() === $this) {
                $reagirThematique->setPublicationThematique(null);
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
            $voirThematique->setPublicationThematique($this);
        }

        return $this;
    }

    public function removeVoirThematique(VoirThematique $voirThematique): static
    {
        if ($this->voirThematiques->removeElement($voirThematique)) {
            // set the owning side to null (unless already changed)
            if ($voirThematique->getPublicationThematique() === $this) {
                $voirThematique->setPublicationThematique(null);
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
            $commentaireThematique->setPublicationThematique($this);
        }

        return $this;
    }

    public function removeCommentaireThematique(CommentaireThematique $commentaireThematique): static
    {
        if ($this->commentaireThematiques->removeElement($commentaireThematique)) {
            // set the owning side to null (unless already changed)
            if ($commentaireThematique->getPublicationThematique() === $this) {
                $commentaireThematique->setPublicationThematique(null);
            }
        }

        return $this;
    }
}
