<?php

namespace App\Repository;

use App\Entity\ReagirEvenement;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<ReagirEvenement>
 *
 * @method ReagirEvenement|null find($id, $lockMode = null, $lockVersion = null)
 * @method ReagirEvenement|null findOneBy(array $criteria, array $orderBy = null)
 * @method ReagirEvenement[]    findAll()
 * @method ReagirEvenement[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ReagirEvenementRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ReagirEvenement::class);
    }

//    /**
//     * @return ReagirEvenement[] Returns an array of ReagirEvenement objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('r')
//            ->andWhere('r.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('r.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?ReagirEvenement
//    {
//        return $this->createQueryBuilder('r')
//            ->andWhere('r.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
