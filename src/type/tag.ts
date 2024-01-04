import {Color} from "./color.ts";

export interface TimeEventTag {
    id: number;
    color_id: number;
    color: Color;
    name: string;
    order: number;
    created_at: string;
    updated_at: string;
}
