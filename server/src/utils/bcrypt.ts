import bcrypt from "bcrypt";

const saltRounds: number = 10;

const hashString = async (string: string): Promise<string> => {
  const hashedString = await bcrypt.hash(string, saltRounds);
  return hashedString;
};

const compareStringWithHash = async (
  string: string,
  hash: string
): Promise<boolean> => {
  const isEqual = await bcrypt.compare(string, hash);
  return isEqual;
};

export { hashString, compareStringWithHash };
