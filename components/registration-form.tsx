"use client";

import { useState, useRef, useMemo } from "react";
import { Upload, ArrowRight, ArrowLeft, CheckCircle, X } from "lucide-react";
import { submitRegistration } from "@/actions/registration";
import { Button } from "./ui/button";

type FieldType = "text" | "email" | "select";

interface FieldConfig {
    key: string;
    label: string;
    placeholder: string;
    type: FieldType;
    required: boolean;
    options?: { value: string; label: string }[];
    validate?: (value: string) => string | null;
}

interface RegistrationFormProps {
    eventId: string;
    eventTitle: string;
    screeningQuestions: ScreeningQuestion[];
    onClose: () => void;
}

const FIELDS_PER_STEP = 3;

function validateEmail(value: string): string | null {
    if (!value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
        return "Valid email is required";
    return null;
}

function validateRequired(key: string, label: string) {
    return (value: string): string | null => {
        if (!value.trim()) return `${label} is required`;
        return null;
    };
}

const FIELD_CONFIG: FieldConfig[] = [
    {
        key: "full_name",
        label: "Full Name",
        placeholder: "e.g. Ahmed Ali",
        type: "text",
        required: true,
        validate: validateRequired("full_name", "Full Name"),
    },
    {
        key: "email",
        label: "Email Address",
        placeholder: "you@mail.com",
        type: "email",
        required: true,
        validate: validateEmail,
    },
    {
        key: "phone_number",
        label: "Phone Number",
        placeholder: "01*********",
        type: "text",
        required: true,
        validate: validateRequired("phone_number", "Phone Number"),
    },
    {
        key: "university",
        label: "University",
        placeholder: "e.g. Fayoum University",
        type: "text",
        required: true,
        validate: validateRequired("university", "University"),
    },
    {
        key: "faculty",
        label: "Faculty",
        placeholder: "e.g. Computer Science and Engineering",
        type: "text",
        required: true,
        validate: validateRequired("faculty", "Faculty"),
    },
    {
        key: "department",
        label: "Department",
        placeholder: "e.g. Computer Science",
        type: "text",
        required: true,
        validate: validateRequired("department", "Department"),
    },
    {
        key: "academic_year",
        label: "Academic Year",
        placeholder: "Select year",
        type: "select",
        required: true,
        options: [
            { value: "1st", label: "1st Year" },
            { value: "2nd", label: "2nd Year" },
            { value: "3rd", label: "3rd Year" },
            { value: "4th", label: "4th Year" },
            { value: "5th", label: "5th Year" },
            { value: "graduate", label: "Graduate" },
        ],
        validate: (v) => (!v ? "Academic year is required" : null),
    },
    {
        key: "facebook_profile",
        label: "Facebook Profile",
        placeholder: "e.g. facebook.com/username",
        type: "text",
        required: false,
    },
    {
        key: "linkedin_profile",
        label: "LinkedIn Profile",
        placeholder: "e.g. linkedin.com/in/username",
        type: "text",
        required: false,
    },
];

function chunk<T>(arr: T[], size: number): T[][] {
    const chunks: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
    }
    return chunks;
}

