import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Reveal from "./Reveal";
import { subscribeSchema } from "../lib/schemas";


export default function SubscribeBlock() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({ 
    resolver: zodResolver(subscribeSchema), 
    defaultValues: { email: "" } 
});

  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 800));
    console.log("subscribe:", data);
    reset();
  };

  return (
    <Reveal className="mx-auto my-16 w-full max-w-[1100px] px-4">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-10 md:px-14 md:py-14">
        <span className="absolute -right-10 -top-10 h-44 w-44 animate-float rounded-full bg-orange-400/80" />
        <span className="absolute -bottom-12 right-40 h-28 w-28 animate-float rounded-full bg-yellow-300/70 [animation-delay:1.5s]" />
        <span className="absolute -left-8 bottom-0 h-24 w-24 animate-float rounded-full bg-white/20 [animation-delay:3s]" />

        <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <h3 className="text-3xl font-bold leading-tight text-white md:text-4xl">
            Subscribe to <br /> our Newsletter
          </h3>

          <form onSubmit={handleSubmit(onSubmit)} noValidate className="w-full md:max-w-md">
            <div className="flex overflow-hidden rounded-xl bg-white p-1 shadow-lg">
              <input
                type="email"
                placeholder="Your Email Address"
                {...register("email")}
                className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm outline-none"
              />
              <button
                disabled={isSubmitting}
                className="rounded-lg bg-ink px-6 text-sm font-semibold text-white transition hover:bg-ink/90 active:scale-95 disabled:opacity-60"
              >
                {isSubmitting ? "..." : "Subscribe"}
              </button>
            </div>
            {errors.email && <p className="mt-2 text-sm text-yellow-200">{errors.email.message}</p>}
            {isSubmitSuccessful && !errors.email && (
              <p className="mt-2 animate-fade-up text-sm text-white">Спасибо! Вы подписаны ✓</p>
            )}
          </form>
        </div>
      </div>
    </Reveal>
  );
}