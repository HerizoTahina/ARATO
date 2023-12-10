<?php

namespace App\EventSubscriber;

use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\HttpKernel\Event\ViewEvent;
use ApiPlatform\Symfony\EventListener\EventPriorities;
use App\Entity\ReagirEvenement;
use App\Entity\ReagirThematique;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

final class EventReagir implements EventSubscriberInterface
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
        $reagir = $event->getControllerResult();
        $method = $event->getRequest()->getMethod();

        if(($reagir instanceof ReagirEvenement && $method === "POST") || ($reagir instanceof ReagirThematique && $method === "POST"))
        {            
            $utilisateur = $this->security->getUser();
            $reagir->setUtilisateur($utilisateur);
        }
    }
}