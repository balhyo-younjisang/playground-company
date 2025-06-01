export interface Dictionary {
  terms: {
    title: string;
    description: string;
    sections: {
      acceptance: {
        title: string;
        content: string;
      };
      services: {
        title: string;
        content: string;
      };
      intellectual: {
        title: string;
        content: string;
      };
      privacy: {
        title: string;
        content: string;
      };
      liability: {
        title: string;
        content: string;
      };
      changes: {
        title: string;
        content: string;
      };
      contact: {
        title: string;
        content: string;
      };
    };
  };
  privacy: {
    title: string;
    description: string;
    sections: {
      collection: {
        title: string;
        content: string;
      };
      usage: {
        title: string;
        content: string;
      };
      protection: {
        title: string;
        content: string;
      };
      cookies: {
        title: string;
        content: string;
      };
      rights: {
        title: string;
        content: string;
      };
      changes: {
        title: string;
        content: string;
      };
      contact: {
        title: string;
        content: string;
      };
    };
  };
  refund: {
    title: string;
    description: string;
    sections: {
      general: {
        title: string;
        content: string;
      };
      eligibility: {
        title: string;
        content: string;
      };
      process: {
        title: string;
        content: string;
      };
      exceptions: {
        title: string;
        content: string;
      };
      contact: {
        title: string;
        content: string;
      };
    };
  };
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