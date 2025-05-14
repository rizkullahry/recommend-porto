export interface PostCardCommentProps {
    avatar?: string;
    name?: string;
    position?: string;
    placeName?: string;
    time?: string;
    content?: string;
    isLikeIcon?: boolean;
    like?: number;
    isShowReply?: boolean;
    children?: PostCardCommentProps[]
}





