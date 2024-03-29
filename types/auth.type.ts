export type TLoginInitialState = {
    email: string;
    password: string;
    remember_me: boolean;
};

export type TLoginResponseSuccess = {
    id: number;
    name: string;
    email: string;
    email_verified_at: string | null;
    token: string;
    created_at: string;
};

export type TRegisterInitialState = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
    agree: boolean;
};

export type TRegisterResponseSuccess = {
    id: number;
    name: string;
    email: string;
    email_verified_at: string | null;
    token: string;
    created_at: string;
};

export type TRoom = {
    room_id: number;
    self: {
        bio: string;
        created_at: string;
        email: string;
        email_verified_at: string | null;
        id: number;
        images: {
            created_at: string;
            id: number;
            image_url: string;
            primary: boolean;
        }[];
        name: string;
        token: string | null;
    };
    opponent: {
        bio: string;
        created_at: string;
        email: string;
        email_verified_at: string | null;
        id: number;
        images: {
            created_at: string;
            id: number;
            image_url: string;
            primary: boolean;
        }[];
        name: string;
        token: string | null;
    };
    messages: {
        created_at: string;
        from: number;
        id: number;
        message: string;
        to: number;
        seen: boolean;
    }[];
    created_at: string;
};
