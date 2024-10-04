type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>) {
  console.log(initialValues);
}

createOrUpdateUser({
  email: "name@mail.com",
  password: "password456",
});
