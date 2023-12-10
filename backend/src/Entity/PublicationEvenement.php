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
use App\Repository\PublicationEvenementRepository;
use Symfony\Component\Serializer\Annotation\Groups;
use Vich\UploaderBundle\Mapping\Annotation as Vich;
use Symfony\Component\HttpFoundation\File\File;
use App\Serializer\PatchedDateTimeNormalizer;

#[Vich\Uploadable]
#[ORM\Entity(repositoryClass: PublicationEvenementRepository::class)]
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
        'groups' => 'publicationEvenement_read'
    ],
    denormalizationContext: [
        'groups' => 'publicationEvenement_write'
    ]
)]
class PublicationEvenement
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['publicationEvenement_read' , 'utilisateur_read' , 'domaine_read' , 'commentaireEvenement_read' , 'voirEvenement_read' , 'reagirEvenement_read'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['publicationEvenement_read' , 'publicationEvenement_write' , 'utilisateur_read' , 'domaine_read' , 'commentaireEvenement_read' , 'voirEvenement_read' , 'reagirEvenement_read'])]
    private ?string $titre = null;

    #[ORM\Column(length: 255)]
    #[Groups(['publicationEvenement_read' , 'publicationEvenement_write' , 'utilisateur_read' , 'domaine_read' , 'commentaireEvenement_read' , 'voirEvenement_read' , 'reagirEvenement_read'])]
    private ?string $description = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    #[Groups(['publicationEvenement_read' , 'utilisateur_read' , 'domaine_read' , 'commentaireEvenement_read' , 'voirEvenement_read' , 'reagirEvenement_read'])]
    private ?\DateTimeInterface $datePublication = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['publicationEvenement_read' , 'publicationEvenement_write' , 'utilisateur_read' , 'domaine_read' , 'commentaireEvenement_read' , 'voirEvenement_read' , 'reagirEvenement_read'])]
    private ?string $placeEvenement = null;

    #[ORM\ManyToOne(inversedBy: 'publicationEvenements')]
    #[Groups(['publicationEvenement_read' , 'domaine_read'])]
    private ?Utilisateur $utilisateur = null;

    #[ORM\ManyToOne(inversedBy: 'publicationEvenements')]
    #[Groups(['publicationEvenement_read' , 'publicationEvenement_write' , 'utilisateur_read'])]
    private ?Domaine $domaine = null;

    #[ORM\OneToMany(mappedBy: 'publicationEvenement', targetEntity: ReagirEvenement::class)]
    #[Groups(['publicationEvenement_read'])]
    private Collection $reagirEvenements;

    #[ORM\OneToMany(mappedBy: 'publicationEvenement', targetEntity: VoirEvenement::class)]
    #[Groups(['publicationEvenement_read'])]
    private Collection $voirEvenements;

    #[ORM\OneToMany(mappedBy: 'publicationEvenement', targetEntity: CommentaireEvenement::class)]
    #[Groups(['publicationEvenement_read'])]
    private Collection $commentaireEvenements;

    #[ApiProperty(types: ['https://schema.org/contentUrl'])]
    #[Groups(['publicationEvenement_read' , 'domaine_read' , 'commentaireEvenement_read' , 'voirEvenement_read' , 'reagirEvenement_read'])]
    public ?string $contentUrl = null;

    #[Vich\UploadableField(mapping: "media_object", fileNameProperty: "filePath")]
    #[Groups(['publicationEvenement_write'])]
    public ?File $file = null;
    
    #[ORM\Column(nullable: true)] 
    public ?string $filePath = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $theme = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $type = null;

    public function __construct()
    {
        $this->reagirEvenements = new ArrayCollection();
        $this->voirEvenements = new ArrayCollection();
        $this->commentaireEvenements = new ArrayCollection();
    }

    #[Groups(['publicationEvenement_read'])]
    public function getNombreCommentaire(){
        $nombre = 0;
        foreach($this->commentaireEvenements->toArray() as $commentaire){
            $nombre = $nombre+1;
        }
        return $nombre;
    }

    #[Groups(['publicationEvenement_read'])]
    public function getNombreReaction(){
        $nombre = 0;
        foreach($this->reagirEvenements->toArray() as $reagir){
            $nombre = $nombre+1;
        }
        return $nombre;
    }

    #[Groups(['publicationEvenement_read'])]
    public function getNombreVue(){
        $nombre = 0;
        foreach($this->voirEvenements->toArray() as $vue){
            $nombre = $nombre+1;
        }
        return $nombre;
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

    public function getPlaceEvenement(): ?string
    {
        return $this->placeEvenement;
    }

    public function setPlaceEvenement(string $placeEvenement): static
    {
        $this->placeEvenement = $placeEvenement;

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
            $reagirEvenement->setPublicationEvenement($this);
        }

        return $this;
    }

    public function removeReagirEvenement(ReagirEvenement $reagirEvenement): static
    {
        if ($this->reagirEvenements->removeElement($reagirEvenement)) {
            // set the owning side to null (unless already changed)
            if ($reagirEvenement->getPublicationEvenement() === $this) {
                $reagirEvenement->setPublicationEvenement(null);
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
            $voirEvenement->setPublicationEvenement($this);
        }

        return $this;
    }

    public function removeVoirEvenement(VoirEvenement $voirEvenement): static
    {
        if ($this->voirEvenements->removeElement($voirEvenement)) {
            // set the owning side to null (unless already changed)
            if ($voirEvenement->getPublicationEvenement() === $this) {
                $voirEvenement->setPublicationEvenement(null);
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
            $commentaireEvenement->setPublicationEvenement($this);
        }

        return $this;
    }

    public function removeCommentaireEvenement(CommentaireEvenement $commentaireEvenement): static
    {
        if ($this->commentaireEvenements->removeElement($commentaireEvenement)) {
            // set the owning side to null (unless already changed)
            if ($commentaireEvenement->getPublicationEvenement() === $this) {
                $commentaireEvenement->setPublicationEvenement(null);
            }
        }

        return $this;
    }

    public function getTheme(): ?string
    {
        return $this->theme;
    }

    public function setTheme(?string $theme): static
    {
        $this->theme = $theme;

        return $this;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(?string $type): static
    {
        $this->type = $type;

        return $this;
    }
}
