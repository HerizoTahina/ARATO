<?php

namespace App\Entity;

use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Delete;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\GetCollection;
use App\Repository\PartenaireProjetRepository;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: PartenaireProjetRepository::class)]
#[ApiResource(
    operations: [
        new Get(),
        new GetCollection(),
        new Post(),
        new Delete(),
        new Patch()
    ],
    normalizationContext: [
        'groups' => 'partenaireProjet_read'
    ],
    // denormalizationContext: [
    //     'groups' => 'partenaireProjet_write'
    // ]
)]
class PartenaireProjet
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups('utilisateur_read' , 'partenaireProjet_read')]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'partenaireProjets')]
    #[Groups('utilisateur_read' , 'partenaireProjet_read' , 'partenaireProjet_write')]
    private ?Projet $projet = null;

    #[ORM\ManyToOne(inversedBy: 'partenaireProjets')]
    #[Groups(['partenaireProjet_read' , 'partenaireProjet_write'])]
    private ?Partenaire $partenaire = null;

    public function getId(): ?int
    {
        return $this->id;
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

    public function getPartenaire(): ?Partenaire
    {
        return $this->partenaire;
    }

    public function setPartenaire(?Partenaire $partenaire): static
    {
        $this->partenaire = $partenaire;

        return $this;
    }
}
