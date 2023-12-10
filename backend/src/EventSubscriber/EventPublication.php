<?php

namespace App\EventSubscriber;

use DateTime;
use App\Entity\PublicationEvenement;
use App\Entity\PublicationThematique;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\HttpKernel\Event\ViewEvent;
use ApiPlatform\Symfony\EventListener\EventPriorities;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

final class EventPublication implements EventSubscriberInterface
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
        $publication = $event->getControllerResult();
        $method = $event->getRequest()->getMethod();

        if(($publication instanceof PublicationEvenement && $method === "POST") || ($publication instanceof PublicationThematique && $method === "POST"))
        {            
            $utilisateur = $this->security->getUser();
            $publication->setUtilisateur($utilisateur);
            $publication->setDatePublication(new DateTime());
        }
    }
}