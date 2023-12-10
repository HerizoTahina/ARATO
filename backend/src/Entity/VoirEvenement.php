<?php

namespace App\Entity;

use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Delete;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\GetCollection;
use App\Repository\VoirEvenementRepository;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: VoirEvenementRepository::class)]
#[ApiResource(
    operations: [
        new Get(),
        new GetCollection(),
        new Post(
            security: 'is_granted("ROLE_USER")'
        ),
        new Delete(),
        new Patch()
    ],
    normalizationContext: [
        'groups' => 'voirEvenement_read'
    ],
    denormalizationContext: [
        'groups' => 'voirEvenement_write'
    ]
)]
class VoirEvenement
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['voirEvenement_read', 'publicationEvenement_read'])]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'voirEvenements')]
    #[Groups(['voirEvenement_read' , 'publicationEvenement_read'])]
    private ?Utilisateur $utilisateur = null;

    #[ORM\ManyToOne(inversedBy: 'voirEvenements')]
    #[Groups(['voirEvenement_read' , 'voirEvenement_write'])]
    private ?PublicationEvenement $publicationEvenement = null;

    public function getId(): ?int
    {
        return $this->id;
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

    public function getPublicationEvenement(): ?PublicationEvenement
    {
        return $this->publicationEvenement;
    }

    public function setPublicationEvenement(?PublicationEvenement $publicationEvenement): static
    {
        $this->publicationEvenement = $publicationEvenement;

        return $this;
    }
}
