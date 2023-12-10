<?php

namespace App\Repository;

use App\Entity\PartenaireProjet;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PartenaireProjet>
 *
 * @method PartenaireProjet|null find($id, $lockMode = null, $lockVersion = null)
 * @method PartenaireProjet|null findOneBy(array $criteria, array $orderBy = null)
 * @method PartenaireProjet[]    findAll()
 * @method PartenaireProjet[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PartenaireProjetRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PartenaireProjet::class);
    }

//    /**
//     * @return PartenaireProjet[] Returns an array of PartenaireProjet objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('p.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?PartenaireProjet
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
