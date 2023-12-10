<?php

namespace App\EventSubscriber;

use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\HttpKernel\Event\ViewEvent;
use ApiPlatform\Symfony\EventListener\EventPriorities;
use App\Entity\AxeStrategique;
use App\Entity\Partenaire;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

final class EventPartenaire implements EventSubscriberInterface
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

        if(($activite instanceof Partenaire && $method === "POST") || ($activite instanceof AxeStrategique && $method === "POST"))
        {            
            $utilisateur = $this->security->getUser();
            $activite->setUtilisateur($utilisateur);
        }
    }
}