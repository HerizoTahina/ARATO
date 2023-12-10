<?php

namespace App\EventSubscriber;

use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\HttpKernel\Event\ViewEvent;
use ApiPlatform\Symfony\EventListener\EventPriorities;
use App\Entity\VoirEvenement;
use App\Entity\VoirThematique;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

final class EventVoir implements EventSubscriberInterface
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
        $voir = $event->getControllerResult();
        $method = $event->getRequest()->getMethod();

        if(($voir instanceof VoirEvenement && $method === "POST") || ($voir instanceof VoirThematique && $method === "POST"))
        {            
            $utilisateur = $this->security->getUser();
            $voir->setUtilisateur($utilisateur);
        }
    }
}