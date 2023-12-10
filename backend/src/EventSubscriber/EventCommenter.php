<?php

namespace App\EventSubscriber;

use DateTime;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\HttpKernel\Event\ViewEvent;
use ApiPlatform\Symfony\EventListener\EventPriorities;
use App\Entity\CommentaireEvenement;
use App\Entity\CommentaireThematique;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

final class EventCommenter implements EventSubscriberInterface
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
        $commenter = $event->getControllerResult();
        $method = $event->getRequest()->getMethod();

        if(($commenter instanceof CommentaireEvenement && $method === "POST") || ($commenter instanceof CommentaireThematique && $method === "POST"))
        {            
            $utilisateur = $this->security->getUser();
            $commenter->setUtilisateur($utilisateur);
            $commenter->setDateCreationCommentaire(new DateTime());
        }
    }
}