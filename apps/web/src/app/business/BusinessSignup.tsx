import MarketingLayout from "../../components/marketing/MarketingLayout";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const schema = z.object({
  company: z.string().min(2, "Nom de société trop court"),
  vat: z.string().min(6, "TVA invalide").optional().or(z.literal("")),
  email: z.string().email("Email invalide"),
  phone: z.string().min(6, "Téléphone invalide"),
  password: z.string().min(8, "Au moins 8 caractères"),
});
type FormData = z.infer<typeof schema>;

export default function BusinessSignup() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  const onSubmit = async (data: FormData) => {
    // TODO: brancher sur ton backend PHP /api/business/signup
    // await axios.post('/api/business/signup', data);
    console.log("signup:", data);
    setSubmitted(true);
  };

  return (
    <MarketingLayout>
      <section className="container my-5" style={{ maxWidth: 880 }}>
        <div className="card p-4 rounded-4 shadow-sm">
          <h1 className="h4 mb-3">Créer un compte entreprise</h1>

          {!submitted ? (
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Société</label>
                <input className={`form-control form-control-lg ${errors.company ? "is-invalid" : ""}`} placeholder="GoldenKey Corp" {...register("company")} />
                {errors.company && <div className="invalid-feedback">{errors.company.message}</div>}
              </div>

              <div className="col-md-6">
                <label className="form-label">TVA (optionnel)</label>
                <input className={`form-control form-control-lg ${errors.vat ? "is-invalid" : ""}`} placeholder="EU123456789" {...register("vat")} />
                {errors.vat && <div className="invalid-feedback">{errors.vat.message}</div>}
              </div>

              <div className="col-md-6">
                <label className="form-label">Email</label>
                <input type="email" className={`form-control form-control-lg ${errors.email ? "is-invalid" : ""}`} placeholder="corp@company.com" {...register("email")} />
                {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
              </div>

              <div className="col-md-6">
                <label className="form-label">Téléphone</label>
                <input className={`form-control form-control-lg ${errors.phone ? "is-invalid" : ""}`} placeholder="+33 1 23 45 67 89" {...register("phone")} />
                {errors.phone && <div className="invalid-feedback">{errors.phone.message}</div>}
              </div>

              <div className="col-md-6">
                <label className="form-label">Mot de passe</label>
                <input type="password" className={`form-control form-control-lg ${errors.password ? "is-invalid" : ""}`} placeholder="••••••••" {...register("password")} />
                {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
              </div>

              <div className="col-md-6 d-flex align-items-end">
                <button className="btn btn-primary btn-lg rounded-4 w-100" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Création…" : "Créer"}
                </button>
              </div>

              <div className="text-muted mt-2">
                Déjà un compte ? <Link to="/business/login">Connexion entreprise</Link>
              </div>
            </form>
          ) : (
            <div className="alert alert-success rounded-4 mb-0">
              <i className="bi bi-check-circle me-2"></i>
              Compte créé. Vérifiez votre email pour activer l’accès.
            </div>
          )}
        </div>
      </section>
    </MarketingLayout>
  );
}