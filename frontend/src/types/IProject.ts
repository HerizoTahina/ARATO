import { IUser } from "./IUser";

type IProject = {
  id: number;
  titreActvite: string;
  descActivite: string;
  dateCreation: string;
  statutProjet: string;
  dureeProjet: string;
  utilisateur: IUser;
  // feedback: [],
  // partenaireProjets: [],
  filePath: string;
};

export type { IProject };
