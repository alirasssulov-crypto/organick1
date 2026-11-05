import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import PageHero from "../../shared/ui/PageHero";
import Reveal from "../../shared/ui/Reveal";
import SubscribeBlock from "../../shared/ui/SubscribeBlock";
import { vegetables } from "../../shared/assets/img";
import { passwordSchema } from "../../shared/lib/schemas";

const SECRET = "organick"; // демо-пароль

export default function ProtectedPage() {
  const [unlocked, setUnlocked] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(passwordSchema), defaultValues: { password: "" } });

  const onSubmit = async ({ password }) => {
    await new Promise((r) => setTimeout(r, 500));
    if (password === SECRET) setUnlocked(true);
    else setError("password", { message: "Неверный пароль" });
  };

  return (
    <>
      <PageHero title="Protected Page" />
      <section className="mx-auto max-w-[520px] px-4 py-16">
        <Reveal>
          <div className="flex items-center gap-6 rounded-2xl bg-white p-6 shadow-lg">
            <img src={vegetables} alt="" className="hidden h-32 w-24 rounded-lg object-cover sm:block" />
            {unlocked ? (
              <p className="animate-fade-up font-semibold text-leaf">Доступ открыт ✓ Здесь защищённый контент.</p>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex-1">
                <label className="text-sm font-semibold text-ink">Password</label>
                <input
                  type="password"
                  placeholder="Enter password"
                  {...register("password")}
                  className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-leaf focus:ring-4 focus:ring-leaf/20"
                />
                {errors.password && (
                  <p className="mt-1 animate-fade-up text-xs text-red-500">{errors.password.message}</p>
                )}
                <button
                  disabled={isSubmitting}
                  className="mt-3 w-full rounded-lg bg-ink py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg active:scale-95 disabled:opacity-60"
                >
                  {isSubmitting ? "..." : "Submit →"}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </section>
      <SubscribeBlock />
    </>
  );
}