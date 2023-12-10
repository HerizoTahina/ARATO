<?php

namespace App\Entity;

use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Delete;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\GetCollection;
use App\Repository\ReagirEvenementRepository;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: ReagirEvenementRepository::class)]
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
        'groups' => 'reagirEvenement_read'
    ],
    denormalizationContext: [
        'groups' => 'reagirEvenement_write'
    ]
)]
class ReagirEvenement
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['reagirEvenement_read' , 'publicationEvenement_read'])]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'reagirEvenements')]
    #[Groups(['reagirEvenement_read' , 'publicationEvenement_read'])]
    private ?Utilisateur $utilisateur = null;

    #[ORM\ManyToOne(inversedBy: 'reagirEvenements')]
    #[Groups(['reagirEvenement_read' , 'reagirEvenement_write'])]
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
