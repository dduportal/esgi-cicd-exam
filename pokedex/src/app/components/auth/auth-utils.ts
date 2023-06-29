export default function errorHandling(errorMessage : string) {
  switch (errorMessage) {
    case "auth/invalid-email":
    case "auth/wrong-password":
    case "auth/user-not-found":
    {
      return "Wrong email address or password.";
    }
    default:
    {
      return "Unexpected Error";
    }
  }
}
