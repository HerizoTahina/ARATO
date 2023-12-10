<?php

namespace App\Entity;

use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Delete;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use App\Repository\DomaineRepository;
use ApiPlatform\Metadata\GetCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: DomaineRepository::class)]
#[ApiResource(
    operations: [
        new Get(),
        new GetCollection(),
        new Post(),
        new Delete(),
        new Patch()
    ],
    normalizationContext: [
        'groups' => 'domaine_read'
    ],
    denormalizationContext: [
        'groups' => 'domaine_write'
    ]
)]
class Domaine
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['domaine_read' , 'publicationThematique_read' , 'publicationEvenement_read' , 'utilisateur_read'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['domaine_read' , 'domaine_write' , 'publicationThematique_read' , 'publicationEvenement_read' , 'utilisateur_read'])]
    private ?string $titreDomaine = null;

    #[ORM\OneToMany(mappedBy: 'domaine', targetEntity: PublicationEvenement::class)]
    #[Groups(['domaine_read'])]
    private Collection $publicationEvenements;

    #[ORM\OneToMany(mappedBy: 'domaine', targetEntity: PublicationThematique::class)]
    #[Groups(['domaine_read'])]
    private Collection $publicationThematiques;

    public function __construct()
    {
        $this->publicationEvenements = new ArrayCollection();
        $this->publicationThematiques = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitreDomaine(): ?string
    {
        return $this->titreDomaine;
    }

    public function setTitreDomaine(string $titreDomaine): static
    {
        $this->titreDomaine = $titreDomaine;

        return $this;
    }

    /**
     * @return Collection<int, PublicationEvenement>
     */
    public function getPublicationEvenements(): Collection
    {
        return $this->publicationEvenements;
    }

    public function addPublicationEvenement(PublicationEvenement $publicationEvenement): static
    {
        if (!$this->publicationEvenements->contains($publicationEvenement)) {
            $this->publicationEvenements->add($publicationEvenement);
            $publicationEvenement->setDomaine($this);
        }

        return $this;
    }

    public function removePublicationEvenement(PublicationEvenement $publicationEvenement): static
    {
        if ($this->publicationEvenements->removeElement($publicationEvenement)) {
            // set the owning side to null (unless already changed)
            if ($publicationEvenement->getDomaine() === $this) {
                $publicationEvenement->setDomaine(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, PublicationThematique>
     */
    public function getPublicationThematiques(): Collection
    {
        return $this->publicationThematiques;
    }

    public function addPublicationThematique(PublicationThematique $publicationThematique): static
    {
        if (!$this->publicationThematiques->contains($publicationThematique)) {
            $this->publicationThematiques->add($publicationThematique);
            $publicationThematique->setDomaine($this);
        }

        return $this;
    }

    public function removePublicationThematique(PublicationThematique $publicationThematique): static
    {
        if ($this->publicationThematiques->removeElement($publicationThematique)) {
            // set the owning side to null (unless already changed)
            if ($publicationThematique->getDomaine() === $this) {
                $publicationThematique->setDomaine(null);
            }
        }

        return $this;
    }
}
