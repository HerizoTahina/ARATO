<?php

namespace App\Repository;

use App\Entity\CommentaireEvenement;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<CommentaireEvenement>
 *
 * @method CommentaireEvenement|null find($id, $lockMode = null, $lockVersion = null)
 * @method CommentaireEvenement|null findOneBy(array $criteria, array $orderBy = null)
 * @method CommentaireEvenement[]    findAll()
 * @method CommentaireEvenement[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CommentaireEvenementRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CommentaireEvenement::class);
    }

//    /**
//     * @return CommentaireEvenement[] Returns an array of CommentaireEvenement objects
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

//    public function findOneBySomeField($value): ?CommentaireEvenement
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
