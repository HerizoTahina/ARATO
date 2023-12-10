<?php

namespace App\Repository;

use App\Entity\VoirEvenement;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<VoirEvenement>
 *
 * @method VoirEvenement|null find($id, $lockMode = null, $lockVersion = null)
 * @method VoirEvenement|null findOneBy(array $criteria, array $orderBy = null)
 * @method VoirEvenement[]    findAll()
 * @method VoirEvenement[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class VoirEvenementRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, VoirEvenement::class);
    }

//    /**
//     * @return VoirEvenement[] Returns an array of VoirEvenement objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('v')
//            ->andWhere('v.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('v.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?VoirEvenement
//    {
//        return $this->createQueryBuilder('v')
//            ->andWhere('v.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
