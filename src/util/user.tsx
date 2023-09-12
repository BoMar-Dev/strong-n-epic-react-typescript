function getUsername(): string | null {
  return localStorage.getItem("username");
}
export { getUsername };
