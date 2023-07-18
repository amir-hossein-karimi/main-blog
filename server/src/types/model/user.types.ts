import { successMessage } from "../global";

interface oneUserInterface {
  email?: string;
  password?: string;
  token?: string;
  refreshToken?: string;
  code?: number;
  role?: string;
}

interface oneUserEntryInterface extends oneUserInterface {
  _id?: string;
}

interface userModelInterface {
  getAll: (search?: any) => Promise<oneUserInterface[]>;
  getOne: (
    data: oneUserEntryInterface
  ) => Promise<oneUserInterface | undefined>;
  getOneByID: (id: string) => Promise<oneUserInterface | undefined>;
  create: (data: oneUserInterface) => Promise<successMessage>;
  update: (
    findBy: oneUserEntryInterface,
    updateWith: oneUserInterface
  ) => Promise<successMessage>;
  delete: (data: oneUserEntryInterface) => Promise<successMessage>;
  bulkCreate: (data: oneUserInterface[]) => Promise<successMessage>;
}

export {
  userModelInterface,
  oneUserInterface,
  oneUserEntryInterface,
  successMessage,
};
