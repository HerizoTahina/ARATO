import { IUser } from "./IUser";

type IDomain = {
  id: number;
  titreDomaine: string;
};

type IReaction = {
  id: number;
  utilisateur: IUser;
};

type ICommentary = {
  id: number;
  contenuCommentaire: string;
  dateCreationCommentaire: string;
  utilisateur: IUser;
};

type IBlog = {
  id: 0;
  titre: string;
  description: string;
  datePublication: string;
  placeEvenement: string;
  utilisateur: IUser;
  domaine: IDomain;
  reagirEvenements: Array<IReaction>;
  voirEvenements: Array<IReaction>;
  commentaireEvenements: Array<ICommentary>;
  contentUrl: string;
  nombreCommentaire: number;
  nombreReaction: number;
  nombreVue: number;
};

export type {
    IBlog,
    ICommentary,
    IReaction,
    IDomain
}
