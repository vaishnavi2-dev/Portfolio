export const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
export const WEB3FORMS_ACCESS_KEY = "199e6a4a-7781-4cda-aae0-ba8e068c5634";
export const MIN_MESSAGE_LENGTH = 10;

export type ContactInput = {
  name: string;
  email: string;
  subject: string;
  message: string;
  botcheck: boolean;
};

export type ContactErrors = Partial<Record<"name" | "email" | "message", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateContact(input: ContactInput): ContactErrors {
  const errors: ContactErrors = {};
  if (!input.name.trim()) errors.name = "Please enter your name.";
  const email = input.email.trim();
  if (!email) errors.email = "Please enter your email.";
  else if (!EMAIL_RE.test(email)) errors.email = "Please enter a valid email address.";
  const message = input.message.trim();
  if (!message) errors.message = "Please enter a message.";
  else if (message.length < MIN_MESSAGE_LENGTH)
    errors.message = `Message must be at least ${MIN_MESSAGE_LENGTH} characters.`;
  return errors;
}

export function buildContactPayload(input: ContactInput) {
  return {
    access_key: WEB3FORMS_ACCESS_KEY,
    name: input.name.trim(),
    email: input.email.trim(),
    subject: input.subject.trim(),
    message: input.message.trim(),
    from_name: "Portfolio Website",
    botcheck: input.botcheck,
  };
}

export async function sendContact(input: ContactInput): Promise<boolean> {
  const res = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(buildContactPayload(input)),
  });
  const data = (await res.json().catch(() => null)) as { success?: boolean } | null;
  return res.ok && data?.success === true;
}
