<?php

namespace App\Entity;

use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\Post;
use Doctrine\DBAL\Types\Types;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Delete;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\GetCollection;
use App\Repository\ActualiteRepository;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: ActualiteRepository::class)]
#[ApiResource(
    operations: [
        new Get(),
        new GetCollection(),
        new Post(),
        new Delete(),
        new Patch()
    ],
    normalizationContext: [
        'groups' => 'actualite_read'
    ],
    denormalizationContext: [
        'groups' => 'actualite_write'
    ]
)]
class Actualite
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['actualite_read' , 'utilisateur_read'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['actualite_read' , 'actualite_write' , 'utilisateur_read'])]
    private ?string $TitreActivite = null;

    #[ORM\Column(length: 255)]
    #[Groups(['actualite_read' , 'actualite_write' , 'utilisateur_read'])]
    private ?string $descActivite = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    #[Groups(['actualite_read' , 'utilisateur_read'])]
    private ?\DateTimeInterface $dateCreation = null;

    #[ORM\Column(length: 255)]
    #[Groups(['actualite_read' , 'actualite_write' , 'utilisateur_read'])]
    private ?string $impactActualite = null;

    #[ORM\ManyToOne(inversedBy: 'actualite')]
    #[Groups(['actualite_read'])]
    private ?Utilisateur $utilisateur = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitreActivite(): ?string
    {
        return $this->TitreActivite;
    }

    public function setTitreActivite(string $TitreActivite): static
    {
        $this->TitreActivite = $TitreActivite;

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

    public function getImpactActualite(): ?string
    {
        return $this->impactActualite;
    }

    public function setImpactActualite(string $impactActualite): static
    {
        $this->impactActualite = $impactActualite;

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
}
