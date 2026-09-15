import {
    Code,
    Megaphone,
    Settings,
    Users,
    GraduationCap,
    Video,
    Palette,
    UserCog,
    Handshake,
    Film,
    type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
    Code,
    Megaphone,
    Settings,
    Users,
    GraduationCap,
    Video,
    Palette,
    UserCog,
    Handshake,
    Film,
};

export function getIcon(name: string | null): LucideIcon {
    return iconMap[name ?? ""] ?? Code;
}
