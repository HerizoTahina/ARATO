<?php

namespace App\Entity;

use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Delete;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\GetCollection;
use App\Repository\PartenaireRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: PartenaireRepository::class)]
#[ApiResource(
    operations: [
        new Get(),
        new GetCollection(),
        new Post(),
        new Delete(),
        new Patch()
    ],
    normalizationContext: [
        'groups' => 'partenaire_read'
    ],
    denormalizationContext: [
        'groups' => 'partenaire_write'
    ]
)]
class Partenaire
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['partenaire_read' , 'utilisateur_read'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['partenaire_read' , 'partenaire_write' , 'utilisateur_read'])]
    private ?string $nomPart = null;

    #[ORM\Column(length: 255)]
    #[Groups(['partenaire_read' , 'partenaire_write' , 'utilisateur_read'])]
    private ?string $contactPart = null;

    #[ORM\ManyToOne(inversedBy: 'partenaire')]
    #[Groups(['partenaire_read'])]
    private ?Utilisateur $utilisateur = null;

    #[ORM\OneToMany(mappedBy: 'partenaire', targetEntity: PartenaireProjet::class)]
    #[Groups(['partenaire_read' , 'utilisateur_read'])]
    private Collection $partenaireProjets;

    public function __construct()
    {
        $this->partenaireProjets = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNomPart(): ?string
    {
        return $this->nomPart;
    }

    public function setNomPart(string $nomPart): static
    {
        $this->nomPart = $nomPart;

        return $this;
    }

    public function getContactPart(): ?string
    {
        return $this->contactPart;
    }

    public function setContactPart(string $contactPart): static
    {
        $this->contactPart = $contactPart;

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
            $partenaireProjet->setPartenaire($this);
        }

        return $this;
    }

    public function removePartenaireProjet(PartenaireProjet $partenaireProjet): static
    {
        if ($this->partenaireProjets->removeElement($partenaireProjet)) {
            // set the owning side to null (unless already changed)
            if ($partenaireProjet->getPartenaire() === $this) {
                $partenaireProjet->setPartenaire(null);
            }
        }

        return $this;
    }
}
