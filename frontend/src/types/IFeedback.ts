import { IProject } from "./IProject";
import { IUser } from "./IUser";

type IFeedback = {
  id: number;
  nomFeedback: string;
  email: string;
  objetMail: string;
  appreciation: string;
  pointDeVue: string;
  projet: IProject;
  utilisateur: IUser;
};

export type { IFeedback };
