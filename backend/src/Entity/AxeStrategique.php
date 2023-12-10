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
use App\Repository\AxeStrategiqueRepository;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: AxeStrategiqueRepository::class)]
#[ApiResource(
    operations: [
        new Get(),
        new GetCollection(),
        new Post(),
        new Delete(),
        new Patch(),
    ],
    normalizationContext: [
        'groups' => 'axeStrategique_read'
    ],
    // denormalizationContext: [
    //     'groups' => 'axeStrategique_write'
    // ]
)]
class AxeStrategique
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups('axeStrategique_read')]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups('axeStrategique_read' , 'axeStrategique_write')]
    private ?string $titreAxe = null;

    #[ORM\Column(length: 255)]
    #[Groups('axeStrategique_read' , 'axeStrategique_write')]
    private ?string $objectifAxe = null;

    #[ORM\Column(length: 255 , nullable: true)]
    #[Groups('axeStrategique_read' , 'axeStrategique_write')]
    private ?string $pointStrategique = null;

    #[ORM\Column(type: Types::ARRAY, nullable: true)]
    #[Groups('axeStrategique_read' , 'axeStrategique_write')]
    private ?array $resultatAttendus = null;

    #[ORM\ManyToOne(inversedBy: 'axeStrategique')]
    #[Groups('axeStrategique_read' , 'axeStrategique_write')]
    private ?Utilisateur $utilisateur = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitreAxe(): ?string
    {
        return $this->titreAxe;
    }

    public function setTitreAxe(string $titreAxe): static
    {
        $this->titreAxe = $titreAxe;

        return $this;
    }

    public function getObjectifAxe(): ?string
    {
        return $this->objectifAxe;
    }

    public function setObjectifAxe(string $objectifAxe): static
    {
        $this->objectifAxe = $objectifAxe;

        return $this;
    }

    public function getPointStrategique(): ?string
    {
        return $this->pointStrategique;
    }

    public function setPointStrategique(string $pointStrategique): static
    {
        $this->pointStrategique = $pointStrategique;

        return $this;
    }

    public function getResultatAttendus(): ?array
    {
        return $this->resultatAttendus;
    }

    public function setResultatAttendus(?array $resultatAttendus): static
    {
        $this->resultatAttendus = $resultatAttendus;

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
