export interface AvatarProps {
    name: string;
    image?: string;
    isShowName?: boolean;
    orientation?: 'horizontal' | 'vertical';
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    color?: 'pink' | 'purple' | 'light-blue' | 'dark-orange' | 'light-purple' | 'blue' | 'green'
    state?: 'no-image' | 'loading' | 'error' | ''
    isEditable?: boolean;
    avatarClass?: string;
    nameClass?: string;
    borderColor?: string;
}