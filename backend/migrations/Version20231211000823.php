<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20231211000823 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE actualite (id INT AUTO_INCREMENT NOT NULL, utilisateur_id INT DEFAULT NULL, titre_activite VARCHAR(255) NOT NULL, desc_activite VARCHAR(255) NOT NULL, date_creation DATE NOT NULL, impact_actualite VARCHAR(255) NOT NULL, INDEX IDX_54928197FB88E14F (utilisateur_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE article (id INT AUTO_INCREMENT NOT NULL, utilisateur_id INT DEFAULT NULL, titre_activite VARCHAR(255) NOT NULL, desc_activite VARCHAR(255) NOT NULL, date_creation DATE NOT NULL, article_source VARCHAR(255) NOT NULL, file_path VARCHAR(255) DEFAULT NULL, INDEX IDX_23A0E66FB88E14F (utilisateur_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE axe_strategique (id INT AUTO_INCREMENT NOT NULL, utilisateur_id INT DEFAULT NULL, titre_axe VARCHAR(255) NOT NULL, objectif_axe VARCHAR(255) NOT NULL, point_strategique VARCHAR(255) DEFAULT NULL, resultat_attendus LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:array)\', INDEX IDX_E5E4A5CFFB88E14F (utilisateur_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE commentaire_evenement (id INT AUTO_INCREMENT NOT NULL, utilisateur_id INT DEFAULT NULL, publication_evenement_id INT DEFAULT NULL, contenu_commentaire VARCHAR(255) NOT NULL, date_creation_commentaire DATE NOT NULL, INDEX IDX_84B1E729FB88E14F (utilisateur_id), INDEX IDX_84B1E7294E0336D6 (publication_evenement_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE commentaire_thematique (id INT AUTO_INCREMENT NOT NULL, utilisateur_id INT DEFAULT NULL, publication_thematique_id INT DEFAULT NULL, contenu_commentaire VARCHAR(255) NOT NULL, date_creation_commentaire DATE NOT NULL, INDEX IDX_82BCE728FB88E14F (utilisateur_id), INDEX IDX_82BCE728AC2AB389 (publication_thematique_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE domaine (id INT AUTO_INCREMENT NOT NULL, titre_domaine VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE feedback (id INT AUTO_INCREMENT NOT NULL, projet_id INT DEFAULT NULL, utilisateur_id INT DEFAULT NULL, nom_feedback VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, objet_mail VARCHAR(255) NOT NULL, appreciation VARCHAR(255) NOT NULL, point_de_vue VARCHAR(255) NOT NULL, INDEX IDX_D2294458C18272 (projet_id), INDEX IDX_D2294458FB88E14F (utilisateur_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE partenaire (id INT AUTO_INCREMENT NOT NULL, utilisateur_id INT DEFAULT NULL, nom_part VARCHAR(255) NOT NULL, contact_part VARCHAR(255) NOT NULL, INDEX IDX_32FFA373FB88E14F (utilisateur_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE partenaire_projet (id INT AUTO_INCREMENT NOT NULL, projet_id INT DEFAULT NULL, partenaire_id INT DEFAULT NULL, INDEX IDX_7B68257AC18272 (projet_id), INDEX IDX_7B68257A98DE13AC (partenaire_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE projet (id INT AUTO_INCREMENT NOT NULL, utilisateur_id INT DEFAULT NULL, titre_actvite VARCHAR(255) NOT NULL, desc_activite VARCHAR(1500) NOT NULL, date_creation DATE NOT NULL, statut_projet VARCHAR(255) NOT NULL, duree_projet VARCHAR(255) NOT NULL, file_path VARCHAR(255) DEFAULT NULL, INDEX IDX_50159CA9FB88E14F (utilisateur_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE publication_evenement (id INT AUTO_INCREMENT NOT NULL, utilisateur_id INT DEFAULT NULL, domaine_id INT DEFAULT NULL, titre VARCHAR(255) NOT NULL, description VARCHAR(255) NOT NULL, date_publication DATE NOT NULL, place_evenement VARCHAR(255) DEFAULT NULL, file_path VARCHAR(255) DEFAULT NULL, theme VARCHAR(255) DEFAULT NULL, type VARCHAR(255) DEFAULT NULL, INDEX IDX_17656E89FB88E14F (utilisateur_id), INDEX IDX_17656E894272FC9F (domaine_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE publication_thematique (id INT AUTO_INCREMENT NOT NULL, utilisateur_id INT DEFAULT NULL, domaine_id INT DEFAULT NULL, titre VARCHAR(255) NOT NULL, description VARCHAR(255) NOT NULL, slogan VARCHAR(255) NOT NULL, date_publication DATE NOT NULL, file_path VARCHAR(255) DEFAULT NULL, INDEX IDX_54F99049FB88E14F (utilisateur_id), INDEX IDX_54F990494272FC9F (domaine_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE reagir_evenement (id INT AUTO_INCREMENT NOT NULL, utilisateur_id INT DEFAULT NULL, publication_evenement_id INT DEFAULT NULL, INDEX IDX_111388C0FB88E14F (utilisateur_id), INDEX IDX_111388C04E0336D6 (publication_evenement_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE reagir_thematique (id INT AUTO_INCREMENT NOT NULL, utilisateur_id INT DEFAULT NULL, publication_thematique_id INT DEFAULT NULL, INDEX IDX_5BFF1F9BFB88E14F (utilisateur_id), INDEX IDX_5BFF1F9BAC2AB389 (publication_thematique_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE utilisateur (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(180) NOT NULL, roles JSON NOT NULL COMMENT \'(DC2Type:json)\', password VARCHAR(255) NOT NULL, nom VARCHAR(255) NOT NULL, file_path VARCHAR(255) DEFAULT NULL, UNIQUE INDEX UNIQ_1D1C63B3E7927C74 (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE voir_evenement (id INT AUTO_INCREMENT NOT NULL, utilisateur_id INT DEFAULT NULL, publication_evenement_id INT DEFAULT NULL, INDEX IDX_5C109281FB88E14F (utilisateur_id), INDEX IDX_5C1092814E0336D6 (publication_evenement_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE voir_thematique (id INT AUTO_INCREMENT NOT NULL, utilisateur_id INT DEFAULT NULL, publication_thematique_id INT DEFAULT NULL, INDEX IDX_5A696D87FB88E14F (utilisateur_id), INDEX IDX_5A696D87AC2AB389 (publication_thematique_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE actualite ADD CONSTRAINT FK_54928197FB88E14F FOREIGN KEY (utilisateur_id) REFERENCES utilisateur (id)');
        $this->addSql('ALTER TABLE article ADD CONSTRAINT FK_23A0E66FB88E14F FOREIGN KEY (utilisateur_id) REFERENCES utilisateur (id)');
        $this->addSql('ALTER TABLE axe_strategique ADD CONSTRAINT FK_E5E4A5CFFB88E14F FOREIGN KEY (utilisateur_id) REFERENCES utilisateur (id)');
        $this->addSql('ALTER TABLE commentaire_evenement ADD CONSTRAINT FK_84B1E729FB88E14F FOREIGN KEY (utilisateur_id) REFERENCES utilisateur (id)');
        $this->addSql('ALTER TABLE commentaire_evenement ADD CONSTRAINT FK_84B1E7294E0336D6 FOREIGN KEY (publication_evenement_id) REFERENCES publication_evenement (id)');
        $this->addSql('ALTER TABLE commentaire_thematique ADD CONSTRAINT FK_82BCE728FB88E14F FOREIGN KEY (utilisateur_id) REFERENCES utilisateur (id)');
        $this->addSql('ALTER TABLE commentaire_thematique ADD CONSTRAINT FK_82BCE728AC2AB389 FOREIGN KEY (publication_thematique_id) REFERENCES publication_thematique (id)');
        $this->addSql('ALTER TABLE feedback ADD CONSTRAINT FK_D2294458C18272 FOREIGN KEY (projet_id) REFERENCES projet (id)');
        $this->addSql('ALTER TABLE feedback ADD CONSTRAINT FK_D2294458FB88E14F FOREIGN KEY (utilisateur_id) REFERENCES utilisateur (id)');
        $this->addSql('ALTER TABLE partenaire ADD CONSTRAINT FK_32FFA373FB88E14F FOREIGN KEY (utilisateur_id) REFERENCES utilisateur (id)');
        $this->addSql('ALTER TABLE partenaire_projet ADD CONSTRAINT FK_7B68257AC18272 FOREIGN KEY (projet_id) REFERENCES projet (id)');
        $this->addSql('ALTER TABLE partenaire_projet ADD CONSTRAINT FK_7B68257A98DE13AC FOREIGN KEY (partenaire_id) REFERENCES partenaire (id)');
        $this->addSql('ALTER TABLE projet ADD CONSTRAINT FK_50159CA9FB88E14F FOREIGN KEY (utilisateur_id) REFERENCES utilisateur (id)');
        $this->addSql('ALTER TABLE publication_evenement ADD CONSTRAINT FK_17656E89FB88E14F FOREIGN KEY (utilisateur_id) REFERENCES utilisateur (id)');
        $this->addSql('ALTER TABLE publication_evenement ADD CONSTRAINT FK_17656E894272FC9F FOREIGN KEY (domaine_id) REFERENCES domaine (id)');
        $this->addSql('ALTER TABLE publication_thematique ADD CONSTRAINT FK_54F99049FB88E14F FOREIGN KEY (utilisateur_id) REFERENCES utilisateur (id)');
        $this->addSql('ALTER TABLE publication_thematique ADD CONSTRAINT FK_54F990494272FC9F FOREIGN KEY (domaine_id) REFERENCES domaine (id)');
        $this->addSql('ALTER TABLE reagir_evenement ADD CONSTRAINT FK_111388C0FB88E14F FOREIGN KEY (utilisateur_id) REFERENCES utilisateur (id)');
        $this->addSql('ALTER TABLE reagir_evenement ADD CONSTRAINT FK_111388C04E0336D6 FOREIGN KEY (publication_evenement_id) REFERENCES publication_evenement (id)');
        $this->addSql('ALTER TABLE reagir_thematique ADD CONSTRAINT FK_5BFF1F9BFB88E14F FOREIGN KEY (utilisateur_id) REFERENCES utilisateur (id)');
        $this->addSql('ALTER TABLE reagir_thematique ADD CONSTRAINT FK_5BFF1F9BAC2AB389 FOREIGN KEY (publication_thematique_id) REFERENCES publication_thematique (id)');
        $this->addSql('ALTER TABLE voir_evenement ADD CONSTRAINT FK_5C109281FB88E14F FOREIGN KEY (utilisateur_id) REFERENCES utilisateur (id)');
        $this->addSql('ALTER TABLE voir_evenement ADD CONSTRAINT FK_5C1092814E0336D6 FOREIGN KEY (publication_evenement_id) REFERENCES publication_evenement (id)');
        $this->addSql('ALTER TABLE voir_thematique ADD CONSTRAINT FK_5A696D87FB88E14F FOREIGN KEY (utilisateur_id) REFERENCES utilisateur (id)');
        $this->addSql('ALTER TABLE voir_thematique ADD CONSTRAINT FK_5A696D87AC2AB389 FOREIGN KEY (publication_thematique_id) REFERENCES publication_thematique (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE actualite DROP FOREIGN KEY FK_54928197FB88E14F');
        $this->addSql('ALTER TABLE article DROP FOREIGN KEY FK_23A0E66FB88E14F');
        $this->addSql('ALTER TABLE axe_strategique DROP FOREIGN KEY FK_E5E4A5CFFB88E14F');
        $this->addSql('ALTER TABLE commentaire_evenement DROP FOREIGN KEY FK_84B1E729FB88E14F');
        $this->addSql('ALTER TABLE commentaire_evenement DROP FOREIGN KEY FK_84B1E7294E0336D6');
        $this->addSql('ALTER TABLE commentaire_thematique DROP FOREIGN KEY FK_82BCE728FB88E14F');
        $this->addSql('ALTER TABLE commentaire_thematique DROP FOREIGN KEY FK_82BCE728AC2AB389');
        $this->addSql('ALTER TABLE feedback DROP FOREIGN KEY FK_D2294458C18272');
        $this->addSql('ALTER TABLE feedback DROP FOREIGN KEY FK_D2294458FB88E14F');
        $this->addSql('ALTER TABLE partenaire DROP FOREIGN KEY FK_32FFA373FB88E14F');
        $this->addSql('ALTER TABLE partenaire_projet DROP FOREIGN KEY FK_7B68257AC18272');
        $this->addSql('ALTER TABLE partenaire_projet DROP FOREIGN KEY FK_7B68257A98DE13AC');
        $this->addSql('ALTER TABLE projet DROP FOREIGN KEY FK_50159CA9FB88E14F');
        $this->addSql('ALTER TABLE publication_evenement DROP FOREIGN KEY FK_17656E89FB88E14F');
        $this->addSql('ALTER TABLE publication_evenement DROP FOREIGN KEY FK_17656E894272FC9F');
        $this->addSql('ALTER TABLE publication_thematique DROP FOREIGN KEY FK_54F99049FB88E14F');
        $this->addSql('ALTER TABLE publication_thematique DROP FOREIGN KEY FK_54F990494272FC9F');
        $this->addSql('ALTER TABLE reagir_evenement DROP FOREIGN KEY FK_111388C0FB88E14F');
        $this->addSql('ALTER TABLE reagir_evenement DROP FOREIGN KEY FK_111388C04E0336D6');
        $this->addSql('ALTER TABLE reagir_thematique DROP FOREIGN KEY FK_5BFF1F9BFB88E14F');
        $this->addSql('ALTER TABLE reagir_thematique DROP FOREIGN KEY FK_5BFF1F9BAC2AB389');
        $this->addSql('ALTER TABLE voir_evenement DROP FOREIGN KEY FK_5C109281FB88E14F');
        $this->addSql('ALTER TABLE voir_evenement DROP FOREIGN KEY FK_5C1092814E0336D6');
        $this->addSql('ALTER TABLE voir_thematique DROP FOREIGN KEY FK_5A696D87FB88E14F');
        $this->addSql('ALTER TABLE voir_thematique DROP FOREIGN KEY FK_5A696D87AC2AB389');
        $this->addSql('DROP TABLE actualite');
        $this->addSql('DROP TABLE article');
        $this->addSql('DROP TABLE axe_strategique');
        $this->addSql('DROP TABLE commentaire_evenement');
        $this->addSql('DROP TABLE commentaire_thematique');
        $this->addSql('DROP TABLE domaine');
        $this->addSql('DROP TABLE feedback');
        $this->addSql('DROP TABLE partenaire');
        $this->addSql('DROP TABLE partenaire_projet');
        $this->addSql('DROP TABLE projet');
        $this->addSql('DROP TABLE publication_evenement');
        $this->addSql('DROP TABLE publication_thematique');
        $this->addSql('DROP TABLE reagir_evenement');
        $this->addSql('DROP TABLE reagir_thematique');
        $this->addSql('DROP TABLE utilisateur');
        $this->addSql('DROP TABLE voir_evenement');
        $this->addSql('DROP TABLE voir_thematique');
    }
}
