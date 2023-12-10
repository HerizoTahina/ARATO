<?php

namespace App\Repository;

use App\Entity\CommentaireThematique;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<CommentaireThematique>
 *
 * @method CommentaireThematique|null find($id, $lockMode = null, $lockVersion = null)
 * @method CommentaireThematique|null findOneBy(array $criteria, array $orderBy = null)
 * @method CommentaireThematique[]    findAll()
 * @method CommentaireThematique[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CommentaireThematiqueRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CommentaireThematique::class);
    }

//    /**
//     * @return CommentaireThematique[] Returns an array of CommentaireThematique objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('c.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?CommentaireThematique
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
