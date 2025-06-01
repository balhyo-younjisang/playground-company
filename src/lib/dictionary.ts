export interface Dictionary {
  footer: {
    company: string;
    description: string;
    contact: string;
    email: string;
    links: string;
    rights: string;
    address: string;
    ceo: string;
    registration: string;
  };
}

export async function getDictionary(locale: string): Promise<Dictionary> {
  return (await import(`@/dictionaries/${locale}.json`)).default;
} 