<?php

namespace App\Entity;

use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\Post;
use Doctrine\DBAL\Types\Types;
use ApiPlatform\Metadata\Delete;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Patch;
use App\Repository\CommentaireEvenementRepository;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: CommentaireEvenementRepository::class)]
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
        'groups' => 'commentaireEvenement_read'
    ],
    denormalizationContext: [
        'groups' => 'commentaireEvenement_write'
    ]
)]
class CommentaireEvenement
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['commentaireEvenement_read' , 'publicationEvenement_read'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['commentaireEvenement_read' , 'commentaireEvenement_write' , 'publicationEvenement_read'])]
    private ?string $contenuCommentaire = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    #[Groups(['commentaireEvenement_read' , 'publicationEvenement_read'])]
    private ?\DateTimeInterface $dateCreationCommentaire = null;

    #[ORM\ManyToOne(inversedBy: 'commentaireEvenements')]
    #[Groups(['commentaireEvenement_read' , 'publicationEvenement_read'])]
    private ?Utilisateur $utilisateur = null;

    #[ORM\ManyToOne(inversedBy: 'commentaireEvenements')]
    #[Groups(['commentaireEvenement_read' , 'commentaireEvenement_write'])]
    private ?PublicationEvenement $publicationEvenement = null;

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
