<?php

namespace App\Entity;

use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\Post;
use Doctrine\DBAL\Types\Types;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Delete;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use App\Repository\ArticleRepository;
use ApiPlatform\Metadata\GetCollection;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: ArticleRepository::class)]
#[ApiResource(
    operations: [
        new Get(),
        new GetCollection(),
        new Post(),
        new Delete(),
        new Patch()
    ],
    normalizationContext: [
        'groups' => 'article_read'
    ],
    // denormalizationContext: [
    //     'groups' => 'article_write'
    // ]
)]
class Article
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups('article_read' , 'utilisateur_read')]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups('article_read' , 'article_write' , 'utilisateur_read')]
    private ?string $titreActivite = null;

    #[ORM\Column(length: 255)]
    #[Groups('article_read' , 'article_write' , 'utilisateur_read')]
    private ?string $descActivite = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    #[Groups('article_read' , 'utilisateur_read')]
    private ?\DateTimeInterface $dateCreation = null;

    #[ORM\Column(length: 255)]
    #[Groups('article_read' , 'article_write' , 'utilisateur_read')]
    private ?string $articleSource = null;

    #[ORM\ManyToOne(inversedBy: 'article')]
    #[Groups('article_read')]
    private ?Utilisateur $utilisateur = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitreActivite(): ?string
    {
        return $this->titreActivite;
    }

    public function setTitreActivite(string $titreActivite): static
    {
        $this->titreActivite = $titreActivite;

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

    public function getArticleSource(): ?string
    {
        return $this->articleSource;
    }

    public function setArticleSource(string $articleSource): static
    {
        $this->articleSource = $articleSource;

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
