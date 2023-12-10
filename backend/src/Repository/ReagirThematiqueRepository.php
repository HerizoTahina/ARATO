<?php

namespace App\Repository;

use App\Entity\ReagirThematique;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<ReagirThematique>
 *
 * @method ReagirThematique|null find($id, $lockMode = null, $lockVersion = null)
 * @method ReagirThematique|null findOneBy(array $criteria, array $orderBy = null)
 * @method ReagirThematique[]    findAll()
 * @method ReagirThematique[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ReagirThematiqueRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ReagirThematique::class);
    }

//    /**
//     * @return ReagirThematique[] Returns an array of ReagirThematique objects
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

//    public function findOneBySomeField($value): ?ReagirThematique
//    {
//        return $this->createQueryBuilder('r')
//            ->andWhere('r.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
