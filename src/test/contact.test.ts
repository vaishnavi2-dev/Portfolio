import { describe, expect, it } from "vitest";
import { buildContactPayload, validateContact, type ContactInput } from "@/lib/contact";

const valid: ContactInput = {
  name: "Asha",
  email: "asha@example.com",
  subject: "",
  message: "Hello there, let's talk.",
  botcheck: false,
};

describe("contact form rules", () => {
  it("requires a name", () => {
    expect(validateContact({ ...valid, name: "  " }).name).toBeDefined();
  });

  it("rejects an invalid email", () => {
    expect(validateContact({ ...valid, email: "not-an-email" }).email).toBeDefined();
  });

  it("requires a message of at least 10 characters", () => {
    expect(validateContact({ ...valid, message: "123456789" }).message).toBeDefined();
    expect(validateContact({ ...valid, message: "1234567890" }).message).toBeUndefined();
  });

  it("allows an empty subject", () => {
    expect(validateContact(valid)).toEqual({});
  });

  it("sends from_name 'Portfolio Website'", () => {
    expect(buildContactPayload(valid).from_name).toBe("Portfolio Website");
  });
});
