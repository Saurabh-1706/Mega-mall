"use client";

import { useState, useRef } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function AvailabilityForm() {
  const [companyName, setCompanyName] = useState("");
  const [requirement, setRequirement] = useState("PREMIUM RETAIL");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [companyError, setCompanyError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  function validate(): boolean {
    if (companyName.trim() === "") {
      setCompanyError("Company name is required.");
      return false;
    }
    setCompanyError("");
    return true;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");

    // Simulate an async API call (replace with real endpoint when ready)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setCompanyName("");
      setRequirement("PREMIUM RETAIL");
    } catch {
      setStatus("error");
    }
  }

  function handleReset() {
    setStatus("idle");
    setCompanyError("");
    setCompanyName("");
    setRequirement("PREMIUM RETAIL");
  }

  if (status === "success") {
    return (
      <div
        id="availability-success"
        className="bg-surface-container-high p-12 flex flex-col items-center justify-center gap-6 text-center min-h-[240px]"
      >
        <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center">
          <span className="material-symbols-outlined text-primary text-3xl">check</span>
        </div>
        <div className="space-y-2">
          <p className="font-headline text-2xl text-on-surface">Request Received</p>
          <p className="text-on-surface-variant text-sm max-w-xs">
            Our leasing team will contact you within 2 business days with your availability brief.
          </p>
        </div>
        <button
          id="availability-reset-btn"
          onClick={handleReset}
          className="border border-white/20 px-8 py-3 font-bold uppercase tracking-widest text-xs text-white/60 hover:bg-white/10 transition-colors"
        >
          Submit Another
        </button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      id="availability-form"
      onSubmit={handleSubmit}
      noValidate
      className="bg-surface-container-high p-12 space-y-12"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
        {/* Company Name */}
        <div className="space-y-4">
          <label
            htmlFor="company-name"
            className="font-label text-primary uppercase text-[10px] tracking-[0.2em] font-bold"
          >
            Your Vision
          </label>
          <input
            id="company-name"
            name="companyName"
            type="text"
            maxLength={120}
            required
            value={companyName}
            onChange={(e) => {
              setCompanyName(e.target.value);
              if (companyError && e.target.value.trim() !== "") {
                setCompanyError("");
              }
            }}
            className={`w-full bg-transparent border-0 border-b py-4 focus:ring-0 focus:outline-none placeholder:text-white/20 text-white font-label transition-colors ${
              companyError
                ? "border-red-500 focus:border-red-400"
                : "border-outline-variant/30 focus:border-primary"
            }`}
            placeholder="COMPANY NAME"
            aria-describedby={companyError ? "company-name-error" : undefined}
            aria-invalid={!!companyError}
            disabled={status === "loading"}
          />
          {companyError && (
            <p
              id="company-name-error"
              role="alert"
              className="text-red-400 text-[10px] uppercase tracking-widest font-label"
            >
              {companyError}
            </p>
          )}
        </div>

        {/* Requirement Dropdown */}
        <div className="space-y-4">
          <label
            htmlFor="requirement-select"
            className="font-label text-primary uppercase text-[10px] tracking-[0.2em] font-bold"
          >
            The Requirement
          </label>
          <select
            id="requirement-select"
            name="requirement"
            value={requirement}
            onChange={(e) => setRequirement(e.target.value)}
            className="w-full bg-transparent border-0 border-b border-outline-variant/30 py-4 focus:ring-0 focus:border-primary focus:outline-none text-white font-label appearance-none cursor-pointer transition-colors"
            disabled={status === "loading"}
          >
            <option value="PREMIUM RETAIL">PREMIUM RETAIL</option>
            <option value="FOOD & BEVERAGE">FOOD &amp; BEVERAGE</option>
            <option value="OFFICE SPACE">OFFICE SPACE</option>
            <option value="POP-UP / SHORT TERM">POP-UP / SHORT TERM</option>
          </select>
        </div>
      </div>

      {/* Error banner */}
      {status === "error" && (
        <p
          id="form-error-banner"
          role="alert"
          className="text-red-400 text-xs uppercase tracking-widest font-label text-center"
        >
          Something went wrong. Please try again.
        </p>
      )}

      {/* Submit Button */}
      <button
        id="availability-submit-btn"
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-primary text-on-primary py-6 font-bold uppercase tracking-[0.3em] text-sm hover:brightness-110 transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
      >
        {status === "loading" ? (
          <>
            <span
              className="w-4 h-4 border-2 border-on-primary/30 border-t-on-primary rounded-full animate-spin"
              aria-hidden="true"
            />
            Submitting…
          </>
        ) : (
          "Request Availability Brief"
        )}
      </button>
    </form>
  );
}
