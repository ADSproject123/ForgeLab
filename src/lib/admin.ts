export const ADMIN_EMAIL = "xnxx@gmail.com";

export function isAdminEmail(email: string | null | undefined): boolean {
  return email?.toLowerCase() === ADMIN_EMAIL.toLowerCase();
}
