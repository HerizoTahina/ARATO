<?php

namespace App\EventSubscriber;

use DateTime;
use App\Entity\PublicationEvenement;
use App\Entity\PublicationThematique;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\HttpKernel\Event\ViewEvent;
use ApiPlatform\Symfony\EventListener\EventPriorities;
use App\Entity\Actualite;
use App\Entity\Article;
use App\Entity\Projet;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

final class EventActivite implements EventSubscriberInterface
{   
    private $security;

    public function __construct(Security $security)
    {
        $this->security = $security;
    }

    public static function getSubscribedEvents()
    {
        return [
            KernelEvents::VIEW => ["setUser", EventPriorities::PRE_WRITE],
        ];
    }

    public function setUser(ViewEvent $event)
    {
        $activite = $event->getControllerResult();
        $method = $event->getRequest()->getMethod();

        if(($activite instanceof Article && $method === "POST") || ($activite instanceof Actualite && $method === "POST") || ($activite instanceof Projet && $method === "POST"))
        {            
            $utilisateur = $this->security->getUser();
            $activite->setUtilisateur($utilisateur);
            $activite->setDateCreation(new DateTime());
        }
    }
}