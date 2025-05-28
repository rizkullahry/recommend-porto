import type { PostCardCommentProps } from "@/components/PostCardComment/types/PostCardComment";

export interface UserProfileProps {
    avatar?: string;
    username: string;
    position: string;
    address: string;
    postTime: string;
}

export interface PostCardProps {
    userProfile: UserProfileProps;
    title?: string;
    desc?: string;
    likes?: number; 
    comments?: number;
    commentsDisable?: boolean;
    isLike?: boolean;
    isEditComment?: boolean;
    isCopy?: boolean;
    commentsData?: PostCardCommentProps[];
}

interface image {
    url:string
}
