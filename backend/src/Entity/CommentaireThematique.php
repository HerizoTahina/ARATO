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
use App\Repository\CommentaireThematiqueRepository;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: CommentaireThematiqueRepository::class)]
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
        'groups' => 'commentaireThematique_read'
    ],
    denormalizationContext: [
        'groups' => 'commentaireThematique_write'
    ]
)]
class CommentaireThematique
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['commentaireThematique_read' , 'publicationThematique_read'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['commentaireThematique_read' , 'commentaireThematique_write' , 'publicationThematique_read'])]
    private ?string $contenuCommentaire = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    #[Groups(['commentaireThematique_read' , 'publicationThematique_read'])]
    private ?\DateTimeInterface $dateCreationCommentaire = null;

    #[ORM\ManyToOne(inversedBy: 'commentaireThematiques')]
    #[Groups(['commentaireThematique_read' , 'publicationThematique_read'])]
    private ?Utilisateur $utilisateur = null;

    #[ORM\ManyToOne(inversedBy: 'commentaireThematiques')]
    #[Groups(['commentaireThematique_read' , 'commentaireThematique_write'])]
    private ?PublicationThematique $publicationThematique = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getContenuCommentaire(): ?string
    {
        return $this->contenuCommentaire;
    }

    public function setContenuCommentaire(string $contenuCommentaire): static
    {
        $this->contenuCommentaire = $contenuCommentaire;

        return $this;
    }

    public function getDateCreationCommentaire(): ?\DateTimeInterface
    {
        return $this->dateCreationCommentaire;
    }

    public function setDateCreationCommentaire(\DateTimeInterface $dateCreationCommentaire): static
    {
        $this->dateCreationCommentaire = $dateCreationCommentaire;

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
