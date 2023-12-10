<?php

namespace App\Repository;

use App\Entity\VoirThematique;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<VoirThematique>
 *
 * @method VoirThematique|null find($id, $lockMode = null, $lockVersion = null)
 * @method VoirThematique|null findOneBy(array $criteria, array $orderBy = null)
 * @method VoirThematique[]    findAll()
 * @method VoirThematique[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class VoirThematiqueRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, VoirThematique::class);
    }

//    /**
//     * @return VoirThematique[] Returns an array of VoirThematique objects
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

//    public function findOneBySomeField($value): ?VoirThematique
//    {
//        return $this->createQueryBuilder('v')
//            ->andWhere('v.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
