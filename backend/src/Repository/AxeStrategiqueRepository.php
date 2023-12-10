<?php

namespace App\Repository;

use App\Entity\AxeStrategique;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<AxeStrategique>
 *
 * @method AxeStrategique|null find($id, $lockMode = null, $lockVersion = null)
 * @method AxeStrategique|null findOneBy(array $criteria, array $orderBy = null)
 * @method AxeStrategique[]    findAll()
 * @method AxeStrategique[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AxeStrategiqueRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, AxeStrategique::class);
    }

//    /**
//     * @return AxeStrategique[] Returns an array of AxeStrategique objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('a')
//            ->andWhere('a.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('a.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?AxeStrategique
//    {
//        return $this->createQueryBuilder('a')
//            ->andWhere('a.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
