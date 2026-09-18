import { createClient } from "@/lib/supabase/server";

export async function getBootcamps(): Promise<Event[] | null> {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from("events")
        .select("*")
        .eq("type", "bootcamp");

    if (error) {
        console.error("Error occured:", error.message);
        return null;
    }

    return data as Event[];
}

export async function getEvents(): Promise<Event[] | null> {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from("events")
        .select("*")
        .order("from_date", { ascending: false })
        .not("type", "eq", "bootcamp");

    if (error) {
        console.error("Error occured:", error.message);
        return null;
    }

    return data as Event[];
}

export async function getEventDetails(slug: string) {
    const supabase = await createClient();

    const { data: event, error } = await supabase
        .from("events")
        .select("*")
        .eq("slug", slug)
        .single();

    if (error) {
        console.error("Error occured:", error.message);
        return null;
    }

    const { data: count } = await supabase.rpc("get_event_registration_count", {
        p_event_id: event.id,
    });

    return { ...event, registrationsCount: count ?? 0 } as EventWithRegistration;
}
