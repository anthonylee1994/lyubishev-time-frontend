import {Color} from "./color.ts";
import {TimeEventTag} from "./tag.ts";

export interface TimeEvent {
    id: number;
    tag_id: number;
    tag: TimeEventTag;
    color: Color;
    name: string;
    order: number;
    date: string;
    minute: number;
    created_at: string;
    updated_at: string;
}
