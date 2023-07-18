import { hashString } from "./bcrypt";

interface userInterface {
  password: string;
  email: string;
  role?: string;
}

const hashBulkUserPassword = (users: userInterface[]) => {
  return new Promise((resolve) => {
    let newUsers: userInterface[] = [];

    users.forEach(async (user: userInterface) => {
      const hashedPassword = await hashString(user.password);

      newUsers.push({
        ...user,
        password: hashedPassword,
      });
    });

    let counter = 1;
    const interval = setInterval(() => {
      if (counter === 10 || newUsers.length === users.length) {
        clearInterval(interval);
        resolve(newUsers);
      }
      counter++;
    }, 500);
  });
};

export default hashBulkUserPassword;
