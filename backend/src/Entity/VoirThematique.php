<?php

namespace App\Entity;

use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Delete;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\GetCollection;
use App\Repository\VoirThematiqueRepository;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: VoirThematiqueRepository::class)]
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
        'groups' => 'voirThematique_read'
    ],
    denormalizationContext: [
        'groups' => 'voirThematique_write'
    ]
)]
class VoirThematique
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['voirThematique_read' , 'publicationThematique_read'])]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'voirThematiques')]
    #[Groups(['voirThematique_read' , 'publicationThematique_read'])]
    private ?Utilisateur $utilisateur = null;

    #[ORM\ManyToOne(inversedBy: 'voirThematiques')]
    #[Groups(['voirThematique_read' , 'voirThematique_write'])]
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
