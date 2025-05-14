export interface LabelProps {
    text?: string;
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7' | 'h8'; 
    error?: boolean;
    required?: boolean; 
    lightdark?: boolean;
}