import { useForm } from "react-hook-form";
import { contactSchema } from "../../shared/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import PageHero from "../../shared/ui/PageHero";
import Reveal from "../../shared/ui/Reveal";
import SubscribeBlock from "../../shared/ui/SubscribeBlock";
import { contactUs, fruito } from "../../shared/assets/img";


function Field({ label, error, children }) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm font-semibold text-ink">{label}</span>
      {children}
      {error && <span className="mt-1 block animate-fade-up text-xs text-red-500">{error}</span>}
    </label>
  );
}

const input =
  "w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-leaf focus:ring-4 focus:ring-leaf/20";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { fullName: "", email: "", company: "", subject: "", message: "" },
  });

  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 900));
    console.log("contact:", data);
    reset();
  };

  return (
    <>
      <PageHero title="Contact Us" image={contactUs} />

      <section className="mx-auto grid max-w-[1100px] items-center gap-10 px-4 py-16 md:grid-cols-2">
        <Reveal>
          <img src={fruito} alt="" className="w-full rounded-2xl object-cover shadow-lg" />
        </Reveal>
        <Reveal delay={150}>
          <h2 className="text-3xl font-bold text-ink">We'd love to talk about how we can work together.</h2>
          <p className="mt-4 text-sm leading-7 text-mute">
            Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-ink">
            <li><b>Message:</b> support@organick.com</li>
            <li><b>Contact us:</b> +1 (555) 123-4567</li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[800px] px-4 pb-8">
        <Reveal>
          <h2 className="mb-8 text-center text-3xl font-bold text-ink">Send us a message</h2>
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-5 md:grid-cols-2">
            <Field label="Full Name" error={errors.fullName?.message}>
              <input className={input} placeholder="Your name" {...register("fullName")} />
            </Field>
            <Field label="Email" error={errors.email?.message}>
              <input type="email" className={input} placeholder="you@mail.com" {...register("email")} />
            </Field>
            <Field label="Company" error={errors.company?.message}>
              <input className={input} placeholder="Company" {...register("company")} />
            </Field>
            <Field label="Subject" error={errors.subject?.message}>
              <input className={input} placeholder="Subject" {...register("subject")} />
            </Field>
            <div className="md:col-span-2">
              <Field label="Message" error={errors.message?.message}>
                <textarea rows={6} className={input} placeholder="Your message" {...register("message")} />
              </Field>
            </div>
            <div className="md:col-span-2">
              <button
                disabled={isSubmitting}
                className="rounded-lg bg-ink px-8 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg active:scale-95 disabled:opacity-60"
              >
                {isSubmitting ? "Отправка..." : "Send Message"}
              </button>
              {isSubmitSuccessful && (
                <span className="ml-4 animate-fade-up text-sm text-leaf">Сообщение отправлено ✓</span>
              )}
            </div>
          </form>
        </Reveal>
      </section>

      <SubscribeBlock />
    </>
  );
}