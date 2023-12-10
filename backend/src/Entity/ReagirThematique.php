<?php

namespace App\Entity;

use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Delete;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\GetCollection;
use App\Repository\ReagirThematiqueRepository;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: ReagirThematiqueRepository::class)]
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
        'groups' => 'reagirThematique_read'
    ],
    denormalizationContext: [
        'groups' => 'reagirThematique_write'
    ]
)]
class ReagirThematique
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['reagirThematique_read' , 'publicationThematique_read'])]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'reagirThematiques')]
    #[Groups(['reagirThematique_read' , 'publicationThematique_read'])]
    private ?Utilisateur $utilisateur = null;

    #[ORM\ManyToOne(inversedBy: 'reagirThematiques')]
    #[Groups(['reagirThematique_read' , 'reagirThematique_write'])]
    private ?PublicationThematique $publicationThematique = null;

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

    public function getPublicationThematique(): ?PublicationThematique
    {
        return $this->publicationThematique;
    }

    public function setPublicationThematique(?PublicationThematique $publicationThematique): static
    {
        $this->publicationThematique = $publicationThematique;

        return $this;
    }
}
