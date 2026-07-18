"use client";

import { useActionState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  submitContactForm,
  type ActionState,
} from "@/features/contact/actions";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/validations/forms";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const initialState: ActionState = {
  success: false,
  message: "",
};

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initialState,
  );

  const {
    register,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      website: "",
    },
  });

  useEffect(() => {
    if (state.success) {
      reset();
    }
  }, [state.success, reset]);

  return (
    <form action={formAction} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            autoComplete="name"
            placeholder="Your name"
            aria-invalid={!!errors.name || !!state.errors?.name}
            {...register("name")}
          />
          {(errors.name?.message || state.errors?.name?.[0]) && (
            <p className="text-sm text-[var(--semantic-error)]" role="alert">
              {errors.name?.message || state.errors?.name?.[0]}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            aria-invalid={!!errors.email || !!state.errors?.email}
            {...register("email")}
          />
          {(errors.email?.message || state.errors?.email?.[0]) && (
            <p className="text-sm text-[var(--semantic-error)]" role="alert">
              {errors.email?.message || state.errors?.email?.[0]}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <Input
          id="subject"
          placeholder="How can we help?"
          aria-invalid={!!errors.subject || !!state.errors?.subject}
          {...register("subject")}
        />
        {(errors.subject?.message || state.errors?.subject?.[0]) && (
          <p className="text-sm text-[var(--semantic-error)]" role="alert">
            {errors.subject?.message || state.errors?.subject?.[0]}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          placeholder="Tell us a little more..."
          aria-invalid={!!errors.message || !!state.errors?.message}
          {...register("message")}
        />
        {(errors.message?.message || state.errors?.message?.[0]) && (
          <p className="text-sm text-[var(--semantic-error)]" role="alert">
            {errors.message?.message || state.errors?.message?.[0]}
          </p>
        )}
      </div>

      <div className="hidden" aria-hidden="true">
        <Label htmlFor="website">Website</Label>
        <Input
          id="website"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      {state.message ? (
        <p
          className={`text-sm ${state.success ? "text-[var(--semantic-success)]" : "text-[var(--semantic-error)]"}`}
          role="status"
        >
          {state.message}
        </p>
      ) : null}

      <Button type="submit" size="lg" disabled={pending}>
        {pending ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
