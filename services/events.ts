import { createClient } from "@/lib/supabase/server";

export type EventWithQuestions = Event & {
    screening_questions: ScreeningQuestion[];
    timeline: Timeline[];
};

export async function getEvents(): Promise<Event[] | null> {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from("events")
        .select("*")
        .order("from_date", { ascending: false });

    if (error) {
        console.error("Error occured:", error.message);
        return null;
    }

    return data as Event[];
}

export async function getEventBySlug(
    slug: string,
): Promise<EventWithQuestions | null> {
    const supabase = await createClient();

    const { data: event, error } = await supabase
        .from("events")
        .select("*")
        .eq("slug", slug)
        .maybeSingle();

    if (error) {
        console.error("Error occured:", error.message);
        return null;
    }

    return event as EventWithQuestions | null;
}

export async function getEventRegistrationCount(
    eventId: string,
): Promise<number> {
    const supabase = await createClient();

    const { data: count, error } = await supabase.rpc(
        "get_event_registration_count",
        { p_event_id: eventId },
    );

    if (error) {
        console.error("Error occured:", error.message);
        return 0;
    }

    return count ?? 0;
}
