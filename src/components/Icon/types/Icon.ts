export interface IconProps {
    name: string;
    size?: number;
    color?: 'primary' | 'secondary' | 'grey' | 'light-grey' | 'blue' | 'yellow' | 'red' | 'pink' | 'light-purple' | 'purple' | 'tosca' | 'neutral';
    shade?: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
    backgroundColor?: 'primary' | 'secondary' | 'grey' | 'light-grey' | 'blue' | 'yellow' | 'red' | 'pink' | 'light-purple' | 'purple' | 'tosca' | 'neutral';
    backgroundShade?: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
    isFilled?: boolean;
}