<?php

namespace App\Entity;

use App\Repository\AboutRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\Post;
use Doctrine\DBAL\Types\Types;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Delete;
use ApiPlatform\Metadata\ApiProperty;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\GetCollection;
use Symfony\Component\HttpFoundation\File\File;
use Vich\UploaderBundle\Mapping\Annotation as Vich;
use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\Common\Collections\ArrayCollection;

#[Vich\Uploadable]
#[ORM\Entity(repositoryClass: AboutRepository::class)]
#[ApiResource(
    operations: [
        new Get(),
        new GetCollection(),
        new Post(
            inputFormats: ['multipart' => ['multipart/form-data']],
            security: "is_granted('ROLE_USER')"
        ),
        new Delete(),
        new Patch()
    ],
    // normalizationContext: [
    //     'groups' => 'about_read'
    // ],
    denormalizationContext: [
        'groups' => 'about_write'
    ],
)]
class About
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups('about_read')]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups('about_write','about_read')]
    private ?string $fb = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups('about_write','about_read')]
    private ?string $Youtube = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups('about_write','about_read')]
    private ?string $Twitter = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups('about_write','about_read')]
    private ?string $Mail = null;

    #[ORM\Column(length: 255)]
    #[Groups('about_write','about_read')]
    private ?string $Adresse = null;

    #[ORM\Column(length: 255)]
    #[Groups('about_write','about_read')]
    private ?string $Nom = null;

    #[ORM\Column(length: 255)]
    #[Groups('about_write','about_read')]
    private ?string $Telephone = null;

    #[ApiProperty(types: ['https://schema.org/contentUrl'])]
    #[Groups(['about_read','utilisateur_read' , 'article_read','publicationThematique_read' , 'publicationEvenement_read' , 'domaine_read' , 'commentaireEvenement_read' , 'commentaireThematique_read' , 'voirEvenement_read' , 'voirThematique_read' , 'reagirEvenement_read' , 'reagirThematique_read' , 'article_read' , 'projet_read' , 'partenaire_read' , 'partenaireProjet_read' , 'feedback_read'])]
    public ?string $contentUrl = null;

    #[Vich\UploadableField(mapping: "media_object", fileNameProperty: "filePath")]
    #[Groups(['about_write'])]
    public ?File $file = null;

    #[ORM\Column(nullable: true)] 
    public ?string $filePath = null;

    #[ORM\Column(length: 255)]
    #[Groups('about_write','about_read')]
    private ?string $slogan = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFb(): ?string
    {
        return $this->fb;
    }

    public function setFb(?string $fb): static
    {
        $this->fb = $fb;

        return $this;
    }

    public function getYoutube(): ?string
    {
        return $this->Youtube;
    }

    public function setYoutube(?string $Youtube): static
    {
        $this->Youtube = $Youtube;

        return $this;
    }

    public function getTwitter(): ?string
    {
        return $this->Twitter;
    }

    public function setTwitter(?string $Twitter): static
    {
        $this->Twitter = $Twitter;

        return $this;
    }

    public function getMail(): ?string
    {
        return $this->Mail;
    }

    public function setMail(?string $Mail): static
    {
        $this->Mail = $Mail;

        return $this;
    }

    public function getAdresse(): ?string
    {
        return $this->Adresse;
    }

    public function setAdresse(string $Adresse): static
    {
        $this->Adresse = $Adresse;

        return $this;
    }

    public function getNom(): ?string
    {
        return $this->Nom;
    }

    public function setNom(string $Nom): static
    {
        $this->Nom = $Nom;

        return $this;
    }

    public function getTelephone(): ?string
    {
        return $this->Telephone;
    }

    public function setTelephone(string $Telephone): static
    {
        $this->Telephone = $Telephone;

        return $this;
    }

    public function getSlogan(): ?string
    {
        return $this->slogan;
    }

    public function setSlogan(string $slogan): static
    {
        $this->slogan = $slogan;

        return $this;
    }
}
