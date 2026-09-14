"use client";

import { useState, useRef } from "react";
import { submitRegistration } from "@/actions/registration";
import { Upload, ArrowRight, ArrowLeft, CheckCircle, X } from "lucide-react";

interface RegistrationFormProps {
    eventId: string;
    eventTitle: string;
    screeningQuestions: string[];
    onClose: () => void;
}

export default function RegistrationForm({
    eventId,
    eventTitle,
    screeningQuestions,
    onClose,
}: RegistrationFormProps) {
    const [step, setStep] = useState(1);
    const [submitting, setSubmitting] = useState(false);
    const [result, setResult] = useState<{ success: boolean; error: string | null } | null>(null);
    const [cvFile, setCvFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [formData, setFormData] = useState({
        full_name: "",
        email: "",
        academic_year: "",
        department: "",
        screening_answers: {} as Record<string, string>,
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    function updateField(field: string, value: string) {
        setFormData((prev) => ({ ...prev, [field]: value }));
        setErrors((prev) => {
            const next = { ...prev };
            delete next[field];
            return next;
        });
    }

    function updateScreening(question: string, value: string) {
        setFormData((prev) => ({
            ...prev,
            screening_answers: { ...prev.screening_answers, [question]: value },
        }));
    }

    function validateStep1(): boolean {
        const newErrors: Record<string, string> = {};
        if (!formData.full_name.trim()) newErrors.full_name = "Full name is required";
        if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
            newErrors.email = "Valid email is required";
        if (!formData.academic_year) newErrors.academic_year = "Academic year is required";
        if (!formData.department.trim()) newErrors.department = "Department is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    function handleNext() {
        if (step === 1 && validateStep1()) {
            setStep(2);
        } else if (step === 2) {
            setStep(3);
        }
    }

    async function handleSubmit() {
        setSubmitting(true);
        const res = await submitRegistration(eventId, {
            ...formData,
            cv_file: cvFile,
        });
        setResult(res);
        setSubmitting(false);
    }

    if (result?.success) {
        return (
            <div className="ds-card p-10! flex flex-col items-center gap-4 py-10 text-center">
                <CheckCircle size={48} className="text-[#4cff7f]" />
                <h3 className="font-space font-bold text-2xl leading-8">
                    Registration Submitted
                </h3>
                <p className="font-hanken text-sm leading-5 text-[#BDC8D1]">
                    Your application for <strong>{eventTitle}</strong> has been
                    received. We&apos;ll review it and get back to you soon.
                </p>
                <button onClick={onClose} className="ds-btn font-mono mt-2">
                    Close
                </button>
            </div>
        );
    }

    return (
        <div className="ds-card p-10! flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="font-space font-bold text-xl leading-7">
                        Register
                    </h3>
                    <span className="font-mono text-[12px] leading-3 tracking-widest text-[#BEC7D4] uppercase">
                        Step {step} of 3
                    </span>
                </div>
                <button onClick={onClose} className="text-[#BEC7D4] hover:text-[#E2E3DF] transition-colors">
                    <X size={20} />
                </button>
            </div>

            {/* Progress bar */}
            <div className="flex gap-1">
                {[1, 2, 3].map((s) => (
                    <div
                        key={s}
                        className="h-1 flex-1 rounded-full transition-colors"
                        style={{
                            background: s <= step ? "var(--color-primary)" : "var(--outline-variant)",
                        }}
                    />
                ))}
            </div>

            {result?.error && (
                <div
                    className="rounded border px-4 py-3 font-hanken text-sm"
                    style={{
                        borderColor: "var(--destructive)",
                        background: "rgba(255, 180, 171, 0.1)",
                        color: "var(--destructive)",
                    }}
                >
                    {result.error}
                </div>
            )}

            {/* Step 1: Basic Info */}
            {step === 1 && (
                <div className="flex flex-col gap-4">
                    <div>
                        <label className="ds-input-label font-mono" htmlFor="reg-name">
                            Full Name
                        </label>
                        <input
                            id="reg-name"
                            className="ds-input font-hanken"
                            placeholder="e.g. Ahmed Ali"
                            value={formData.full_name}
                            onChange={(e) => updateField("full_name", e.target.value)}
                        />
                        {errors.full_name && (
                            <p className="mt-1 font-mono text-[11px] text-[#ffb4ab]">{errors.full_name}</p>
                        )}
                    </div>
                    <div>
                        <label className="ds-input-label font-mono" htmlFor="reg-email">
                            University Email
                        </label>
                        <input
                            id="reg-email"
                            className="ds-input font-hanken"
                            type="email"
                            placeholder="you@university.edu"
                            value={formData.email}
                            onChange={(e) => updateField("email", e.target.value)}
                        />
                        {errors.email && (
                            <p className="mt-1 font-mono text-[11px] text-[#ffb4ab]">{errors.email}</p>
                        )}
                    </div>
                    <div>
                        <label className="ds-input-label font-mono" htmlFor="reg-year">
                            Academic Year
                        </label>
                        <select
                            id="reg-year"
                            className="ds-select font-hanken"
                            value={formData.academic_year}
                            onChange={(e) => updateField("academic_year", e.target.value)}
                        >
                            <option value="">Select year</option>
                            <option value="1st">1st Year</option>
                            <option value="2nd">2nd Year</option>
                            <option value="3rd">3rd Year</option>
                            <option value="4th">4th Year</option>
                            <option value="5th">5th Year</option>
                            <option value="graduate">Graduate</option>
                        </select>
                        {errors.academic_year && (
                            <p className="mt-1 font-mono text-[11px] text-[#ffb4ab]">{errors.academic_year}</p>
                        )}
                    </div>
                    <div>
                        <label className="ds-input-label font-mono" htmlFor="reg-dept">
                            Department
                        </label>
                        <input
                            id="reg-dept"
                            className="ds-input font-hanken"
                            placeholder="e.g. Computer Science"
                            value={formData.department}
                            onChange={(e) => updateField("department", e.target.value)}
                        />
                        {errors.department && (
                            <p className="mt-1 font-mono text-[11px] text-[#ffb4ab]">{errors.department}</p>
                        )}
                    </div>
                </div>
            )}

            {/* Step 2: Screening Questions */}
            {step === 2 && (
                <div className="flex flex-col gap-4">
                    {screeningQuestions.length === 0 ? (
                        <p className="font-hanken text-sm text-[#BDC8D1]">
                            No screening questions for this event.
                        </p>
                    ) : (
                        screeningQuestions.map((q, i) => (
                            <div key={i}>
                                <label className="ds-input-label font-mono">{q}</label>
                                <input
                                    className="ds-input font-hanken"
                                    placeholder="Your answer"
                                    value={formData.screening_answers[q] || ""}
                                    onChange={(e) => updateScreening(q, e.target.value)}
                                />
                            </div>
                        ))
                    )}
                </div>
            )}

            {/* Step 3: CV Upload */}
            {step === 3 && (
                <div className="flex flex-col gap-4">
                    <p className="font-hanken text-sm leading-5 text-[#BDC8D1]">
                        Upload your CV/Resume (PDF, DOC, or DOCX). Max 5MB.
                    </p>
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                        onChange={(e) => setCvFile(e.target.files?.[0] || null)}
                    />
                    <button
                        type="button"
                        className="ds-card p-6! flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer"
                        onClick={() => fileInputRef.current?.click()}
                    >
                        <Upload size={20} className="text-primary" />
                        <div className="text-left">
                            <div className="font-hanken text-sm font-medium text-[#E2E3DF]">
                                {cvFile ? cvFile.name : "Choose file"}
                            </div>
                            <div className="font-hanken text-xs text-[#BDC8D1]">
                                {cvFile
                                    ? `${(cvFile.size / 1024 / 1024).toFixed(2)} MB`
                                    : "PDF, DOC, or DOCX — Max 5MB"}
                            </div>
                        </div>
                    </button>
                    <p className="font-hanken text-xs text-[#BEC7D4]">
                        CV upload is optional. You can still submit without one.
                    </p>
                </div>
            )}

            {/* Navigation */}
            <div className="flex gap-3 pt-2">
                {step > 1 && (
                    <button
                        className="ds-btn-outline flex-1 justify-center font-mono"
                        onClick={() => setStep((s) => s - 1)}
                    >
                        <ArrowLeft size={16} /> Back
                    </button>
                )}
                {step < 3 ? (
                    <button
                        className="ds-btn flex-1 justify-center font-mono"
                        onClick={handleNext}
                    >
                        Next <ArrowRight size={16} />
                    </button>
                ) : (
                    <button
                        className="ds-btn flex-1 justify-center font-mono"
                        onClick={handleSubmit}
                        disabled={submitting}
                    >
                        {submitting ? "Submitting..." : "Submit"}
                    </button>
                )}
            </div>
        </div>
    );
}
