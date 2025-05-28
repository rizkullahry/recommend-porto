import type { ColorProps } from "@/components/Color/types/Color";

export interface LabelProps extends ColorProps {
    text?: string; //text to display
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7' | 'h8' | 'body-bold' | 'body' | 'small'; //variant of the label 
    error?: boolean; //show error message if true
    required?: boolean; //show * if true
    lightdark?: boolean; //toggle between light and dark mode
}