export default function RegistrationForm({
    eventId,
    eventTitle,
    screeningQuestions,
    onClose,
}: RegistrationFormProps) {
    const fieldChunks = useMemo(() => chunk(FIELD_CONFIG, FIELDS_PER_STEP), []);

    const totalSteps =
        fieldChunks.length + (screeningQuestions?.length > 0 ? 1 : 0) + 1;
    const screeningStepIndex = fieldChunks.length;
    const cvStepIndex = totalSteps;

    const [step, setStep] = useState(1);
    const [submitting, setSubmitting] = useState(false);
    const [result, setResult] = useState<{
        success: boolean;
        error: string | null;
    } | null>(null);
    const [cvFile, setCvFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    interface FormState {
        [key: string]: string | Record<string, string>;
        screening_answers: Record<string, string>;
    }

    const [formData, setFormData] = useState<FormState>(() => {
        const initial: Record<string, string> = {};
        for (const f of FIELD_CONFIG) {
            initial[f.key] = "";
        }
        return { ...initial, screening_answers: {} as Record<string, string> };
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

    function validateCurrentStep(): boolean {
        if (step <= fieldChunks.length) {
            const fields = fieldChunks[step - 1];
            const newErrors: Record<string, string> = {};
            for (const field of fields) {
                if (field.validate) {
                    const err = field.validate(
                        (formData as Record<string, string>)[field.key],
                    );
                    if (err) newErrors[field.key] = err;
                }
            }
            setErrors(newErrors);
            return Object.keys(newErrors).length === 0;
        }

        if (step === screeningStepIndex + 1 && screeningQuestions.length > 0) {
            const newErrors: Record<string, string> = {};
            for (const q of screeningQuestions) {
                if (
                    q.is_required &&
                    !(formData.screening_answers[q.question_text] || "").trim()
                ) {
                    newErrors[q.question_text] = "This answer is required";
                }
            }
            setErrors(newErrors);
            return Object.keys(newErrors).length === 0;
        }

        return true;
    }

    function handleNext() {
        if (validateCurrentStep()) {
            setStep((s) => Math.min(s + 1, totalSteps));
        }
    }

    function handleBack() {
        setErrors({});
        setStep((s) => Math.max(s - 1, 1));
    }

    async function handleSubmit() {
        setSubmitting(true);
        const res = await submitRegistration(eventId, {
            full_name: formData.full_name as string,
            email: formData.email as string,
            academic_year: formData.academic_year as string,
            department: formData.department as string,
            phone_number: (formData.phone_number as string) || undefined,
            university: (formData.university as string) || undefined,
            faculty: (formData.faculty as string) || undefined,
            facebook_profile:
                (formData.facebook_profile as string) || undefined,
            linkedin_profile:
                (formData.linkedin_profile as string) || undefined,
            screening_answers: formData.screening_answers,
            cv_file: cvFile,
        });
        setResult(res);
        setSubmitting(false);
        window.location.reload();
    }

    function renderField(field: FieldConfig) {
        const value = formData[field.key] as string;

        if (field.type === "select") {
            return (
                <div key={field.key}>
                    <label
                        className="ds-input-label font-mono"
                        htmlFor={`reg-${field.key}`}
                    >
                        {field.label}
                        {field.required && (
                            <span className="text-destructive">{" "}*</span>
                        )}
                    </label>
                    <select
                        id={`reg-${field.key}`}
                        className="ds-select font-hanken"
                        value={value}
                        onChange={(e) => updateField(field.key, e.target.value)}
                    >
                        <option value="">{field.placeholder}</option>
                        {field.options?.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                                {opt.label}
                            </option>
                        ))}
                    </select>
                    {errors[field.key] && (
                        <p className="mt-1 font-mono text-[11px] text-[#ffb4ab]">
                            {errors[field.key]}
                        </p>
                    )}
                </div>
            );
        }

        return (
            <div key={field.key}>
                <label
                    className="ds-input-label font-mono"
                    htmlFor={`reg-${field.key}`}
                >
                    {field.label}
                    {field.required && (
                        <span className="text-destructive">{" "}*</span>
                    )}
                </label>
                <input
                    id={`reg-${field.key}`}
                    className="ds-input font-hanken"
                    type={field.type}
                    placeholder={field.placeholder}
                    value={value}
                    onChange={(e) => updateField(field.key, e.target.value)}
                />
                {errors[field.key] && (
                    <p className="mt-1 font-mono text-[11px] text-[#ffb4ab]">
                        {errors[field.key]}
                    </p>
                )}
            </div>
        );
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
                        Step {step} of {totalSteps}
                    </span>
                </div>
                <button
                    onClick={onClose}
                    className="text-[#BEC7D4] hover:text-[#E2E3DF] transition-colors"
                >
                    <X size={20} />
                </button>
            </div>

            {/* Progress bar */}
            <div className="flex gap-1">
                {Array.from({ length: totalSteps }, (_, i) => i + 1).map(
                    (s) => (
                        <div
                            key={s}
                            className="h-1 flex-1 rounded-full transition-colors"
                            style={{
                                background:
                                    s <= step
                                        ? "var(--color-primary)"
                                        : "var(--outline-variant)",
                            }}
                        />
                    ),
                )}
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

            {/* Field steps */}
            {step <= fieldChunks.length && (
                <div className="flex flex-col gap-4">
                    {fieldChunks[step - 1].map((field) => renderField(field))}
                </div>
            )}

            {/* Screening questions step */}
            {step === screeningStepIndex + 1 &&
                screeningQuestions.length > 0 && (
                    <div className="flex flex-col gap-4">
                        {screeningQuestions.map((q, i) => (
                            <div key={i}>
                                <label className="ds-input-label font-mono leading-6!">
                                    {q.question_text}
                                    {q.is_required && (
                                        <span className="text-[var(--destructive)]">
                                            *
                                        </span>
                                    )}
                                </label>
                                {q.type === "mcq" ? (
                                    <select
                                        className="ds-select font-hanken"
                                        value={
                                            formData.screening_answers[
                                                q.question_text
                                            ] || ""
                                        }
                                        onChange={(e) =>
                                            updateScreening(
                                                q.question_text,
                                                e.target.value,
                                            )
                                        }
                                    >
                                        <option value="">
                                            Select an option
                                        </option>
                                        {q.options?.map((opt) => (
                                            <option key={opt} value={opt}>
                                                {opt}
                                            </option>
                                        ))}
                                    </select>
                                ) : (
                                    <input
                                        className="ds-input font-hanken placeholder:text-sm!"
                                        placeholder="Your answer"
                                        value={
                                            formData.screening_answers[
                                                q.question_text
                                            ] || ""
                                        }
                                        onChange={(e) =>
                                            updateScreening(
                                                q.question_text,
                                                e.target.value,
                                            )
                                        }
                                    />
                                )}
                                {errors[q.question_text] && (
                                    <p className="mt-1 font-mono text-[11px] text-[#ffb4ab]">
                                        {errors[q.question_text]}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                )}

            {/* CV upload step */}
            {step === cvStepIndex && (
                <div className="flex flex-col gap-4">
                    <p className="font-hanken text-sm leading-5 text-[#BDC8D1]">
                        Upload your CV/Resume (PDF, DOC, or DOCX). Max 5MB.
                    </p>
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                        onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (!file) {
                                setCvFile(null);
                                return;
                            }

                            const MAX_FILE_SIZE = 5 * 1024 * 1024;
                            if (file.size > MAX_FILE_SIZE) {
                                alert(
                                    "File size exceeds 5MB limit. Please upload a smaller file.",
                                );
                                setCvFile(null);
                                if (fileInputRef.current)
                                    fileInputRef.current.value = "";
                                return;
                            }

                            const allowedExtensions = ["pdf", "doc", "docx"];
                            const fileExt = file.name
                                .split(".")
                                .pop()
                                ?.toLowerCase();
                            if (
                                !fileExt ||
                                !allowedExtensions.includes(fileExt)
                            ) {
                                alert(
                                    "Invalid file type. Only PDF, DOC, and DOCX files are allowed.",
                                );
                                setCvFile(null);
                                if (fileInputRef.current)
                                    fileInputRef.current.value = "";
                                return;
                            }

                            setCvFile(file);
                        }}
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
                    <Button
                        className="ds-btn-outline flex-1 justify-center font-mono"
                        onClick={handleBack}
                    >
                        <ArrowLeft size={16} /> Back
                    </Button>
                )}
                {step < totalSteps ? (
                    <Button
                        className="ds-btn flex-1 justify-center font-mono"
                        onClick={handleNext}
                    >
                        Next <ArrowRight size={16} />
                    </Button>
                ) : (
                    <Button
                        className="ds-btn flex-1 justify-center font-mono"
                        onClick={handleSubmit}
                        disabled={submitting}
                    >
                        {submitting ? "Submitting..." : "Submit"}
                    </Button>
                )}
            </div>
        </div>
    );
}
