export interface PostAttachmentProps {
    id: number;
    name: string;
    type: string;
    size: number;
    url: string;
    isImage: boolean;
    isVideo: boolean;
    isDocument: boolean;
}

export interface PostFormProps {
    id: number;
    title: string;
    desc: string;
    date: Date;
    attachments: PostAttachmentProps[];
}