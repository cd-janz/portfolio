import { Show, createSignal } from 'solid-js';
import { sendContact, type ContactOutcome } from './send-contact';
import styles from './contact.module.css';

export interface ContactLabels {
  name: string; email: string; subject: string; message: string;
  send: string; sending: string; sent: string; error: string; rateLimited: string; invalid: string;
}

export default function ContactForm(props: { labels: ContactLabels }) {
  const [pending, setPending] = createSignal(false);
  const [outcome, setOutcome] = createSignal<ContactOutcome | null>(null);

  const onSubmit = async (event: SubmitEvent) => {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    setPending(true);
    const result = await sendContact(new FormData(form));
    setOutcome(result);
    if (result.status === 'sent') form.reset();
    setPending(false);
  };

  const fieldError = (name: string) => outcome()?.fieldErrors[name];
  const message = () => {
    const status = outcome()?.status;
    if (!status) return '';
    return { sent: props.labels.sent, invalid: props.labels.invalid, rate_limited: props.labels.rateLimited, error: props.labels.error }[status];
  };

  return (
    <form class={styles.form} onSubmit={onSubmit} novalidate>
      <div class={styles.row}>
        <label class={styles.field}>
          <span>{props.labels.name}</span>
          <input name="name" autocomplete="name" required minlength="2" maxlength="80" aria-invalid={!!fieldError('name')} />
        </label>
        <label class={styles.field}>
          <span>{props.labels.email}</span>
          <input name="email" type="email" autocomplete="email" required maxlength="120" aria-invalid={!!fieldError('email')} />
        </label>
      </div>
      <label class={styles.field}>
        <span>{props.labels.subject}</span>
        <input name="subject" maxlength="120" />
      </label>
      <label class={styles.field}>
        <span>{props.labels.message}</span>
        <textarea name="message" rows="6" required minlength="10" maxlength="4000" aria-invalid={!!fieldError('message')} />
      </label>

      {/* Honeypot: hidden from people and assistive tech, bots fill it. */}
      <input class={styles.trap} name="website" tabindex="-1" autocomplete="off" aria-hidden="true" />

      <div class={styles.footer}>
        <button class={styles.submit} type="submit" disabled={pending()}>
          {pending() ? props.labels.sending : props.labels.send}
        </button>
        <p class={styles.status} classList={{ [styles.ok]: outcome()?.status === 'sent', [styles.bad]: !!outcome() && outcome()!.status !== 'sent' }} role="status" aria-live="polite">
          <Show when={outcome()}>{message()}</Show>
        </p>
      </div>
    </form>
  );
}
