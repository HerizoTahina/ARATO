<?php

namespace App\Entity;

use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Delete;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use App\Repository\FeedbackRepository;
use ApiPlatform\Metadata\GetCollection;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: FeedbackRepository::class)]
#[ApiResource(
    operations: [
        new Get(),
        new GetCollection(),
        new Post(),
        new Delete(),
        new Patch()
    ],
    normalizationContext: [
        'groups' => 'feedback_read'
    ],
    denormalizationContext: [
        'groups' => 'feedback_write'
    ]
)]
class Feedback
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['feedback_read'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['feedback_read' , 'feedback_write'])]
    private ?string $nomFeedback = null;

    #[ORM\Column(length: 255)]
    #[Groups(['feedback_read' , 'feedback_write'])]
    private ?string $email = null;

    #[ORM\Column(length: 255)]
    #[Groups(['feedback_read' , 'feedback_write'])]
    private ?string $objetMail = null;

    #[ORM\Column(length: 255)]
    #[Groups(['feedback_read' , 'feedback_write'])]
    private ?string $appreciation = null;

    #[ORM\Column(length: 255)]
    #[Groups(['feedback_read' , 'feedback_write'])]
    private ?string $pointDeVue = null;

    #[ORM\ManyToOne(inversedBy: 'feedback')]
    #[Groups(['feedback_read' , 'feedback_write'])]
    private ?Projet $projet = null;

    #[ORM\ManyToOne(inversedBy: 'feedback')]
    #[Groups(['feedback_read', 'feedback_write'])]
    private ?Utilisateur $utilisateur = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNomFeedback(): ?string
    {
        return $this->nomFeedback;
    }

    public function setNomFeedback(string $nomFeedback): static
    {
        $this->nomFeedback = $nomFeedback;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): static
    {
        $this->email = $email;

        return $this;
    }

    public function getObjetMail(): ?string
    {
        return $this->objetMail;
    }

    public function setObjetMail(string $objetMail): static
    {
        $this->objetMail = $objetMail;

        return $this;
    }

    public function getAppreciation(): ?string
    {
        return $this->appreciation;
    }

    public function setAppreciation(string $appreciation): static
    {
        $this->appreciation = $appreciation;

        return $this;
    }

    public function getPointDeVue(): ?string
    {
        return $this->pointDeVue;
    }

    public function setPointDeVue(string $pointDeVue): static
    {
        $this->pointDeVue = $pointDeVue;

        return $this;
    }

    public function getProjet(): ?Projet
    {
        return $this->projet;
    }

    public function setProjet(?Projet $projet): static
    {
        $this->projet = $projet;

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
